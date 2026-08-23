import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  contactFormSchema,
  getEmailContact,
  getFieldErrors,
  type ContactFormInput
} from "../../../lib/contact-schema";
import { limitRequest } from "../../../lib/rate-limit";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 16_000;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_REQUESTS = 5;
const CONTACT_TO = "biuro@inter-dywiz.pl";
const CONTACT_FROM = "Inter-Dywiz – formularz <formularz@inter-dywiz.pl>";
const EMAIL_SUBJECT = "Nowe zapytanie ze strony Inter-Dywiz";

function noStoreJson(body: object, init?: ResponseInit) {
  return NextResponse.json(body, {
    ...init,
    headers: {
      "Cache-Control": "no-store",
      ...init?.headers
    }
  });
}

function hasSameOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");

  if (!origin || !host) {
    return false;
  }

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

function getClientAddress(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}

function createEmailText({
  name,
  contact,
  service,
  travelDate,
  travelTime,
  pickupLocation,
  destination,
  passengerCount,
  message
}: ContactFormInput) {
  return [
    "Nowe zapytanie z formularza kontaktowego Inter-Dywiz.",
    "",
    `Imię i nazwisko: ${name}`,
    `Telefon lub e-mail: ${contact}`,
    `Typ zlecenia: ${service}`,
    `Data przejazdu: ${travelDate}`,
    `Orientacyjna godzina: ${travelTime || "Nie podano"}`,
    `Miejsce odbioru: ${pickupLocation}`,
    `Miejsce docelowe: ${destination}`,
    `Liczba pasażerów: ${passengerCount}`,
    "",
    "Dodatkowe informacje:",
    message || "Nie podano"
  ].join("\n");
}

export async function POST(request: NextRequest) {
  if (!hasSameOrigin(request)) {
    return noStoreJson({ message: "Nieprawidłowe źródło żądania." }, { status: 403 });
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return noStoreJson({ message: "Nieprawidłowy format danych." }, { status: 415 });
  }

  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return noStoreJson({ message: "Wysłane dane są zbyt duże." }, { status: 413 });
  }

  const rateLimit = limitRequest(`contact:${getClientAddress(request)}`, {
    limit: RATE_LIMIT_REQUESTS,
    windowMs: RATE_LIMIT_WINDOW_MS
  });

  if (!rateLimit.allowed) {
    return noStoreJson(
      {
        message: `Zbyt wiele prób. Spróbuj ponownie za około ${rateLimit.retryAfterSeconds} s.`
      },
      {
        status: 429,
        headers: { "Retry-After": String(rateLimit.retryAfterSeconds) }
      }
    );
  }

  let payload: unknown;

  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
      return noStoreJson({ message: "Wysłane dane są zbyt duże." }, { status: 413 });
    }
    payload = JSON.parse(rawBody);
  } catch {
    return noStoreJson({ message: "Nie udało się odczytać danych formularza." }, { status: 400 });
  }

  const validation = contactFormSchema.safeParse(payload);

  if (!validation.success) {
    return noStoreJson(
      {
        message: "Popraw zaznaczone pola formularza.",
        errors: getFieldErrors(validation.error)
      },
      { status: 422 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return noStoreJson(
      { message: "Formularz jest chwilowo niedostępny. Spróbuj ponownie później." },
      { status: 503 }
    );
  }

  try {
    const replyTo = getEmailContact(validation.data.contact);
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      subject: EMAIL_SUBJECT,
      text: createEmailText(validation.data),
      ...(replyTo ? { replyTo } : {})
    });

    if (error) {
      return noStoreJson(
        { message: "Nie udało się wysłać zapytania. Spróbuj ponownie później." },
        { status: 502 }
      );
    }
  } catch {
    return noStoreJson(
      { message: "Formularz jest chwilowo niedostępny. Spróbuj ponownie później." },
      { status: 503 }
    );
  }

  return noStoreJson({ message: "Dziękujemy. Twoje zapytanie zostało wysłane." });
}

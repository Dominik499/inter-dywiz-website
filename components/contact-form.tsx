"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  contactFormSchema,
  contactServiceOptions,
  getFieldErrors,
  isB2BService,
  serviceQueryMap,
  type ContactFormField
} from "../lib/contact-schema";

type FormStatus = "idle" | "submitting" | "success" | "error" | "rate_limited";
type EditableFormData = {
  name: string;
  contact: string;
  service: (typeof contactServiceOptions)[number];
  travelDate: string;
  travelTime: string;
  pickupLocation: string;
  destination: string;
  passengerCount: string;
  companyName: string;
  monthlyTrips: string;
  operatingArea: string;
  message: string;
  privacyAccepted: boolean;
};
type FieldErrors = Partial<Record<ContactFormField, string[] | undefined>>;

const initialFormData: EditableFormData = {
  name: "",
  contact: "",
  service: "Transfer lotniskowy",
  travelDate: "",
  travelTime: "",
  pickupLocation: "",
  destination: "",
  passengerCount: "",
  companyName: "",
  monthlyTrips: "",
  operatingArea: "",
  message: "",
  privacyAccepted: false
};

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState<EditableFormData>(initialFormData);
  const [honeypot, setHoneypot] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const startedAtRef = useRef(Date.now());
  const isB2B = isB2BService(formData.service);

  useEffect(() => {
    const serviceParam = new URLSearchParams(window.location.search).get("service");
    const selectedService = serviceParam && Object.hasOwn(serviceQueryMap, serviceParam)
      ? serviceQueryMap[serviceParam as keyof typeof serviceQueryMap]
      : undefined;

    if (selectedService) {
      setFormData((currentData) => ({ ...currentData, service: selectedService }));
    }
  }, []);

  function clearFieldError(field: ContactFormField) {
    setFieldErrors((currentErrors) => {
      if (!currentErrors[field]) {
        return currentErrors;
      }

      const nextErrors = { ...currentErrors };
      delete nextErrors[field];
      return nextErrors;
    });
  }

  function updateField<Field extends keyof EditableFormData>(
    field: Field,
    value: EditableFormData[Field]
  ) {
    setFormData((currentData) => ({ ...currentData, [field]: value }));
    clearFieldError(field);
    if (status !== "idle") {
      setStatus("idle");
      setMessage("");
    }
  }

  function updateService(service: EditableFormData["service"]) {
    setFormData((currentData) => ({
      ...currentData,
      service,
      ...(isB2BService(service)
        ? {
            travelDate: "",
            travelTime: "",
            pickupLocation: "",
            destination: "",
            passengerCount: ""
          }
        : { companyName: "", monthlyTrips: "", operatingArea: "" })
    }));
    setFieldErrors({});
    if (status !== "idle") {
      setStatus("idle");
      setMessage("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload = {
      ...formData,
      honeypot,
      formStartedAt: startedAtRef.current
    };
    const clientValidation = contactFormSchema.safeParse(payload);

    if (!clientValidation.success) {
      setFieldErrors(getFieldErrors(clientValidation.error));
      setStatus("error");
      setMessage("Popraw zaznaczone pola formularza.");
      return;
    }

    setFieldErrors({});
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        cache: "no-store",
        body: JSON.stringify(payload)
      });
      const responseBody: unknown = await response.json();
      const data = isResponseBody(responseBody) ? responseBody : {};

      if (response.ok) {
        setFormData(initialFormData);
        setHoneypot("");
        startedAtRef.current = Date.now();
        setStatus("success");
        setMessage(data.message ?? "Zapytanie zostało przyjęte.");
        return;
      }

      if (data.errors) {
        setFieldErrors(data.errors);
      }

      setStatus(response.status === 429 ? "rate_limited" : "error");
      setMessage(data.message ?? "Nie udało się wysłać formularza. Spróbuj ponownie później.");
    } catch {
      setStatus("error");
      setMessage("Nie udało się połączyć z serwerem. Spróbuj ponownie później.");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form
      className="rounded-sm border border-navy/10 bg-champagne p-5 shadow-soft sm:p-8"
      method="post"
      action="/api/contact"
      noValidate
      onSubmit={handleSubmit}
      aria-busy={isSubmitting}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold text-navy">Imię i nazwisko</span>
          <input
            className="mt-2 h-12 w-full rounded-sm border border-navy/[0.12] bg-white px-4 text-navy outline-none transition focus:border-gold"
            type="text"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={(event) => updateField("name", event.target.value)}
            minLength={2}
            maxLength={100}
            required
            disabled={isSubmitting}
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
          />
          <FieldError id="name-error" errors={fieldErrors.name} />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-navy">Telefon lub e-mail</span>
          <input
            className="mt-2 h-12 w-full rounded-sm border border-navy/[0.12] bg-white px-4 text-navy outline-none transition focus:border-gold"
            type="text"
            name="contact"
            autoComplete="email"
            value={formData.contact}
            onChange={(event) => updateField("contact", event.target.value)}
            minLength={5}
            maxLength={254}
            required
            disabled={isSubmitting}
            aria-invalid={Boolean(fieldErrors.contact)}
            aria-describedby={fieldErrors.contact ? "contact-error" : undefined}
          />
          <FieldError id="contact-error" errors={fieldErrors.contact} />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="text-sm font-bold text-navy">Typ zlecenia</span>
        <select
          className="mt-2 h-12 w-full rounded-sm border border-navy/[0.12] bg-white px-4 text-navy outline-none transition focus:border-gold"
          name="service"
          value={formData.service}
          onChange={(event) => updateService(event.target.value as EditableFormData["service"])}
          disabled={isSubmitting}
          aria-invalid={Boolean(fieldErrors.service)}
          aria-describedby={fieldErrors.service ? "service-error" : undefined}
        >
          {contactServiceOptions.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
        <FieldError id="service-error" errors={fieldErrors.service} />
      </label>

      {isB2B ? (
        <div className="mt-5 space-y-5">
          <label className="block">
            <span className="text-sm font-bold text-navy">
              Nazwa firmy / hotelu / biura podróży (opcjonalnie)
            </span>
            <input
              className="mt-2 h-12 w-full rounded-sm border border-navy/[0.12] bg-white px-4 text-navy outline-none transition focus:border-gold"
              type="text"
              name="companyName"
              autoComplete="organization"
              value={formData.companyName}
              onChange={(event) => updateField("companyName", event.target.value)}
              maxLength={150}
              disabled={isSubmitting}
              aria-invalid={Boolean(fieldErrors.companyName)}
              aria-describedby={fieldErrors.companyName ? "companyName-error" : undefined}
            />
            <FieldError id="companyName-error" errors={fieldErrors.companyName} />
          </label>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-bold text-navy">
                Przewidywana liczba przejazdów miesięcznie (opcjonalnie)
              </span>
              <input
                className="mt-2 h-12 w-full rounded-sm border border-navy/[0.12] bg-white px-4 text-navy outline-none transition focus:border-gold"
                type="text"
                name="monthlyTrips"
                value={formData.monthlyTrips}
                onChange={(event) => updateField("monthlyTrips", event.target.value)}
                maxLength={100}
                disabled={isSubmitting}
                aria-invalid={Boolean(fieldErrors.monthlyTrips)}
                aria-describedby={fieldErrors.monthlyTrips ? "monthlyTrips-error" : undefined}
              />
              <FieldError id="monthlyTrips-error" errors={fieldErrors.monthlyTrips} />
            </label>
            <label className="block">
              <span className="text-sm font-bold text-navy">
                Obszar działania / typowe trasy (opcjonalnie)
              </span>
              <input
                className="mt-2 h-12 w-full rounded-sm border border-navy/[0.12] bg-white px-4 text-navy outline-none transition focus:border-gold"
                type="text"
                name="operatingArea"
                value={formData.operatingArea}
                onChange={(event) => updateField("operatingArea", event.target.value)}
                maxLength={300}
                disabled={isSubmitting}
                aria-invalid={Boolean(fieldErrors.operatingArea)}
                aria-describedby={fieldErrors.operatingArea ? "operatingArea-error" : undefined}
              />
              <FieldError id="operatingArea-error" errors={fieldErrors.operatingArea} />
            </label>
          </div>
        </div>
      ) : (
        <>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold text-navy">Data przejazdu</span>
          <input
            className="mt-2 h-12 w-full rounded-sm border border-navy/[0.12] bg-white px-4 text-navy outline-none transition focus:border-gold"
            type="date"
            name="travelDate"
            value={formData.travelDate}
            onChange={(event) => updateField("travelDate", event.target.value)}
            required
            disabled={isSubmitting}
            aria-invalid={Boolean(fieldErrors.travelDate)}
            aria-describedby={fieldErrors.travelDate ? "travelDate-error" : undefined}
          />
          <FieldError id="travelDate-error" errors={fieldErrors.travelDate} />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-navy">Orientacyjna godzina</span>
          <input
            className="mt-2 h-12 w-full rounded-sm border border-navy/[0.12] bg-white px-4 text-navy outline-none transition focus:border-gold"
            type="time"
            name="travelTime"
            value={formData.travelTime}
            onChange={(event) => updateField("travelTime", event.target.value)}
            disabled={isSubmitting}
            aria-invalid={Boolean(fieldErrors.travelTime)}
            aria-describedby={fieldErrors.travelTime ? "travelTime-error" : undefined}
          />
          <FieldError id="travelTime-error" errors={fieldErrors.travelTime} />
        </label>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold text-navy">Miejsce odbioru</span>
          <input
            className="mt-2 h-12 w-full rounded-sm border border-navy/[0.12] bg-white px-4 text-navy outline-none transition focus:border-gold"
            type="text"
            name="pickupLocation"
            autoComplete="street-address"
            value={formData.pickupLocation}
            onChange={(event) => updateField("pickupLocation", event.target.value)}
            minLength={2}
            maxLength={200}
            required
            disabled={isSubmitting}
            aria-invalid={Boolean(fieldErrors.pickupLocation)}
            aria-describedby={fieldErrors.pickupLocation ? "pickupLocation-error" : undefined}
          />
          <FieldError id="pickupLocation-error" errors={fieldErrors.pickupLocation} />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-navy">Miejsce docelowe</span>
          <input
            className="mt-2 h-12 w-full rounded-sm border border-navy/[0.12] bg-white px-4 text-navy outline-none transition focus:border-gold"
            type="text"
            name="destination"
            value={formData.destination}
            onChange={(event) => updateField("destination", event.target.value)}
            minLength={2}
            maxLength={200}
            required
            disabled={isSubmitting}
            aria-invalid={Boolean(fieldErrors.destination)}
            aria-describedby={fieldErrors.destination ? "destination-error" : undefined}
          />
          <FieldError id="destination-error" errors={fieldErrors.destination} />
        </label>
      </div>

      <label className="mt-5 block sm:max-w-[calc(50%_-_0.625rem)]">
        <span className="text-sm font-bold text-navy">Liczba pasażerów</span>
        <input
          className="mt-2 h-12 w-full rounded-sm border border-navy/[0.12] bg-white px-4 text-navy outline-none transition focus:border-gold"
          type="number"
          name="passengerCount"
          inputMode="numeric"
          min={1}
          max={200}
          step={1}
          value={formData.passengerCount}
          onChange={(event) => updateField("passengerCount", event.target.value)}
          required
          disabled={isSubmitting}
          aria-invalid={Boolean(fieldErrors.passengerCount)}
          aria-describedby={fieldErrors.passengerCount ? "passengerCount-error" : undefined}
        />
        <FieldError id="passengerCount-error" errors={fieldErrors.passengerCount} />
      </label>
        </>
      )}

      <label className="mt-5 block">
        <span className="text-sm font-bold text-navy">Dodatkowe informacje (opcjonalnie)</span>
        <textarea
          className="mt-2 min-h-36 w-full resize-y rounded-sm border border-navy/[0.12] bg-white px-4 py-3 text-navy outline-none transition focus:border-gold"
          name="message"
          value={formData.message}
          onChange={(event) => updateField("message", event.target.value)}
          maxLength={2000}
          disabled={isSubmitting}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
        />
        <FieldError id="message-error" errors={fieldErrors.message} />
      </label>

      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Nie wypełniaj tego pola</label>
        <input
          id="website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-graphite/[0.82]">
        <input
          className="mt-1 h-4 w-4 shrink-0 accent-navy"
          type="checkbox"
          name="privacyAccepted"
          checked={formData.privacyAccepted}
          onChange={(event) => updateField("privacyAccepted", event.target.checked)}
          required
          disabled={isSubmitting}
          aria-invalid={Boolean(fieldErrors.privacyAccepted)}
          aria-describedby={fieldErrors.privacyAccepted ? "privacyAccepted-error" : undefined}
        />
        <span>
          Zapoznałem/-am się z{" "}
          <a
            className="font-bold text-navy underline hover:text-gold"
            href="/polityka-prywatnosci"
            target="_blank"
            rel="noopener noreferrer"
          >
            polityką prywatności
          </a>{" "}
          i przyjmuję do wiadomości zasady przetwarzania danych w celu obsługi zapytania.
        </span>
      </label>
      <FieldError id="privacyAccepted-error" errors={fieldErrors.privacyAccepted} />

      {status !== "idle" && status !== "submitting" ? (
        <p
          className={`mt-5 text-sm leading-6 ${status === "success" ? "text-green-800" : "text-red-800"}`}
          role={status === "success" ? "status" : "alert"}
          aria-live="polite"
        >
          {message}
        </p>
      ) : null}

      <button
        type="submit"
        className="mt-6 inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-sm bg-navy px-6 text-base font-extrabold text-white shadow-soft transition hover:bg-graphite disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Wysyłanie…" : "Wyślij zapytanie o wycenę"} <ArrowIcon />
      </button>
      <p className="mt-4 text-xs leading-5 text-graphite/[0.64]">
        Odpowiemy na Twoje zapytanie tak szybko, jak to możliwe.
      </p>
    </form>
  );
}

function FieldError({ id, errors }: { id: string; errors?: string[] }) {
  if (!errors?.[0]) {
    return null;
  }

  return (
    <p id={id} className="mt-2 text-sm text-red-800" role="alert">
      {errors[0]}
    </p>
  );
}

function isResponseBody(value: unknown): value is { message?: string; errors?: FieldErrors } {
  return typeof value === "object" && value !== null;
}

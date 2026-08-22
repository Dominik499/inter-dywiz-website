"use client";

import { FormEvent, useRef, useState } from "react";
import {
  contactFormSchema,
  contactServiceOptions,
  getFieldErrors,
  type ContactFormField
} from "../lib/contact-schema";

type FormStatus = "idle" | "submitting" | "success" | "error" | "rate_limited";
type EditableFormData = {
  name: string;
  contact: string;
  service: (typeof contactServiceOptions)[number];
  message: string;
  privacyAccepted: boolean;
};
type FieldErrors = Partial<Record<ContactFormField, string[] | undefined>>;

const initialFormData: EditableFormData = {
  name: "",
  contact: "",
  service: "Transfer lotniskowy",
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
          onChange={(event) => updateField("service", event.target.value as EditableFormData["service"])}
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

      <label className="mt-5 block">
        <span className="text-sm font-bold text-navy">Wiadomość</span>
        <textarea
          className="mt-2 min-h-36 w-full resize-y rounded-sm border border-navy/[0.12] bg-white px-4 py-3 text-navy outline-none transition focus:border-gold"
          name="message"
          value={formData.message}
          onChange={(event) => updateField("message", event.target.value)}
          minLength={20}
          maxLength={2000}
          required
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
          Zapoznałem/-am się z <a className="font-bold text-navy underline hover:text-gold" href="/polityka-prywatnosci">polityką prywatności</a> i przyjmuję do wiadomości zasady przetwarzania danych w celu obsługi zapytania.
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
        {isSubmitting ? "Wysyłanie…" : "Wyślij zapytanie"} <ArrowIcon />
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

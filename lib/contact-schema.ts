import { z } from "zod";

export const contactServiceOptions = [
  "Transfer lotniskowy",
  "Transport biznesowy",
  "Van 7+1 lub 8+1",
  "Kierowca do dyspozycji",
  "Stała współpraca"
] as const;

const phonePattern = /^\+?[0-9 ()-]{7,25}$/;

export function getEmailContact(value: string) {
  const result = z.email().safeParse(value.trim());
  return result.success ? result.data : undefined;
}

function isEmailOrPhone(value: string) {
  const normalizedValue = value.trim();
  const phoneDigits = normalizedValue.replace(/\D/g, "");

  return Boolean(getEmailContact(normalizedValue)) || (phonePattern.test(normalizedValue) && phoneDigits.length >= 7);
}

function isValidIsoDate(value: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);

  if (!match) {
    return false;
  }

  const [, year, month, day] = match;
  const date = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));

  return (
    date.getUTCFullYear() === Number(year) &&
    date.getUTCMonth() === Number(month) - 1 &&
    date.getUTCDate() === Number(day)
  );
}

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Podaj imię i nazwisko (co najmniej 2 znaki).")
    .max(100, "Imię i nazwisko może mieć maksymalnie 100 znaków."),
  contact: z
    .string()
    .trim()
    .min(5, "Podaj adres e-mail lub numer telefonu.")
    .max(254, "Dane kontaktowe mogą mieć maksymalnie 254 znaki.")
    .refine(isEmailOrPhone, "Podaj poprawny adres e-mail lub numer telefonu."),
  service: z.enum(contactServiceOptions),
  travelDate: z
    .string()
    .trim()
    .refine(isValidIsoDate, "Podaj poprawną datę przejazdu."),
  travelTime: z
    .string()
    .trim()
    .refine((value) => value === "" || /^([01]\d|2[0-3]):[0-5]\d$/.test(value), {
      message: "Podaj poprawną godzinę przejazdu."
    }),
  pickupLocation: z
    .string()
    .trim()
    .min(2, "Podaj miejsce odbioru.")
    .max(200, "Miejsce odbioru może mieć maksymalnie 200 znaków."),
  destination: z
    .string()
    .trim()
    .min(2, "Podaj miejsce docelowe.")
    .max(200, "Miejsce docelowe może mieć maksymalnie 200 znaków."),
  passengerCount: z
    .string()
    .trim()
    .regex(/^\d+$/, "Podaj liczbę pasażerów.")
    .refine((value) => {
      const count = Number(value);
      return count >= 1 && count <= 200;
    }, "Liczba pasażerów musi wynosić od 1 do 200."),
  message: z.string().trim().max(2000, "Dodatkowe informacje mogą mieć maksymalnie 2000 znaków."),
  privacyAccepted: z.literal(true, {
    error: "Akceptacja polityki prywatności jest wymagana."
  }),
  honeypot: z.string().max(0, "Nieprawidłowe zgłoszenie."),
  formStartedAt: z
    .number()
    .int()
    .positive()
    .refine(
      (value) => Date.now() - value >= 1500 && Date.now() - value < 24 * 60 * 60 * 1000,
      "Formularz został wysłany zbyt szybko. Spróbuj ponownie za chwilę."
    )
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
export type ContactFormField = keyof ContactFormInput;

export function getFieldErrors(error: z.ZodError) {
  return error.flatten().fieldErrors;
}

import type { Metadata } from "next";
import ServiceLandingPage from "../../components/service-landing-page";

export const metadata: Metadata = {
  title: "Transport biznesowy Kraków | Inter-Dywiz",
  description:
    "Transport biznesowy w Krakowie i Małopolsce: spotkania, konferencje, delegacje, goście VIP i kierowca do dyspozycji.",
  alternates: {
    canonical: "/transport-biznesowy-krakow"
  },
  openGraph: {
    title: "Transport biznesowy Kraków | Inter-Dywiz",
    description:
      "Transport biznesowy w Krakowie i Małopolsce: spotkania, konferencje, delegacje, goście VIP i kierowca do dyspozycji.",
    url: "https://www.inter-dywiz.pl/transport-biznesowy-krakow"
  },
  twitter: {
    card: "summary",
    title: "Transport biznesowy Kraków | Inter-Dywiz",
    description:
      "Transport biznesowy w Krakowie i Małopolsce: spotkania, konferencje, delegacje, goście VIP i kierowca do dyspozycji."
  }
};

export default function BusinessTransportPage() {
  return (
    <ServiceLandingPage
      currentPath="/transport-biznesowy-krakow"
      serviceParam="business"
      eyebrow="Obsługa biznesowa"
      title="Transport biznesowy w Krakowie"
      intro="Planujemy przejazdy na spotkania, konferencje i delegacje oraz transport gości biznesowych i VIP w Krakowie i Małopolsce."
      image={{
        src: "/images/taxi-line-inter-dywiz.webp",
        alt: "Pojazdy do obsługi transportu biznesowego w Krakowie",
        width: 1448,
        height: 1086
      }}
      descriptionTitle="Przejazdy zgodne z harmonogramem dnia"
      description={[
        "Ustalamy godziny, miejsca odbioru i kolejność przejazdów, dzięki czemu transport może odpowiadać planowi spotkań, konferencji albo delegacji. Jeden kontakt operacyjny upraszcza przekazywanie zmian i koordynację odbiorów.",
        "Usługa może obejmować pojedynczy przejazd, kilka tras jednego dnia albo samochód z kierowcą na ustalony czas. Dobieramy pojazd do charakteru przejazdu oraz liczby pasażerów.",
        "Obsługujemy przejazdy w Krakowie i Małopolsce, w tym transport gości biznesowych i VIP oraz grup uczestniczących w wydarzeniach firmowych."
      ]}
      applications={[
        "Spotkania i dzień wizyt w kilku lokalizacjach",
        "Konferencje i wydarzenia firmowe",
        "Delegacje i transport zespołów",
        "Obsługa gości biznesowych i VIP"
      ]}
      benefits={[
        "Ustalony harmonogram i miejsca odbioru",
        "Jeden kontakt operacyjny",
        "Możliwość realizacji kilku tras",
        "Kierowca do dyspozycji na ustalony czas"
      ]}
      ctaLabel="Zapytaj o transport biznesowy"
      faq={[
        {
          question: "Czy można zamówić kierowcę na kilka godzin?",
          answer: "Tak. Kierowca może pozostawać do dyspozycji przez ustalony czas i realizować uzgodniony plan przejazdów."
        },
        {
          question: "Czy obsługujecie konferencje i delegacje?",
          answer: "Tak. Organizujemy transport uczestników, zespołów oraz gości biznesowych zgodnie z harmonogramem wydarzenia lub delegacji."
        },
        {
          question: "Czy można zaplanować kilka przejazdów jednego dnia?",
          answer: "Tak. Możemy ustalić kolejność odbiorów, kilka tras oraz liczbę potrzebnych pojazdów."
        },
        {
          question: "Czy wystawiacie faktury?",
          answer: "Tak. Przejazdy mogą być rozliczane na podstawie faktury, a zasady rozliczeń ustalamy przed realizacją."
        }
      ]}
    />
  );
}

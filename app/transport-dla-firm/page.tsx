import type { Metadata } from "next";
import ServiceLandingPage from "../../components/service-landing-page";

export const metadata: Metadata = {
  title: "Transport dla firm Kraków | Inter-Dywiz",
  description:
    "Stała obsługa transportowa firm, hoteli, biur podróży i wydarzeń w Krakowie: jeden kontakt, harmonogramy i zbiorcze rozliczenia.",
  alternates: {
    canonical: "/transport-dla-firm"
  },
  openGraph: {
    title: "Transport dla firm Kraków | Inter-Dywiz",
    description:
      "Stała obsługa transportowa firm, hoteli, biur podróży i wydarzeń w Krakowie: jeden kontakt, harmonogramy i zbiorcze rozliczenia.",
    url: "https://www.inter-dywiz.pl/transport-dla-firm"
  },
  twitter: {
    card: "summary",
    title: "Transport dla firm Kraków | Inter-Dywiz",
    description:
      "Stała obsługa transportowa firm, hoteli, biur podróży i wydarzeń w Krakowie: jeden kontakt, harmonogramy i zbiorcze rozliczenia."
  }
};

export default function TransportForCompaniesPage() {
  return (
    <ServiceLandingPage
      currentPath="/transport-dla-firm"
      serviceParam="b2b"
      eyebrow="Współpraca B2B"
      title="Transport dla firm w Krakowie"
      intro="Stała lub okazjonalna obsługa transportowa dla firm, hoteli, biur podróży i organizatorów wydarzeń — z jednym kontaktem operacyjnym."
      image={{
        src: "/images/volkswagen-passat-business.webp",
        alt: "Srebrny samochód klasy biznesowej",
        width: 1200,
        height: 1800,
        objectPosition: "object-[center_62%]"
      }}
      descriptionTitle="Przejrzysty sposób zlecania i koordynacji przejazdów"
      description={[
        "Współpracę rozpoczynamy od ustalenia sposobu zgłaszania przejazdów, osoby kontaktowej i zasad rozliczeń. Pozwala to obsługiwać zarówno pojedyncze zlecenia, jak i przejazdy cykliczne bez każdorazowego ustalania procesu od początku.",
        "Koordynujemy transfery dla firm, hoteli, biur podróży i organizatorów wydarzeń. Jeden kontakt operacyjny może objąć większy harmonogram, wiele tras oraz kilka pojazdów realizujących przejazdy w podobnym czasie.",
        "Dostęp do sieci ponad 100 pojazdów ułatwia dopasowanie skali obsługi do zlecenia. Dla uzgodnionej współpracy dostępna jest możliwość zbiorczego rozliczenia przejazdów."
      ]}
      applications={[
        "Stałe transfery gości hotelowych",
        "Przejazdy pracowników i gości firmowych",
        "Obsługa grup biur podróży",
        "Transport uczestników wydarzeń"
      ]}
      benefits={[
        "Jeden kontakt operacyjny",
        "Ustalony sposób zgłaszania przejazdów",
        "Obsługa wielu transferów jednocześnie",
        "Możliwość zleceń cyklicznych i zbiorczych rozliczeń"
      ]}
      ctaLabel="Zapytaj o stałą współpracę"
      faq={[
        {
          question: "Jak wygląda rozpoczęcie współpracy?",
          answer: "Ustalamy zakres potrzeb, sposób przekazywania zleceń, osobę kontaktową oraz zasady realizacji i rozliczeń."
        },
        {
          question: "Czy można rozliczać kilka przejazdów zbiorczo?",
          answer: "Tak. Możliwość zbiorczego rozliczenia jest dostępna po uzgodnieniu zasad współpracy."
        },
        {
          question: "Czy obsługujecie wiele transferów jednocześnie?",
          answer: "Tak. Możemy koordynować większy harmonogram, kilka tras i wiele pojazdów realizujących przejazdy w zbliżonym czasie."
        },
        {
          question: "Czy współpracujecie z hotelami i biurami podróży?",
          answer: "Tak. Oferta stałej obsługi jest skierowana między innymi do hoteli, biur podróży, firm i organizatorów wydarzeń."
        }
      ]}
    />
  );
}

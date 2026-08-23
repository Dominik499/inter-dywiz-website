import type { Metadata } from "next";
import ServiceLandingPage from "../../components/service-landing-page";

export const metadata: Metadata = {
  title: "Transfer lotniskowy Kraków-Balice | Inter-Dywiz",
  description:
    "Transfer z lotniska Kraków-Balice z monitoringiem lotu, odbiorem z tabliczką i pojazdem dobranym do liczby pasażerów oraz bagażu.",
  alternates: {
    canonical: "/transfer-lotnisko-krakow"
  }
};

export default function AirportTransferPage() {
  return (
    <ServiceLandingPage
      currentPath="/transfer-lotnisko-krakow"
      eyebrow="Transfery lotniskowe"
      title="Transfer lotniskowy Kraków-Balice"
      intro="Koordynujemy odbiór z godziną przylotu, monitorujemy lot i dobieramy pojazd do liczby pasażerów oraz bagażu."
      image={{
        src: "/images/mercedes-v-class-exterior.webp",
        alt: "Czarny van klasy premium do transferów grupowych",
        width: 1800,
        height: 1200
      }}
      descriptionTitle="Odbiór z lotniska dopasowany do przylotu"
      description={[
        "Realizujemy odbiory pasażerów z lotniska Kraków-Balice. Monitorowanie lotu ułatwia skoordynowanie godziny odbioru z rzeczywistym przylotem, a na życzenie kierowca może oczekiwać z tabliczką imienną.",
        "Dobieramy samochód lub vana do liczby podróżnych i bagażu. Transfer może prowadzić do hotelu, siedziby firmy, apartamentu albo innego miasta i może być częścią większego harmonogramu przejazdów.",
        "Obsługujemy klientów indywidualnych, firmy, hotele oraz grupy, które potrzebują jednego pojazdu lub skoordynowania kilku odbiorów."
      ]}
      applications={[
        "Przejazd z lotniska do hotelu lub apartamentu",
        "Odbiór gościa biznesowego albo VIP",
        "Transfer grupy z bagażem",
        "Przejazd z Kraków Airport do innego miasta"
      ]}
      benefits={[
        "Monitoring lotu i koordynacja godziny odbioru",
        "Możliwość spotkania z tabliczką imienną",
        "Dobór pojazdu do pasażerów i bagażu",
        "Możliwość organizacji kilku transferów"
      ]}
      ctaLabel="Zapytaj o wycenę transferu"
      faq={[
        {
          question: "Czy monitorujecie opóźnienia lotów?",
          answer: "Tak. Monitorujemy lot, aby skoordynować godzinę odbioru z aktualną godziną przylotu."
        },
        {
          question: "Czy kierowca może czekać z tabliczką imienną?",
          answer: "Tak. Przy ustalaniu transferu można zamówić spotkanie pasażera z tabliczką imienną."
        },
        {
          question: "Czy realizujecie transfery poza Kraków?",
          answer: "Tak. Miejsce docelowe może znajdować się w Krakowie, Małopolsce lub innym mieście uzgodnionym przy wycenie."
        },
        {
          question: "Czy można zamówić vana dla większej grupy?",
          answer: "Tak. Dostępne są vany 7+1 i 8+1, a przy większym zleceniu możemy skoordynować kilka pojazdów."
        }
      ]}
    />
  );
}

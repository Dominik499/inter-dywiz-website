import type { Metadata } from "next";
import ServiceLandingPage from "../../components/service-landing-page";

export const metadata: Metadata = {
  title: "Van z kierowcą Kraków | Inter-Dywiz",
  description:
    "Vany 7+1 i 8+1 z kierowcą w Krakowie dla grup, rodzin, zespołów, gości hotelowych oraz transferów lotniskowych i biznesowych.",
  alternates: {
    canonical: "/van-z-kierowca-krakow"
  }
};

export default function VanWithDriverPage() {
  return (
    <ServiceLandingPage
      currentPath="/van-z-kierowca-krakow"
      eyebrow="Transport grupowy"
      title="Van z kierowcą w Krakowie"
      intro="Vany 7+1 i 8+1 dla grup, rodzin, zespołów i gości hotelowych — na transfer lotniskowy, wydarzenie lub przejazd biznesowy."
      image={{
        src: "/images/mercedes-v-class-interior.webp",
        alt: "Wnętrze vana klasy premium",
        width: 1800,
        height: 1200
      }}
      descriptionTitle="Jeden van lub kilka pojazdów dla grupy"
      description={[
        "Organizujemy przejazdy vanami 7+1 i 8+1 z kierowcą w Krakowie. To rozwiązanie dla rodzin, zespołów, grup turystycznych i gości hotelowych podróżujących wspólnie.",
        "Van może zostać wykorzystany do transferu z lotniska, przejazdu na wydarzenie, obsługi dnia spotkań albo transportu biznesowego. Pojazd dobieramy do liczby pasażerów, charakteru trasy i bagażu, bez deklarowania jednej stałej konfiguracji dla każdego zlecenia.",
        "Przy większej liczbie osób możemy zaplanować kilka vanów lub połączyć różne pojazdy w jednym harmonogramie."
      ]}
      applications={[
        "Transfer lotniskowy rodziny lub grupy",
        "Transport gości hotelowych",
        "Przejazd zespołu na spotkanie lub wydarzenie",
        "Obsługa grupy kilkoma pojazdami"
      ]}
      benefits={[
        "Vany w konfiguracji 7+1 i 8+1",
        "Dobór pojazdu do pasażerów i bagażu",
        "Możliwość koordynacji kilku vanów",
        "Trasy w Krakowie, Małopolsce i do innych miast"
      ]}
      ctaLabel="Zapytaj o vana z kierowcą"
      faq={[
        {
          question: "Ile osób może podróżować vanem?",
          answer: "Dostępne są vany w konfiguracji 7+1 i 8+1. Konkretny pojazd dobieramy również z uwzględnieniem bagażu i charakteru przejazdu."
        },
        {
          question: "Czy van nadaje się na transfer z lotniska?",
          answer: "Tak. Vany mogą obsługiwać transfery z Kraków Airport dla rodzin, grup i gości hotelowych."
        },
        {
          question: "Czy można zamówić kilka vanów?",
          answer: "Tak. Przy większym zleceniu możemy skoordynować kilka vanów lub kilka różnych pojazdów."
        },
        {
          question: "Czy realizujecie przejazdy poza Kraków?",
          answer: "Tak. Trasa może obejmować Kraków, Małopolskę oraz inne miasta uzgodnione przy wycenie."
        }
      ]}
    />
  );
}

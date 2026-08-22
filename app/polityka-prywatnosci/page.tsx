import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka prywatności | Inter-Dywiz Sp. z o.o.",
  description: "Informacje o przetwarzaniu danych osobowych przez Inter-Dywiz Sp. z o.o."
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-champagne px-5 py-12 text-graphite sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl rounded-sm bg-white p-6 shadow-soft sm:p-10">
        <a className="text-sm font-bold text-navy underline hover:text-gold" href="/">
          ← Wróć na stronę główną
        </a>
        <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-gold">
          Inter-Dywiz Sp. z o.o.
        </p>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-navy sm:text-4xl">
          Polityka prywatności
        </h1>
        <p className="mt-6 leading-8">
          Niniejsza informacja opisuje zasady przetwarzania danych osobowych przekazywanych przez
          stronę internetową Inter-Dywiz Sp. z o.o.
        </p>

        <div className="mt-8 space-y-8 leading-8">
          <section>
            <h2 className="text-xl font-black text-navy">1. Administrator danych</h2>
            <p className="mt-2">
              Administratorem danych osobowych jest INTER-DYWIZ Sp. z o.o.
              <br />
              ul. Bulwarowa 13A/2
              <br />
              31-751 Kraków
              <br />
              NIP: 6751496482
              <br />
              REGON: 123040168
              <br />
              KRS: 0000496661
              <br />
              e-mail: biuro@inter-dywiz.pl
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-navy">2. Zakres i cel przetwarzania</h2>
            <p className="mt-2">
              Formularz może obejmować imię i nazwisko, dane kontaktowe, typ zlecenia oraz treść
              zapytania. Dane są przetwarzane wyłącznie w celu odpowiedzi na zapytanie i
              przygotowania oferty.
            </p>
            <p className="mt-2">
              Zgłoszenie jest przekazywane e-mailem na adres biuro@inter-dywiz.pl z użyciem
              usługi Resend, która działa jako podmiot przetwarzający dane na rzecz administratora.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-navy">3. Podstawa prawna i okres przechowywania</h2>
            <p className="mt-2">
              Podstawą przetwarzania danych jest art. 6 ust. 1 lit. b RODO, jeżeli zapytanie
              prowadzi do podjęcia działań przed zawarciem umowy lub do zawarcia umowy, albo art. 6
              ust. 1 lit. f RODO — prawnie uzasadniony interes administratora polegający na obsłudze
              zapytań i prowadzeniu korespondencji.
            </p>
            <p className="mt-2">
              Dane przekazane w związku z zapytaniem za pośrednictwem formularza kontaktowego będą
              przechowywane przez okres niezbędny do obsługi zapytania i prowadzenia związanej z
              nim korespondencji, a następnie nie dłużej niż przez 12 miesięcy od zakończenia
              korespondencji. Jeżeli kontakt doprowadzi do zawarcia umowy, dane mogą być
              przechowywane przez okres wymagany przepisami prawa oraz do czasu upływu terminów
              przedawnienia ewentualnych roszczeń.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-navy">4. Ochrona formularza</h2>
            <p className="mt-2">
              W celu ochrony strony przed nadużyciami formularz wykorzystuje mechanizmy walidacji,
              pole pułapkę dla botów oraz ograniczenie liczby prób z jednego adresu IP. Adres IP
              jest używany wyłącznie do tymczasowego egzekwowania tego ograniczenia i nie jest
              zapisywany przez formularz jako treść zgłoszenia.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-navy">5. Prawa osoby, której dane dotyczą</h2>
            <p className="mt-2">
              Osobie, której dane dotyczą, przysługuje prawo dostępu do danych, ich sprostowania,
              usunięcia, ograniczenia przetwarzania, przenoszenia danych, wniesienia sprzeciwu
              oraz złożenia skargi do Prezesa Urzędu Ochrony Danych Osobowych.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-navy">6. Kontakt</h2>
            <p className="mt-2">
              W sprawach dotyczących prywatności skontaktuj się pod adresem{' '}
              <a className="font-bold text-navy underline hover:text-gold" href="mailto:biuro@inter-dywiz.pl">
                biuro@inter-dywiz.pl
              </a>.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}

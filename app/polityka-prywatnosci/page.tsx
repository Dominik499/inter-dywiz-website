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
              Administratorem danych osobowych jest Inter-Dywiz Sp. z o.o. Dane rejestrowe,
              adres siedziby oraz dane kontaktowe administratora powinny zostać uzupełnione przed
              uruchomieniem formularza w środowisku produkcyjnym.
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
              Po uruchomieniu obsługi formularza podstawą przetwarzania będzie art. 6 ust. 1 lit.
              b RODO, jeżeli zapytanie prowadzi do zawarcia umowy, albo art. 6 ust. 1 lit. f RODO
              — prawnie uzasadniony interes administratora polegający na obsłudze zapytań. Dane
              będą przechowywane nie dłużej, niż jest to konieczne do obsługi zapytania oraz
              ewentualnego dochodzenia lub obrony roszczeń. Administrator powinien uzupełnić ten
              zapis o konkretny okres retencji przed publikacją strony produkcyjnej.
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
              <a className="font-bold text-navy underline hover:text-gold" href="mailto:kontakt@inter-dywiz.pl">
                kontakt@inter-dywiz.pl
              </a>.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}

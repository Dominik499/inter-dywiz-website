import Image from "next/image";
import ContactForm from "../components/contact-form";

const phoneDisplay = "+48 574 505 323";
const phoneHref = "tel:+48574505323";
const whatsappHref = "https://wa.me/48574505323";
const email = "biuro@inter-dywiz.pl";

const services = [
  {
    title: "Transfery lotniskowe",
    description:
      "Odbiór z lotniska Kraków-Balice z monitoringiem lotu i możliwością spotkania pasażera z tabliczką imienną. Koordynujemy godzinę odbioru z przylotem i dobieramy pojazd do liczby pasażerów oraz bagażu.",
    href: "/transfer-lotnisko-krakow",
    linkLabel: "Zobacz transfery lotniskowe"
  },
  {
    title: "Transport biznesowy",
    description:
      "Transport na spotkania, konferencje i delegacje oraz obsługa gości biznesowych i VIP. Ustalamy harmonogram, miejsca odbioru i sposób realizacji przejazdów.",
    href: "/transport-biznesowy-krakow",
    linkLabel: "Zobacz transport biznesowy"
  },
  {
    title: "Vany 7+1 i 8+1",
    description:
      "Van z kierowcą w Krakowie dla grup, rodzin, zespołów i gości hotelowych. Dobieramy pojazd do liczby pasażerów, charakteru przejazdu i bagażu.",
    href: "/van-z-kierowca-krakow",
    linkLabel: "Zobacz vany z kierowcą"
  },
  {
    title: "Kierowca do dyspozycji",
    description:
      "Samochód z kierowcą na ustalony czas — na dzień spotkań, wydarzenie, wizyty w kilku lokalizacjach lub pobyt grupy w Krakowie i Małopolsce.",
    href: undefined,
    linkLabel: undefined
  },
  {
    title: "Dla hoteli i biur podróży",
    description:
      "Stała obsługa transferów dla hoteli, biur podróży i firm. Jeden kontakt operacyjny, koordynacja pojedynczych przejazdów i większych harmonogramów oraz możliwość zbiorczego rozliczenia.",
    href: "/transport-dla-firm",
    linkLabel: "Zobacz ofertę dla firm"
  }
];

const benefits = [
  "Dostępność 24/7",
  "Wiele transferów jednocześnie",
  "Jedna faktura",
  "Obsługa grup",
  "Szybka reakcja"
];

const stats = [
  ["100+", "dostępnych pojazdów"],
  ["24/7", "dyspozycyjność"],
  ["7+1 i 8+1", "vany dla grup"]
];

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

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="m20 6-11 11-5-5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-navy/[0.86] shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#hero" className="group flex items-center gap-3" aria-label="Inter-Dywiz">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/[0.55] bg-white text-sm font-black text-navy shadow-[0_10px_30px_rgba(200,164,93,0.24)] transition group-hover:border-gold">
              ID
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold uppercase tracking-[0.18em] text-white">
                Inter-Dywiz
              </span>
              <span className="mt-0.5 block text-xs text-white/[0.62]">
                Transport premium z Krakowa
              </span>
            </span>
          </a>
          <div className="hidden items-center gap-9 text-sm font-semibold text-white/[0.74] md:flex">
            <a className="transition hover:text-gold" href="#uslugi">
              Usługi
            </a>
            <a className="transition hover:text-gold" href="#o-nas">
              Współpraca
            </a>
            <a className="transition hover:text-gold" href="#kontakt">
              Kontakt
            </a>
          </div>
          <a
            href={phoneHref}
            className="inline-flex h-11 items-center justify-center rounded-xl bg-gold px-5 text-sm font-extrabold text-navy shadow-[0_12px_34px_rgba(200,164,93,0.3)] transition hover:-translate-y-0.5 hover:bg-champagne"
          >
            Zadzwoń
          </a>
        </nav>
      </header>

      <section id="hero" className="relative min-h-screen overflow-hidden bg-navy pt-24 text-white">
        <div className="absolute inset-0 premium-grid opacity-20" />
        <div className="absolute -right-32 top-12 h-[520px] w-[520px] rounded-full bg-gold/[0.12] blur-[130px]" />
        <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-400/[0.08] blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(7,25,54,0.98),rgba(7,25,54,0.9)_48%,rgba(10,25,48,0.82))]" />
        <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-5 pb-16 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[0.94fr_1.06fr] lg:gap-16 lg:px-8 lg:pb-24 lg:pt-24">
          <div className="max-w-3xl lg:py-4">
            <p className="mb-6 inline-flex rounded-full border border-gold/[0.38] bg-white/[0.07] px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-gold shadow-[0_10px_34px_rgba(0,0,0,0.16)] backdrop-blur-sm sm:text-xs">
              Inter-Dywiz Sp. z o.o.
            </p>
            <h1 className="max-w-[760px] text-balance text-4xl font-black leading-[1.04] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.8rem] xl:text-[4.25rem]">
              Transfery lotniskowe i transport grupowy w Krakowie
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-base leading-8 text-white/[0.74] sm:text-lg xl:text-xl">
              Organizujemy pojedyncze przejazdy i wiele transferów jednocześnie — dla firm,
              hoteli, biur podróży, grup oraz klientów indywidualnych. Vany 7+1 i 8+1, transport
              biznesowy i kierowca do dyspozycji.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap xl:flex-nowrap">
              <a
                href="#kontakt"
                className="inline-flex h-[54px] items-center justify-center gap-2 rounded-xl bg-gold px-6 text-base font-extrabold text-navy shadow-[0_16px_42px_rgba(200,164,93,0.28)] transition hover:-translate-y-0.5 hover:bg-champagne"
              >
                Zapytaj o wycenę <ArrowIcon />
              </a>
              <a
                href={phoneHref}
                className="inline-flex h-[54px] items-center justify-center rounded-xl border border-white/[0.16] bg-white/[0.08] px-6 text-base font-bold text-white shadow-[0_12px_34px_rgba(0,0,0,0.12)] backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-gold hover:text-gold"
              >
                Zadzwoń: {phoneDisplay}
              </a>
              <a
                href={whatsappHref}
                className="inline-flex h-[54px] items-center justify-center rounded-xl border border-white/[0.16] bg-navy/[0.35] px-6 text-base font-bold text-white transition hover:-translate-y-0.5 hover:border-gold hover:text-gold"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="relative lg:pl-2">
            <div className="absolute -inset-4 rounded-[2.25rem] bg-gold/[0.08] blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.14] bg-white/[0.07] shadow-[0_36px_100px_rgba(0,0,0,0.36)] backdrop-blur-sm">
              <Image
                src="/images/hero-pacifica-wawel.webp"
                alt="Transfery lotniskowe i transport grupowy w Krakowie – Inter-Dywiz"
                width={1448}
                height={1086}
                priority
                sizes="(min-width: 1280px) 576px, (min-width: 1024px) 46vw, calc(100vw - 40px)"
                className="aspect-[1.42] h-auto w-full object-cover object-center"
              />
              <div className="grid grid-cols-3 border-t border-white/[0.1] bg-white text-navy">
                {stats.map(([value, label]) => (
                  <div
                    key={value}
                    className="min-w-0 border-r border-navy/[0.1] px-3 py-4 text-center last:border-r-0 sm:px-5 sm:py-5 lg:text-left"
                  >
                    <p className="text-base font-black tracking-tight text-navy sm:text-2xl">
                      {value}
                    </p>
                    <p className="mt-1 text-[10px] font-bold uppercase leading-4 tracking-[0.08em] text-graphite/[0.62] sm:text-[11px] sm:tracking-[0.1em]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="uslugi" className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-gold">Usługi</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-navy sm:text-4xl">
              Transport dopasowany do trasy, liczby pasażerów i harmonogramu
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="rounded-sm border border-navy/10 bg-white p-6 shadow-[0_16px_48px_rgba(7,25,54,0.08)] transition hover:-translate-y-1 hover:border-gold/60"
              >
                <span className="text-sm font-black text-gold">0{index + 1}</span>
                <h3 className="mt-5 text-lg font-black leading-tight text-navy">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-graphite/[0.78]">{service.description}</p>
                {service.href && (
                  <a
                    className="mt-5 inline-flex items-center gap-2 text-sm font-black text-navy underline decoration-gold/50 underline-offset-4 transition hover:text-gold"
                    href={service.href}
                  >
                    {service.linkLabel} <ArrowIcon />
                  </a>
                )}
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="overflow-hidden rounded-sm border border-navy/10 bg-navy shadow-soft">
              <Image
                src="/images/fleet-inter-dywiz-parking.webp"
                alt="Pojazdy dostępne do obsługi transferów w Krakowie"
                width={1448}
                height={1086}
                sizes="(min-width: 1280px) 624px, (min-width: 768px) 50vw, calc(100vw - 40px)"
                className="aspect-[16/10] h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-sm border border-navy/10 bg-navy shadow-soft">
              <Image
                src="/images/pacifica-modern-building.webp"
                alt="Pacifica do transportu grupowego i transferów"
                width={1536}
                height={1024}
                sizes="(min-width: 1280px) 624px, (min-width: 768px) 50vw, calc(100vw - 40px)"
                className="aspect-[16/10] h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-gold">
              Realizacje i dostępne pojazdy
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Realna dostępność. Różne klasy pojazdów.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/[0.76]">
              Organizujemy zarówno pojedyncze przejazdy, jak i większe harmonogramy transportowe.
              Korzystamy z dostępu do sieci pojazdów różnych klas — od samochodów osobowych po
              vany i transport grupowy.
            </p>
          </div>
          <div className="mt-10">
            <figure className="overflow-hidden rounded-sm border border-navy/10 bg-white shadow-soft">
              <Image
                src="/images/ford-mondeo-wawel-autumn.webp"
                alt="Samochody dostępne do obsługi transferów w Krakowie"
                width={1448}
                height={1086}
                sizes="(min-width: 1280px) 1280px, calc(100vw - 40px)"
                className="aspect-[16/10] h-auto w-full object-cover"
              />
              <figcaption className="px-5 py-4 text-sm font-bold text-navy">
                Pojazdy dostępne w naszej sieci
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-champagne px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-gold">Korzyści</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-navy sm:text-4xl">
              Od odbioru jednej osoby z lotniska po koordynację wielu pojazdów i grup
            </h2>
            <p className="mt-5 text-base leading-8 text-graphite/[0.78]">
              Wspieramy hotele, biura podróży i firmy w szybkiej organizacji transportu, także
              wtedy, gdy kilka grup przyjeżdża w podobnym czasie albo plan zmienia się w ostatniej
              chwili.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-4 rounded-sm border border-navy/10 bg-white p-5 shadow-[0_12px_36px_rgba(7,25,54,0.08)]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-navy text-gold">
                  <CheckIcon />
                </span>
                <span className="font-bold text-navy">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="o-nas" className="bg-navy px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="border-l-4 border-gold pl-6">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-gold">Współpraca B2B</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Stała obsługa transportowa dla hoteli, firm i biur podróży
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-white/[0.76]">
            <div className="overflow-hidden rounded-sm border border-white/[0.12] bg-white/[0.08] shadow-soft">
              <Image
                src="/images/group-hotel-inter-dywiz.webp"
                alt="Obsługa grupy hotelowej przez Inter-Dywiz"
                width={1448}
                height={1086}
                sizes="(min-width: 1280px) 672px, (min-width: 1024px) 53vw, calc(100vw - 40px)"
                className="aspect-[16/9] h-full w-full object-cover object-[center_62%]"
              />
            </div>
            <p>
              Ustalamy sposób zgłaszania przejazdów, osobę kontaktową i zasady rozliczeń.
              Koordynujemy pojedyncze zlecenia oraz większe harmonogramy transferów.
            </p>
            <p>
              Dostęp do sieci ponad 100 pojazdów pozwala obsługiwać wiele transferów i planować
              zlecenia cykliczne z jednym kontaktem operacyjnym.
            </p>
            <a
              href="/?service=b2b#kontakt"
              className="inline-flex h-[52px] items-center justify-center gap-2 rounded-sm bg-gold px-6 text-base font-extrabold text-navy shadow-gold transition hover:bg-champagne"
            >
              Zapytaj o stałą współpracę <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section id="kontakt" className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-gold">Kontakt</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-navy sm:text-4xl">
              Otrzymaj wycenę przejazdu lub zapytaj o stałą współpracę
            </h2>
            <p className="mt-5 text-base leading-8 text-graphite/[0.78]">
              Dla konkretnego przejazdu podaj trasę, termin i liczbę pasażerów. Jeśli pytasz o
              stałą współpracę, wystarczą dane kontaktowe i krótki opis potrzeb.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-black text-navy">Co dzieje się po wysłaniu zapytania?</h3>
              <ol className="mt-4 space-y-3">
                {[
                  "Sprawdzamy dostępność",
                  "Dobieramy odpowiedni pojazd i sposób realizacji",
                  "Wracamy z wyceną i szczegółami przejazdu"
                ].map((step, index) => (
                  <li key={step} className="flex items-start gap-3 text-sm leading-6 text-graphite/[0.78]">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-navy text-xs font-black text-gold">
                      {index + 1}
                    </span>
                    <span className="pt-0.5 font-semibold">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="mt-8 space-y-4">
              <a
                href={phoneHref}
                className="flex items-center justify-between rounded-sm border border-navy/10 p-5 font-bold text-navy transition hover:border-gold hover:text-gold"
              >
                <span>Telefon</span>
                <span>{phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-center justify-between rounded-sm border border-navy/10 p-5 font-bold text-navy transition hover:border-gold hover:text-gold"
              >
                <span>E-mail</span>
                <span>{email}</span>
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-white/10 bg-navy px-5 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">
              INTER-DYWIZ Sp. z o.o.
            </p>
            <address className="mt-4 text-sm not-italic leading-7 text-white/70">
              ul. Bulwarowa 13A/2
              <br />
              31-751 Kraków
            </address>
          </div>

          <div className="text-sm leading-7 text-white/70">
            <p>NIP: 6751496482</p>
            <p>REGON: 123040168</p>
            <p>KRS: 0000496661</p>
          </div>

          <nav aria-label="Usługi" className="text-sm leading-7">
            <p className="font-black uppercase tracking-[0.16em] text-gold">Usługi</p>
            <div className="mt-3 flex flex-col items-start gap-1 text-white/70">
              <a className="transition hover:text-gold" href="/transfer-lotnisko-krakow">
                Transfer lotniskowy Kraków
              </a>
              <a className="transition hover:text-gold" href="/transport-biznesowy-krakow">
                Transport biznesowy Kraków
              </a>
              <a className="transition hover:text-gold" href="/van-z-kierowca-krakow">
                Van z kierowcą Kraków
              </a>
              <a className="transition hover:text-gold" href="/transport-dla-firm">
                Transport dla firm
              </a>
            </div>
          </nav>

          <div className="space-y-3 text-sm">
            <p>
              <span className="block text-white/60">Telefon</span>
              <a className="font-bold text-white transition hover:text-gold" href={phoneHref}>
                {phoneDisplay}
              </a>
            </p>
            <p>
              <span className="block text-white/60">E-mail</span>
              <a
                className="font-bold text-white transition hover:text-gold"
                href={`mailto:${email}`}
              >
                {email}
              </a>
            </p>
            <a
              className="inline-block font-bold text-gold underline decoration-gold/40 underline-offset-4 transition hover:text-champagne"
              href="/polityka-prywatnosci"
            >
              Polityka prywatności
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

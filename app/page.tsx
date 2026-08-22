import ContactForm from "../components/contact-form";

const phoneDisplay = "+48 574 505 323";
const phoneHref = "tel:+48574505323";
const whatsappHref = "https://wa.me/48574505323";
const email = "biuro@inter-dywiz.pl";

const services = [
  {
    title: "Transfery lotniskowe",
    description:
      "Punktualne odbiory z lotniska Kraków-Balice, koordynacja przylotów i komfortowy przejazd do hotelu, biura lub kolejnego miasta."
  },
  {
    title: "Transport biznesowy",
    description:
      "Dyskretna obsługa spotkań, konferencji, delegacji i gości VIP z przejrzystą komunikacją oraz wysokim standardem pojazdów."
  },
  {
    title: "Vany 7+1 i 8+1",
    description:
      "Wygodne przewozy mniejszych grup, rodzin i zespołów z miejscem na bagaż oraz elastyczną organizacją kilku tras jednocześnie."
  },
  {
    title: "Kierowca do dyspozycji",
    description:
      "Stała obsługa kierowcy na czas wydarzenia, dnia biznesowego lub pobytu grupy w Krakowie i Małopolsce."
  },
  {
    title: "Dla hoteli i biur podróży",
    description:
      "Szybka rezerwacja, wsparcie operacyjne, jedna faktura oraz przewidywalny partner dla stałych zleceń i sezonowych wzrostów ruchu."
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
  ["24/7", "dyspozycyjność operacyjna"],
  ["7+1 / 8+1", "vany dla grup"]
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
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/[0.88] backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#hero" className="group flex items-center gap-3" aria-label="Inter-Dywiz">
            <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-gold/60 bg-white text-sm font-black text-navy shadow-gold">
              ID
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold uppercase tracking-[0.18em] text-white">
                Inter-Dywiz
              </span>
              <span className="block text-xs text-white/[0.64]">Transport premium Kraków</span>
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-white/[0.78] md:flex">
            <a className="transition hover:text-gold" href="#uslugi">
              Usługi
            </a>
            <a className="transition hover:text-gold" href="#o-nas">
              O nas
            </a>
            <a className="transition hover:text-gold" href="#kontakt">
              Kontakt
            </a>
          </div>
          <a
            href={phoneHref}
            className="inline-flex h-11 items-center justify-center rounded-sm bg-gold px-4 text-sm font-bold text-navy shadow-gold transition hover:bg-champagne"
          >
            Zadzwoń
          </a>
        </nav>
      </header>

      <section id="hero" className="relative min-h-screen bg-navy pt-24 text-white">
        <div className="absolute inset-0 premium-grid opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(200,164,93,0.18),transparent_32%),linear-gradient(120deg,rgba(7,25,54,0.96),rgba(7,25,54,0.76)_48%,rgba(18,24,32,0.92))]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-20 lg:pt-20">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-sm border border-gold/[0.35] bg-white/[0.08] px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-gold">
              Inter-Dywiz Sp. z o.o.
            </p>
            <h1 className="text-balance text-4xl font-black leading-[1.06] text-white sm:text-5xl lg:text-6xl">
              Transfery lotniskowe i transport grupowy w Krakowie
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/[0.78] sm:text-xl">
              Ponad 100 dostępnych pojazdów • Vany 7+1 i 8+1 • Obsługa biznesowa •
              Dostępność 24/7
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={phoneHref}
                className="inline-flex h-[52px] items-center justify-center gap-2 rounded-sm bg-gold px-6 text-base font-extrabold text-navy shadow-gold transition hover:bg-champagne"
              >
                Zadzwoń <ArrowIcon />
              </a>
              <a
                href={whatsappHref}
                className="inline-flex h-[52px] items-center justify-center rounded-sm border border-white/[0.18] bg-white/10 px-6 text-base font-bold text-white transition hover:border-gold hover:text-gold"
              >
                WhatsApp
              </a>
              <a
                href="#uslugi"
                className="inline-flex h-[52px] items-center justify-center rounded-sm border border-white/[0.18] px-6 text-base font-bold text-white transition hover:border-gold hover:text-gold"
              >
                Usługi
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-sm border border-white/[0.12] bg-white/[0.08] shadow-soft">
              <img
                src="/premium-van.svg"
                alt="Elegancki van premium na tle nocnego Krakowa"
                className="aspect-[1.42] h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 border-x border-b border-white/[0.12] bg-white text-navy shadow-soft">
              {stats.map(([value, label]) => (
                <div key={value} className="border-r border-navy/10 p-4 last:border-r-0 sm:p-5">
                  <p className="text-xl font-black text-navy sm:text-2xl">{value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-graphite/[0.68]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="uslugi" className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-gold">Usługi</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-navy sm:text-4xl">
              Transport premium dla partnerów, firm i grup turystycznych
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-champagne px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-gold">Korzyści</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-navy sm:text-4xl">
              Operacyjna pewność przy jednym przejeździe i całym harmonogramie transferów
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
            <p className="text-sm font-black uppercase tracking-[0.22em] text-gold">O nas</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Skala floty i specjalizacja w transporcie grupowym
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-white/[0.76]">
            <p>
              Inter-Dywiz Sp. z o.o. działa jako partner transportowy dla klientów, którzy oczekują
              punktualności, elastycznej organizacji i reprezentacyjnego standardu obsługi w
              Krakowie.
            </p>
            <p>
              Dostęp do ponad 100 pojazdów pozwala planować wiele transferów jednocześnie, a
              doświadczenie w przewozie grup ułatwia obsługę hoteli, biur podróży, wydarzeń
              biznesowych oraz wyjazdów z vanami 7+1 i 8+1.
            </p>
          </div>
        </div>
      </section>

      <section id="kontakt" className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-gold">Kontakt</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-navy sm:text-4xl">
              Zapytaj o transfer, flotę lub stałą współpracę
            </h2>
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
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-3">
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

          <div className="space-y-3 text-sm sm:col-span-2 lg:col-span-1">
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

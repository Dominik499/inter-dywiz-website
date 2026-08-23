import Image from "next/image";

type ServiceLink = {
  href: string;
  label: string;
};

type ServiceLandingPageProps = {
  currentPath: string;
  eyebrow: string;
  title: string;
  intro: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    objectPosition?: string;
  };
  descriptionTitle: string;
  description: string[];
  applications: string[];
  benefits: string[];
  ctaLabel: string;
  faq: Array<{
    question: string;
    answer: string;
  }>;
};

const serviceLinks: ServiceLink[] = [
  { href: "/transfer-lotnisko-krakow", label: "Transfer lotniskowy Kraków" },
  { href: "/transport-biznesowy-krakow", label: "Transport biznesowy Kraków" },
  { href: "/van-z-kierowca-krakow", label: "Van z kierowcą Kraków" },
  { href: "/transport-dla-firm", label: "Transport dla firm" }
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

export default function ServiceLandingPage({
  currentPath,
  eyebrow,
  title,
  intro,
  image,
  descriptionTitle,
  description,
  applications,
  benefits,
  ctaLabel,
  faq
}: ServiceLandingPageProps) {
  const otherServices = serviceLinks.filter((service) => service.href !== currentPath);

  return (
    <main className="overflow-hidden bg-white text-graphite">
      <header className="border-b border-white/10 bg-navy text-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3" aria-label="Inter-Dywiz — strona główna">
            <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-gold/60 bg-white text-sm font-black text-navy shadow-gold">
              ID
            </span>
            <span className="text-sm font-bold uppercase tracking-[0.18em]">Inter-Dywiz</span>
          </a>
          <a
            href="/#kontakt"
            className="inline-flex h-11 items-center justify-center rounded-sm bg-gold px-4 text-sm font-bold text-navy shadow-gold transition hover:bg-champagne"
          >
            Zapytaj o wycenę
          </a>
        </nav>
      </header>

      <section className="relative bg-navy px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute inset-0 premium-grid opacity-30" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.92fr]">
          <div>
            <a className="text-sm font-bold text-gold underline underline-offset-4" href="/">
              ← Strona główna
            </a>
            <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-gold">
              {eyebrow}
            </p>
            <h1 className="mt-3 text-balance text-4xl font-black leading-tight sm:text-5xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/[0.78]">{intro}</p>
            <a
              href="/#kontakt"
              className="mt-8 inline-flex h-[52px] items-center justify-center gap-2 rounded-sm bg-gold px-6 text-base font-extrabold text-navy shadow-gold transition hover:bg-champagne"
            >
              {ctaLabel} <ArrowIcon />
            </a>
          </div>
          <div className="overflow-hidden rounded-sm border border-white/[0.12] bg-white/[0.08] shadow-soft">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1280px) 560px, (min-width: 1024px) 46vw, calc(100vw - 40px)"
              className={`aspect-[16/10] h-full w-full object-cover ${image.objectPosition ?? ""}`}
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-gold">Zakres usługi</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-navy">{descriptionTitle}</h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-graphite/[0.78]">
            {description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-champagne px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-gold">Zastosowania</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-navy">
            Kiedy warto skorzystać z tej usługi
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((application) => (
              <div key={application} className="rounded-sm border border-navy/10 bg-white p-5 font-bold leading-7 text-navy shadow-soft">
                {application}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-gold">Korzyści</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-navy">
              Transport dopasowany do planu przejazdu
            </h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li key={benefit} className="rounded-sm border border-navy/10 p-5 font-bold leading-7 text-navy shadow-soft">
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-gold">FAQ</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight">Najczęstsze pytania</h2>
          <div className="mt-8 space-y-4">
            {faq.map((item) => (
              <article key={item.question} className="rounded-sm border border-white/[0.12] bg-white/[0.08] p-6">
                <h3 className="text-lg font-black text-white">{item.question}</h3>
                <p className="mt-3 leading-7 text-white/[0.72]">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-champagne px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-gold">Inter-Dywiz</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-navy">
                Inne usługi Inter-Dywiz
              </h2>
            </div>
            <a className="font-bold text-navy underline underline-offset-4 hover:text-gold" href="/">
              Wróć na stronę główną
            </a>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {otherServices.map((service) => (
              <a
                key={service.href}
                href={service.href}
                className="rounded-sm border border-navy/10 bg-white p-5 font-bold text-navy shadow-soft transition hover:border-gold hover:text-gold"
              >
                {service.label}
              </a>
            ))}
          </div>
          <div className="mt-10 rounded-sm bg-navy p-6 text-white shadow-soft sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
            <div>
              <h2 className="text-2xl font-black">Potrzebujesz wyceny lub stałej obsługi?</h2>
              <p className="mt-2 leading-7 text-white/[0.72]">
                Podaj trasę, termin i liczbę pasażerów w formularzu kontaktowym.
              </p>
            </div>
            <a
              href="/#kontakt"
              className="mt-6 inline-flex h-[52px] shrink-0 items-center justify-center gap-2 rounded-sm bg-gold px-6 font-extrabold text-navy transition hover:bg-champagne sm:mt-0"
            >
              {ctaLabel} <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-navy px-5 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-black uppercase tracking-[0.18em] text-gold">INTER-DYWIZ Sp. z o.o.</p>
            <p className="mt-3 text-sm leading-7 text-white/[0.65]">ul. Bulwarowa 13A/2<br />31-751 Kraków</p>
          </div>
          <div>
            <p className="text-sm font-bold text-white">Usługi</p>
            <div className="mt-3 space-y-2 text-sm text-white/[0.65]">
              {serviceLinks.map((service) => (
                <a key={service.href} className="block transition hover:text-gold" href={service.href}>
                  {service.label}
                </a>
              ))}
            </div>
          </div>
          <div className="text-sm leading-7 text-white/[0.65]">
            <a className="block transition hover:text-gold" href="tel:+48574505323">+48 574 505 323</a>
            <a className="block transition hover:text-gold" href="mailto:biuro@inter-dywiz.pl">biuro@inter-dywiz.pl</a>
            <a className="mt-2 block font-bold text-gold underline underline-offset-4" href="/polityka-prywatnosci">
              Polityka prywatności
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

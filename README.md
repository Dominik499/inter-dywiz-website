# Inter-Dywiz Sp. z o.o. - strona transportowa

Nowoczesna strona Next.js, Tailwind CSS i TypeScript dla firmy oferującej transfery lotniskowe, transport biznesowy oraz przewozy grupowe vanami 7+1 i 8+1 w Krakowie.

## Uruchomienie

```bash
npm install
npm run dev
```

Strona będzie dostępna pod adresem `http://localhost:3000`.

## Wdrożenie na Vercel

Projekt jest gotowy do importu w Vercel jako aplikacja Next.js. Domyślne polecenia:

```bash
npm run build
npm run start
```

## Dane kontaktowe

Dane kontaktowe są ustawione na górze pliku `app/page.tsx`:

```ts
const phoneDisplay = "+48 574 505 323";
const phoneHref = "tel:+48574505323";
const whatsappHref = "https://wa.me/48574505323";
const email = "kontakt@inter-dywiz.pl";
```

Po podaniu właściwego numeru telefonu i adresu e-mail wystarczy zmienić te wartości.

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.inter-dywiz.pl"),
  title: "Inter-Dywiz Sp. z o.o. | Transfery lotniskowe i transport grupowy w Krakowie",
  description:
    "Premium transport w Krakowie: transfery lotniskowe, obsługa biznesowa, vany 7+1 i 8+1, kierowca do dyspozycji oraz współpraca dla hoteli i biur podróży.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Inter-Dywiz Sp. z o.o. | Transport premium Kraków",
    description:
      "Ponad 100 dostępnych pojazdów, transfery 24/7 i sprawna obsługa grup w Krakowie.",
    url: "/",
    siteName: "Inter-Dywiz Sp. z o.o.",
    type: "website",
    locale: "pl_PL"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className="bg-white text-ink antialiased">{children}</body>
    </html>
  );
}

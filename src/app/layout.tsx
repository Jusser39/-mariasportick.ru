import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const siteUrl = "https://mariasportick.ru";
const city = "Калининград";
const country = "Россия";

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"]
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Мария Кочнева | Персональный фитнес-тренер в Калининграде, Россия",
    template: "%s | Мария Кочнева"
  },
  description:
    "Мария Кочнева — персональный фитнес-тренер в Калининграде, Россия. Силовые тренировки, stretching, мобильность и питание. Индивидуальная программа и сопровождение.",
  alternates: {
    canonical: "/"
  },
  verification: {
    yandex: "06f8fc67396d2ab2"
  },
  keywords: [
    "персональный тренер",
    "персональный фитнес тренер онлайн",
    "персональный фитнес тренер калининград",
    "фитнес тренер россия",
    "онлайн тренировки для женщин",
    "тренер по растяжке онлайн",
    "stretching",
    "гибкость",
    "питание и тренировки",
    "персональные тренировки"
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: "Мария Кочнева | Персональный фитнес-тренер в Калининграде, Россия",
    description:
      "Сильное тело, гибкость и баланс. Персональные онлайн-тренировки в Калининграде и по всей России, stretching и сопровождение по питанию.",
    type: "website",
    url: siteUrl,
    siteName: "mariasportick.ru",
    locale: "ru_RU",
    images: [
      {
        url: "/photos/maria-new-1.webp",
        width: 1200,
        height: 1600,
        alt: "Персональный тренер Мария Кочнева, Калининград, Россия"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Мария Кочнева | Персональный фитнес-тренер в Калининграде, Россия",
    description:
      "Индивидуальные тренировки, растяжка, мобильность и поддержка по питанию для стабильного результата в Калининграде и по всей России.",
    images: ["/photos/maria-new-1.webp"]
  }
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Мария Кочнева",
  jobTitle: "Персональный фитнес-тренер",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: city,
    addressCountry: "RU"
  },
  knowsAbout: [
    "Персональные тренировки",
    "Stretching",
    "Мобильность",
    "Фитнес-питание"
  ],
  areaServed: [city, country]
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Мария Кочнева — фитнес-тренер",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: city,
    addressCountry: "RU"
  },
  areaServed: [city, country],
  sameAs: ["https://t.me/MariaSportick"]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${heading.variable} ${body.variable} antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

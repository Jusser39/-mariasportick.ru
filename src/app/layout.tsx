import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const siteUrl = "https://mariasportick.ru";

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
    default: "Мария Кочнева | Персональный фитнес-тренер онлайн",
    template: "%s | Мария Кочнева"
  },
  description:
    "Персональный фитнес-тренер онлайн: силовые тренировки, stretching, мобильность и питание. Индивидуальная программа и сопровождение.",
  alternates: {
    canonical: "/"
  },
  verification: {
    yandex: "06f8fc67396d2ab2"
  },
  keywords: [
    "персональный тренер",
    "персональный фитнес тренер онлайн",
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
    title: "Мария Кочнева | Персональный фитнес-тренер онлайн",
    description:
      "Сильное тело, гибкость и баланс. Персональные онлайн-тренировки, stretching и сопровождение по питанию.",
    type: "website",
    url: siteUrl,
    siteName: "mariasportick.ru",
    locale: "ru_RU",
    images: [
      {
        url: "/photos/maria-new-1.jpg",
        width: 1200,
        height: 1600,
        alt: "Персональный тренер Мария Кочнева"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Мария Кочнева | Персональный фитнес-тренер онлайн",
    description:
      "Индивидуальные тренировки, растяжка, мобильность и поддержка по питанию для стабильного результата.",
    images: ["/photos/maria-new-1.jpg"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${heading.variable} ${body.variable} antialiased`}>{children}</body>
    </html>
  );
}

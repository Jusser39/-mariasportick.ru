import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

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
  title: "Мария Кочнева | Fitness & Stretching Instructor",
  description:
    "Персональный fitness и stretching инструктор: индивидуальные тренировки, гибкость, осанка, сила и гармония тела.",
  keywords: [
    "персональный тренер",
    "фитнес тренер онлайн",
    "stretching",
    "гибкость",
    "онлайн тренировки",
    "персональные тренировки"
  ],
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Мария Кочнева | Fitness & Stretching Instructor",
    description:
      "Сильное тело, гибкость и баланс. Персональные тренировки и stretching с мягким профессиональным подходом.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${heading.variable} ${body.variable} antialiased`}>{children}</body>
    </html>
  );
}

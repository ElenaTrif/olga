import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Olga Beauty Expert",
  description: "Olga Beauty Expert - Soins de peau, massages et plus",
  // Ajoute d'autres métadonnées si nécessaire
  openGraph: {
    title: "Olga Beauty Expert",
    description: "Olga Beauty Expert - Soins de peau, massages et plus",
    url: "https://www.olgabeautyexpert.com",
    siteName: "Olga Beauty Expert",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olga Beauty Expert",
    description: "Olga Beauty Expert - Soins de peau, massages et plus",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

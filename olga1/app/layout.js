import { Bentham, Geist, Geist_Mono } from "next/font/google"; // Changer Benton en Bentham
import "./globals.css";

// Import des polices avec Next.js Font Optimization
const bentham = Bentham({ // Utilisation de la police Bentham
  variable: "--font-bentham",
  subsets: ["latin"], // Utilisation du sous-ensemble latin
  weight: "400", // Poids de la police
});

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
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} ${bentham.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

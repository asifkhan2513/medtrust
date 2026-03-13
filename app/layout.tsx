import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Jura } from 'next/font/google';
import "./globals.css";
import Navbar from "./Navbar";



const jura = Jura({
  subsets: ['latin'],
  variable: '--font-jura',
  weight: [ '600', '700'],
  display:"swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MedTrust - Trusted Medicine",
  description: "Trusted medicine for better health. Quality pharmaceutical products and reliable healthcare solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jura.className} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}

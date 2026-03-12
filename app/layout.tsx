import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const clashDisplay = localFont({
  src: "../public/fonts/ClashDisplay-Variable.ttf", // Update path accordingly
  variable: "--font-clash", // CSS variable name
});


export const metadata: Metadata = {
  title: "SCF 6.0",
  description: "The Student Career Fair (SCF) organized by COHI is a platform built to prepare students for a future beyond the classroom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased bg-[#0B0A1F] text-white ${clashDisplay.variable}`}
      >
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

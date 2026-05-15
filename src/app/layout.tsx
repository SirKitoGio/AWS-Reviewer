import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "AWS Certified Cloud Practitioner Reviewer | CLF-C02",
  description: "A premium, editorial-grade study guide and practice exam for the AWS Certified Cloud Practitioner certification.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
    <body className="min-h-[100dvh] flex flex-col bg-zinc-50 text-zinc-950 font-sans">
        <div className="noise-bg" />
        {children}
    </body>
    </html>
  );
}

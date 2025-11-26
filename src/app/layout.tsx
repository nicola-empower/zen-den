import type { Metadata } from "next";
import { Tenor_Sans, Lato } from "next/font/google";
import "./globals.css";

const tenorSans = Tenor_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-tenor",
});

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "The Zen Den | Yoga Studio",
  description: "Movement for the modern mind. A sanctuary in the city.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${tenorSans.variable} ${lato.variable} antialiased bg-alabaster text-charcoal`}
      >
        {children}
      </body>
    </html>
  );
}

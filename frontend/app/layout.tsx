import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.openspades.in"),
  title: "OpenSpades: Free Multiplayer Spades with Voice Chat",
  description:
    "Play Spades online free with friends. Create a room, share the code, and talk over live voice chat. No signup, no app install.",
  alternates: {
    canonical: "https://www.openspades.in",
  },
  openGraph: {
    title: "OpenSpades: Free Multiplayer Spades with Voice Chat",
    description:
      "Play Spades online free with friends. Create a room, share the code, and talk over live voice chat. No signup, no app install.",
    url: "https://www.openspades.in",
    siteName: "OpenSpades",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenSpades: Free Multiplayer Spades with Voice Chat",
    description: "Play Spades online free with friends, with live voice chat.",
  },
  verification: {
    google: "nsL16cEau3DfvLgZkPH09-jlKbAJAxqc52UsISPansQ",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full bg-gray-950 text-white">{children}</body>
    </html>
  );
}

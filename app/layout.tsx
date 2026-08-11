import type { Metadata } from "next";
import { Geist, Orbitron } from "next/font/google";
import { event, nav } from "@/lib/content";
import { AnimeNavBar } from "./AnimeNavBar";
import { Footer } from "./Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const display = Orbitron({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: `${event.name} ${event.year} — ${event.date}`,
  description: `${event.name} ${event.year}: ${event.tagline} builder. ${event.date}, ${event.venue}.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      /* Tells the router our smooth scrolling is deliberate, so it suppresses
         it during route transitions instead of warning. */
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${display.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <AnimeNavBar
          items={nav.map((item) => ({ name: item.label, url: item.href }))}
        />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

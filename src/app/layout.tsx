import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Loam | Marketing, Websites, and Growth Systems",
  description:
    "Loam is a strategy-led studio for brands that need sharper positioning, better websites, and growth systems that actually compound.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${manrope.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-earth-50 text-earth-900 font-body">
        <div className="site-wash site-wash-top" aria-hidden="true" />
        <div className="site-wash site-wash-mid" aria-hidden="true" />
        <div className="site-wash site-wash-bottom" aria-hidden="true" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { WebGLBackground } from "@/components/ui/webgl-background";
import { ParticleField } from "@/components/ui/particle-field";

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
  title: {
    default: "Loam | Marketing, Websites, and Growth Systems",
    template: "%s | Loam Studio",
  },
  description:
    "Loam is a strategy-led studio for brands that need sharper positioning, better websites, and growth systems that actually compound.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Loam Studio",
    title: "Loam | Marketing, Websites, and Growth Systems",
    description:
      "Strategy-led studio combining positioning, web creation, and organic growth into one coherent engagement.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loam | Marketing, Websites, and Growth Systems",
    description:
      "Strategy-led studio combining positioning, web creation, and organic growth into one coherent engagement.",
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
        <WebGLBackground />
        <ParticleField />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}

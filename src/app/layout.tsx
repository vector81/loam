import type { Metadata } from "next";
import { Instrument_Serif, Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

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

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Loam — Make it take root",
    template: "%s | Loam Studio",
  },
  description:
    "Positioning, digital flagships, and growth systems for ambitious brands ready to become impossible to overlook.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Loam Studio",
    title: "Loam — Make it take root",
    description:
      "Positioning, digital flagships, and growth systems for ambitious brands ready to become impossible to overlook.",
    images: ["/loam-landscape-pink-v2.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loam — Make it take root",
    description:
      "Positioning, digital flagships, and growth systems for ambitious brands ready to become impossible to overlook.",
    images: ["/loam-landscape-pink-v2.png"],
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
      className={`${playfair.variable} ${manrope.variable} ${instrumentSerif.variable} scroll-smooth antialiased`}
    >
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-earth-50 font-body text-earth-900">
        <Navbar />
        <main className="relative flex-1">{children}</main>
        <div className="relative z-10">
          <Footer />
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}

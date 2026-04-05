import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

const services = [
  { label: "Positioning and Messaging", href: "/services" },
  { label: "Website Design and Build", href: "/services" },
  { label: "Content and Organic Growth", href: "/services" },
  { label: "Launch Campaign Systems", href: "/services" },
  { label: "Retention and Reporting", href: "/services" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Selected Work", href: "/work" },
  { label: "Capabilities", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const connect = [
  { label: "hello@loam.studio", href: "mailto:hello@loam.studio" },
  { label: "Twitter / X", href: "https://x.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-earth-950 pt-28 pb-8 text-earth-300">
      <div className="topo-lines absolute inset-0 opacity-10" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-forest/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-16 left-[8%] h-56 w-56 rounded-full bg-terracotta/12 blur-3xl" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 grid gap-12 rounded-[2.25rem] border border-white/8 bg-white/4 p-8 md:grid-cols-[1.3fr_1fr] md:p-12">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-earth-300/60">
              <Sparkles className="h-3.5 w-3.5 text-terracotta-light" />
              Strategy, websites, and marketing systems
            </div>
            <h2 className="max-w-xl font-heading text-5xl leading-[0.94] tracking-[-0.035em] text-cream md:text-6xl">
              Loam builds brands that feel considered before they feel loud.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-earth-300/62">
              We pair positioning, visual systems, websites, and editorial growth architecture so your brand lands with more clarity and more force.
            </p>
          </div>
          <div className="flex flex-col justify-between gap-8 md:items-end">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 md:max-w-xs">
              <p className="text-[11px] uppercase tracking-[0.22em] text-earth-300/45">
                Typical engagements
              </p>
              <p className="mt-3 font-heading text-2xl text-cream">
                Brand refreshes, websites, and growth launches.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-earth-950 transition-colors hover:bg-earth-100"
            >
              Start with a discovery call <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="mb-5 flex items-center gap-3 cursor-pointer">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-forest">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L12 22l8.7-5C21.5 15.5 22 13.8 22 12c0-5.5-4.5-10-10-10z"
                    fill="none"
                    stroke="#FAF7F2"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 6c-2 3-3 5-3 7.5S10 18 12 18s3-2 3-4.5S14 9 12 6z"
                    fill="#FAF7F2"
                  />
                  <path
                    d="M12 8v10"
                    stroke="#3D6B4F"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <span className="block text-xl font-heading font-semibold tracking-tight text-cream">
                  Loam
                </span>
                <span className="text-[10px] uppercase tracking-[0.24em] text-earth-300/40">
                  Studio
                </span>
              </div>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-earth-300/64">
              Loam is a premium studio for positioning, website creation, and growth systems designed to compound long after launch.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cream">
              Capabilities
            </h4>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-earth-300/70 transition-colors duration-200 hover:text-cream cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cream">
              Company
            </h4>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-earth-300/70 transition-colors duration-200 hover:text-cream cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cream">
              Connect
            </h4>
            <ul className="space-y-2.5">
              {connect.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-earth-300/70 transition-colors duration-200 hover:text-cream cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row">
          <p className="text-xs text-earth-300/50">
            &copy; 2026 Loam. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/about"
              className="text-xs text-earth-300/50 transition-colors duration-200 hover:text-cream cursor-pointer"
            >
              Studio story
            </Link>
            <Link
              href="/contact"
              className="text-xs text-earth-300/50 transition-colors duration-200 hover:text-cream cursor-pointer"
            >
              Start a project
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

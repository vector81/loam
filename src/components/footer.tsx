import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Services", href: "/services" },
  { label: "Selected work", href: "/work" },
  { label: "Studio story", href: "/about" },
  { label: "Start a project", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-earth-950 text-white">
      <div className="absolute inset-y-0 right-0 w-full opacity-42 md:w-[58%]">
        <Image
          src="/loam-portal.png"
          alt=""
          fill
          sizes="(min-width: 768px) 58vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-earth-950 via-earth-950/72 to-earth-950/8" />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-950 via-transparent to-earth-950/22" />
      </div>

      <div className="relative mx-auto max-w-[92rem] px-5 pb-7 pt-24 sm:px-8 lg:px-10 lg:pt-36">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.34fr] lg:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-white/42">
              Ready when it is real
            </p>
            <h2 className="mt-7 max-w-[10ch] font-body text-[clamp(4.2rem,9vw,10rem)] font-extrabold uppercase leading-[0.7] tracking-[-0.075em]">
              Grow into
              <span className="mt-3 block font-editorial font-normal normal-case italic text-petal">
                what&apos;s next.
              </span>
            </h2>
            <Link
              href="/contact"
              className="editorial-link mt-10 inline-flex items-center gap-3 border-b border-white/60 pb-2 text-xs font-bold uppercase tracking-[0.24em]"
            >
              Begin the conversation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <nav aria-label="Footer navigation" className="lg:pb-3">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between border-t border-white/16 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white/72 last:border-b"
              >
                <span className="transition-colors duration-200 group-hover:text-petal">
                  {link.label}
                </span>
                <span className="font-editorial text-base font-normal italic text-white/34">
                  0{index + 1}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-24 flex flex-col gap-3 border-t border-white/12 pt-6 text-[9px] font-semibold uppercase tracking-[0.24em] text-white/34 sm:flex-row sm:items-center sm:justify-between">
          <p>Loam Studio · Sydney / Everywhere</p>
          <p>© 2026 · Built to compound</p>
        </div>
      </div>
    </footer>
  );
}

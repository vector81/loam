"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hasPassedPrototype, setHasPassedPrototype] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const hiddenOnPrototype = pathname === "/" && !hasPassedPrototype;

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (pathname === "/") {
      setHasPassedPrototype(latest >= window.innerHeight - 1);
    }
  });

  useEffect(() => {
    if (pathname !== "/") return;

    const frame = window.requestAnimationFrame(() => {
      setHasPassedPrototype(window.scrollY >= window.innerHeight - 1);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      aria-hidden={hiddenOnPrototype}
      className={`fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-[opacity,transform] duration-300 sm:px-5 sm:pt-5 ${
        hiddenOnPrototype
          ? "pointer-events-none -translate-y-full opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      <nav className="mx-auto flex max-w-[92rem] items-center justify-between border border-earth-950/12 bg-earth-50/88 px-4 py-3 shadow-[0_16px_50px_rgba(42,30,25,0.08)] backdrop-blur-xl sm:px-5">
        <Link
          href="/"
          className="group flex items-baseline gap-3 text-earth-950"
        >
          <span className="font-body text-xl font-extrabold tracking-[-0.06em]">
            LOAM
          </span>
          <span className="hidden font-editorial text-base italic text-earth-900/48 sm:inline">
            make it take root
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-text-link text-[10px] font-bold uppercase tracking-[0.25em] ${
                pathname === link.href ? "text-petal" : "text-earth-900/62"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="editorial-button hidden items-center gap-2 bg-earth-950 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:inline-flex"
          >
            Begin a project
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((current) => !current)}
            className="editorial-button flex h-10 w-10 items-center justify-center border border-earth-950/16 bg-earth-50 lg:hidden"
          >
            <span className="relative h-3.5 w-4">
              <span
                className={`absolute left-0 top-1 h-px w-4 bg-earth-950 transition-transform duration-200 ${
                  mobileOpen ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute bottom-1 left-0 h-px w-4 bg-earth-950 transition-transform duration-200 ${
                  mobileOpen ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, transform: "translateY(-8px)" }}
            animate={{ opacity: 1, transform: "translateY(0)" }}
            exit={{ opacity: 0, transform: "translateY(-8px)" }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="mx-auto mt-2 max-w-[92rem] border border-earth-950/12 bg-earth-50 p-5 shadow-[0_20px_60px_rgba(42,30,25,0.12)] lg:hidden"
          >
            <div className="grid gap-2">
              {[...links, { label: "Contact", href: "/contact" }].map(
                (link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between border-b border-earth-950/12 py-4 font-body text-3xl font-extrabold uppercase tracking-[-0.055em] text-earth-950 last:border-b-0"
                  >
                    {link.label}
                    <span className="font-editorial text-sm font-normal italic text-petal">
                      0{index + 1}
                    </span>
                  </Link>
                ),
              )}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

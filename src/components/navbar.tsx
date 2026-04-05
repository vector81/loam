"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

const navLinks = [
  { label: "Capabilities", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const navPadding = useTransform(scrollY, [0, 120], [20, 10]);
  const navScale = useTransform(scrollY, [0, 120], [1, 0.982]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.header
      style={{ paddingTop: navPadding, paddingBottom: navPadding }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6"
    >
      <motion.nav
        style={{ scale: navScale }}
        className="glass-nav mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3.5 sm:px-5"
      >
        <div className="flex items-center gap-3">
          <Link href="/" className="group flex items-center gap-3 cursor-pointer">
            <div className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-earth-950 shadow-[0_12px_30px_rgba(26,51,37,0.22)]">
              <div className="absolute inset-[5px] rounded-full border border-white/12" />
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10"
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
              <span className="block text-lg font-heading font-semibold tracking-tight text-earth-950">
                Loam
              </span>
              <span className="hidden text-[10px] uppercase tracking-[0.28em] text-earth-900/42 sm:block">
                Strategy and Build Studio
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-2 rounded-full border border-earth-200/80 bg-white/60 px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-earth-900/52 lg:flex">
            <Sparkles className="h-3.5 w-3.5 text-terracotta" />
            Based in growth systems, content, and web builds
          </div>
        </div>

        <ul className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm transition-colors duration-200 cursor-pointer ${
                  pathname === link.href
                    ? "bg-earth-950 text-cream shadow-[0_12px_26px_rgba(26,51,37,0.14)]"
                    : "text-earth-900/70 hover:bg-white/40 hover:text-forest"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <MagneticButton
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-earth-950 px-5 py-2.5 text-sm font-semibold text-cream shadow-[0_14px_34px_rgba(26,51,37,0.2)] transition-colors duration-200 hover:bg-forest-deep"
          >
            Start a Project <ArrowUpRight className="h-4 w-4" />
          </MagneticButton>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-earth-200/80 bg-white/55 md:hidden"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            className="block w-5 h-0.5 bg-earth-900 origin-center"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-0.5 bg-earth-900"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            className="block w-5 h-0.5 bg-earth-900 origin-center"
          />
        </button>
      </motion.nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="glass-nav mx-auto mt-3 max-w-6xl overflow-hidden rounded-[2rem] md:hidden"
          >
            <div className="space-y-5 px-6 py-6">
              <div className="rounded-[1.5rem] border border-earth-200/70 bg-white/55 p-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-earth-900/45">
                  Loam builds
                </p>
                <p className="mt-2 text-sm leading-relaxed text-earth-900/72">
                  Positioning, websites, and content systems designed to make premium brands feel inevitable.
                </p>
              </div>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between rounded-[1.25rem] border px-4 py-3 text-base transition-colors duration-200 cursor-pointer ${
                      pathname === link.href
                        ? "border-earth-950 bg-earth-950 text-cream"
                        : "border-earth-200/80 bg-white/40 text-earth-900/80 hover:border-forest hover:text-forest"
                    }`}
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
              <MagneticButton
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-earth-950 px-6 py-3 text-sm font-semibold text-cream"
              >
                Start a Project <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

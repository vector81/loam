"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Loam made the brand feel like it finally matched what we were actually building. The site went from a liability to our sharpest sales tool.",
    name: "Maren Voss",
    role: "Founder",
    company: "Nera",
  },
  {
    quote:
      "Most agencies gave us a site. Loam gave us a system — positioning, design, editorial, all moving in the same direction. Pipeline influence was immediate.",
    name: "Daniel Rho",
    role: "Managing Partner",
    company: "Atelier North",
  },
  {
    quote:
      "We had strong work and a weak front door. Loam fixed the door, then built the hallway behind it. Inquiry quality changed within weeks.",
    name: "Sloane Ashby",
    role: "CEO",
    company: "Thorn",
  },
];

export function TestimonialCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((c) => (c + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto max-w-3xl text-center">
      <Quote className="mx-auto mb-6 h-8 w-8 text-terracotta/40" />
      <div className="relative min-h-[12rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-heading text-2xl leading-snug tracking-[-0.02em] text-earth-950 sm:text-3xl">
              &ldquo;{testimonials[active].quote}&rdquo;
            </p>
            <div className="mt-6">
              <p className="text-sm font-semibold text-earth-950">{testimonials[active].name}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-earth-900/48">
                {testimonials[active].role}, {testimonials[active].company}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? "w-8 bg-forest" : "w-2 bg-earth-300"
            }`}
            aria-label={`View testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

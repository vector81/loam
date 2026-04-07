"use client";

import { motion } from "motion/react";

interface MarqueeProps {
  items: string[];
  speed?: number;
  className?: string;
}

export function Marquee({ items, speed = 30, className = "" }: MarqueeProps) {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex w-max gap-8"
        animate={{ x: ["0%", "-25%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 whitespace-nowrap text-[clamp(1rem,2.5vw,1.35rem)] uppercase tracking-[0.22em] text-earth-900/28"
          >
            {item}
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-terracotta/40" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

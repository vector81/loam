"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyRef = any;

interface TextRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
}

export function TextReveal({ text, className = "", as: Tag = "p", delay = 0 }: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const words = text.split(" ");

  return (
    <Tag ref={ref as AnyRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: "105%", opacity: 0, filter: "blur(10px)" }}
            animate={isInView ? { y: "0%", opacity: 1, filter: "blur(0px)" } : { y: "105%", opacity: 0, filter: "blur(10px)" }}
            transition={{
              duration: 0.72,
              delay: delay + i * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

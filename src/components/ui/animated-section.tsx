"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

import type { TargetAndTransition } from "motion/react";

type Direction = "up" | "left" | "right" | "scale";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
}

const directionVariants: Record<Direction, { hidden: TargetAndTransition; visible: TargetAndTransition }> = {
  up: {
    hidden: { opacity: 0, y: 48, filter: "blur(12px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  left: {
    hidden: { opacity: 0, x: -44, filter: "blur(12px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  right: {
    hidden: { opacity: 0, x: 44, filter: "blur(12px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.94, filter: "blur(12px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
  },
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.18 });

  const { hidden, visible } = directionVariants[direction];

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={isInView ? visible : hidden}
      transition={{
        type: "spring",
        stiffness: 110,
        damping: 18,
        mass: 0.9,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 70, damping: 18 });
  const springY = useSpring(y, { stiffness: 70, damping: 18 });
  const springXSlow = useSpring(x, { stiffness: 38, damping: 16 });
  const springYSlow = useSpring(y, { stiffness: 38, damping: 16 });

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
      aria-hidden="true"
    >
      <motion.div
        className="absolute h-[420px] w-[420px] rounded-full"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(61,107,79,0.08) 0%, rgba(61,107,79,0.04) 34%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />
      <motion.div
        className="absolute h-[260px] w-[260px] rounded-full"
        style={{
          x: springXSlow,
          y: springYSlow,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(198,123,92,0.07) 0%, transparent 72%)",
          mixBlendMode: "multiply",
        }}
      />
    </motion.div>
  );
}

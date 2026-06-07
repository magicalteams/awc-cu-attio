"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, animate } from "motion/react";

/**
 * Counts up from 0 to `to` once it scrolls into view.
 * Use for "by the numbers" stat blocks.
 */
export function AnimatedCounter({
  to,
  duration = 1.6,
  prefix = "",
  suffix = "",
  format = (v: number) => v.toLocaleString("en-US"),
}: {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  format?: (n: number) => string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(to);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, to, duration, reduced]);

  return (
    <motion.span
      ref={ref}
      initial={reduced ? { opacity: 1 } : { opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.4 }}
      style={{ display: "inline-block" }}
    >
      {prefix}
      {format(display)}
      {suffix}
    </motion.span>
  );
}

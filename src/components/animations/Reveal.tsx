"use client";

import { motion, type MotionProps } from "framer-motion";
import type { PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<{
  delay?: number;
  y?: number;
  className?: string;
}> &
  MotionProps;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  ...motionProps
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}

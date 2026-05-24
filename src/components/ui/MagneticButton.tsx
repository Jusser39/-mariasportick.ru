"use client";

import { motion, useMotionValue, useSpring, type HTMLMotionProps } from "framer-motion";
import { useMemo } from "react";

type MagneticButtonProps = HTMLMotionProps<"a"> & {
  strength?: number;
};

export function MagneticButton({
  strength = 24,
  className,
  children,
  onMouseMove,
  onMouseLeave,
  ...props
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 170, damping: 14, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 170, damping: 14, mass: 0.2 });

  const style = useMemo(() => ({ x: springX, y: springY }), [springX, springY]);

  return (
    <motion.a
      {...props}
      style={style}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={className}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const offsetX = event.clientX - (rect.left + rect.width / 2);
        const offsetY = event.clientY - (rect.top + rect.height / 2);
        x.set((offsetX / rect.width) * strength);
        y.set((offsetY / rect.height) * strength);
        onMouseMove?.(event);
      }}
      onMouseLeave={(event) => {
        x.set(0);
        y.set(0);
        onMouseLeave?.(event);
      }}
    >
      {children}
    </motion.a>
  );
}

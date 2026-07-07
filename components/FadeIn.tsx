"use client";

import { motion } from 'motion/react';
import { useReducedMotion } from 'motion/react';

type Direction = "up" | "down" | "left" | "right";

function getInitial(from: Direction, amount: number) {
  switch (from) {
    case "up":    return { opacity: 0, y: amount };
    case "down":  return { opacity: 0, y: -amount };
    case "left":  return { opacity: 0, x: -amount };
    case "right": return { opacity: 0, x: amount };
  }
}

export default function FadeIn({
  children,
  delay = 0,
  from = "up",
  amount = 24,
  className = ""
}: {
  children: React.ReactNode;
  delay?: number;
  from?: Direction;
  amount?: number;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={getInitial(from, amount)}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay
      }}
    >
      {children}
    </motion.div>
  );
}

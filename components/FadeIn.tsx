"use client";

import { motion } from 'motion/react';
import { useReducedMotion } from 'motion/react';

export default function FadeIn({ 
  children, 
  delay = 0,
  className = ""
}: { 
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1], 
        delay 
      }}
    >
      {children}
    </motion.div>
  );
}

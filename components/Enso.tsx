"use client";

import { motion } from 'motion/react';
import { useReducedMotion } from 'motion/react';
import Image from 'next/image';

export default function Enso() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative w-64 h-64 md:w-80 md:h-80 mx-auto flex items-center justify-center"
      initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="relative w-full h-full flex items-center justify-center mix-blend-multiply"
        animate={shouldReduceMotion ? {} : {
          opacity: [0.9, 1, 0.9],
          scale: [0.99, 1.01, 0.99],
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.0,
        }}
      >
        <Image
          src="/Gemini_Generated_Image_il23iwil23iwil23.png"
          alt="Zen Enso Circle"
          fill
          className="object-contain opacity-90 drop-shadow-sm mix-blend-multiply"
          sizes="(max-width: 768px) 256px, 320px"
          priority
        />
      </motion.div>
    </motion.div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const R = 80;
const CIRCUM = 2 * Math.PI * R; // ≈ 502.65
const ARC = CIRCUM * 0.84;       // 84% — leaves a zen gap

export default function EnsoLoader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof sessionStorage === "undefined") return;
    if (sessionStorage.getItem("sensai_loaded")) return;
    sessionStorage.setItem("sensai_loaded", "1");
    setVisible(true);

    // Hide at 1.7s so the exit animation (0.5s) finishes around 2.2s
    const t = setTimeout(() => setVisible(false), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-paper"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <svg
            width="220"
            height="220"
            viewBox="0 0 200 200"
            className="overflow-visible"
          >
            {/* Faint guide ring for depth */}
            <circle
              cx="100"
              cy="100"
              r={R}
              stroke="#D8D4C8"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${ARC} ${CIRCUM}`}
              style={{ transform: "rotate(-90deg)", transformOrigin: "100px 100px" }}
            />

            {/* Animated brush-stroke circle */}
            <motion.circle
              cx="100"
              cy="100"
              r={R}
              stroke="#16181D"
              strokeWidth="7"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${ARC} ${CIRCUM}`}
              style={{ transform: "rotate(-90deg)", transformOrigin: "100px 100px" }}
              initial={{ strokeDashoffset: ARC }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 1.3, ease: [0.4, 0, 0.1, 1], delay: 0.1 }}
            />

            {/* Fade-in dot at stroke start — suggests lifted brush */}
            <motion.circle
              cx="100"
              cy={100 - R}
              r="3.5"
              fill="#16181D"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ duration: 0.2, delay: 1.35 }}
            />
          </svg>

          <motion.p
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            Sensai Studio
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

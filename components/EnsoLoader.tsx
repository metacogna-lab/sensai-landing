"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function EnsoLoader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof sessionStorage === "undefined") return;
    if (sessionStorage.getItem("sensai_loaded")) return;
    sessionStorage.setItem("sensai_loaded", "1");
    setVisible(true);
    const t = setTimeout(() => setVisible(false), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            className="fixed inset-0 z-[199] bg-paper/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            aria-hidden="true"
          />

          <div className="fixed inset-0 z-[200] flex items-center justify-center pointer-events-none" aria-hidden="true">
            <motion.div
              className="bg-paper border border-hairline rounded-sm shadow-2xl px-10 py-8 flex flex-col items-center gap-5"
              initial={{ opacity: 0, scale: 0.92, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative w-10 h-10">
                <svg className="absolute inset-0" width="40" height="40" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="16" fill="none" stroke="#D8D4C8" strokeWidth="2" />
                </svg>
                <motion.svg
                  className="absolute inset-0"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
                  style={{ originX: "50%", originY: "50%" }}
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="16"
                    fill="none"
                    stroke="#16181D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="26 76"
                  />
                </motion.svg>
              </div>

              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40">
                Sensai Studio
              </p>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

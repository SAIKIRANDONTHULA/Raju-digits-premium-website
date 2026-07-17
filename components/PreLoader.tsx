"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PreLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-noir"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <div className="relative h-20 w-20">
            {/* Shutter blades */}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <motion.span
                key={i}
                className="absolute left-1/2 top-1/2 h-10 w-4 origin-bottom bg-gold"
                style={{ rotate: `${deg}deg` }}
                initial={{ scaleY: 1, opacity: 1 }}
                animate={{ scaleY: [1, 0.15, 1], opacity: [1, 0.4, 1] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.06,
                }}
              />
            ))}
            <div className="absolute inset-0 rounded-full border border-gold/40" />
          </div>
          <motion.p
            className="mt-6 font-display text-sm tracking-[0.4em] text-gold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            RS DIGITALS
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

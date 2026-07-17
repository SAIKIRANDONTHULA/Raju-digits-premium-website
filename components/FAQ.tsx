"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-pad bg-noir2">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow">Good to Know</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            Frequently Asked <span className="gold-text">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={f.q} className="glass overflow-hidden rounded-xl">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="font-display text-base font-medium text-ivory sm:text-lg">
                  {f.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gold-gradient text-noir"
                >
                  <FiPlus size={16} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <p className="px-6 pb-6 text-sm leading-relaxed text-ivory/65">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

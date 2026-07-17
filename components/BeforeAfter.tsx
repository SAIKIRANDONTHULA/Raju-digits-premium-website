"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiMove } from "react-icons/fi";

const BEFORE =
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=40&sat=-100";
const AFTER =
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80";

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  };

  return (
    <section className="section-pad bg-noir">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow">The RS Digitals Edit</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            Before <span className="gold-text">&amp;</span> After
          </h2>
          <p className="mt-4 text-sm text-ivory/60">
            Drag the slider to see the difference our editing makes.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative mx-auto h-[320px] w-full max-w-3xl select-none overflow-hidden rounded-2xl border border-gold/20 sm:h-[460px]"
          onMouseDown={(e) => {
            dragging.current = true;
            updateFromClientX(e.clientX);
          }}
          onMouseMove={(e) => dragging.current && updateFromClientX(e.clientX)}
          onMouseUp={() => (dragging.current = false)}
          onMouseLeave={() => (dragging.current = false)}
          onTouchStart={(e) => updateFromClientX(e.touches[0].clientX)}
          onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
        >
          <Image src={AFTER} alt="Edited photograph" fill className="object-cover" />
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <Image
              src={BEFORE}
              alt="Original unedited photograph"
              fill
              className="object-cover"
            />
            <span className="absolute left-3 top-3 rounded-full bg-noir/70 px-3 py-1 text-[10px] uppercase tracking-widest text-ivory/80">
              Before
            </span>
          </div>
          <span className="absolute right-3 top-3 rounded-full bg-noir/70 px-3 py-1 text-[10px] uppercase tracking-widest text-ivory/80">
            After
          </span>

          <motion.div
            className="absolute inset-y-0 z-10 flex w-1 -translate-x-1/2 cursor-ew-resize items-center justify-center bg-gold"
            style={{ left: `${pos}%` }}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-noir shadow-gold">
              <FiMove size={16} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

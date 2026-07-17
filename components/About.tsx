"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Happy Clients", value: 500, suffix: "+" },
  { label: "Photoshoots", value: 1200, suffix: "+" },
  { label: "Years Experience", value: 7, suffix: "+" },
  { label: "Client Satisfaction", value: 100, suffix: "%" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
      else setDisplay(value);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-gold sm:text-5xl">
      {display}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="section-pad bg-noir">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-gold/15 sm:h-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=900&q=80"
              alt="RS Digitals photographer at work"
              fill
              className="object-cover"
            />
          </div>
          <div className="glass absolute -bottom-8 -right-6 hidden rounded-2xl p-6 shadow-gold sm:block">
            <p className="font-display text-3xl font-bold text-gold">7+</p>
            <p className="text-xs uppercase tracking-widest text-ivory/70">
              Years of Storytelling
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="eyebrow">About RS Digitals</span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-5xl">
            We Don&apos;t Just Take Pictures,{" "}
            <span className="gold-text">We Tell Stories.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ivory/70">
            Based in Hyderabad, RS Digitals is a team of photographers and
            filmmakers devoted to preserving the fleeting, unrepeatable
            moments of your biggest celebrations. From the nervous energy
            before the vows to the last dance of the night, we approach every
            frame with the patience of a documentarian and the eye of an
            artist — so years from now, you can relive it exactly as it felt.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <Counter value={s.value} suffix={s.suffix} />
                <p className="mt-1 text-xs uppercase tracking-widest text-ivory/60">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiCamera, FiChevronDown } from "react-icons/fi";

const subtitleItems = [
  "Wedding Photography",
  "Pre-Wedding",
  "Engagement",
  "Cinematic Films",
  "Portraits",
  "Events",
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden bg-noir"
    >
      {/* Background video */}
      <motion.div style={{ y }} className="absolute inset-0 h-[120%] w-full">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-a-couple-getting-married-4279/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-noir/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-noir/70" />
        <div className="absolute inset-0 bg-noir-radial" />
      </motion.div>

      {/* Floating camera icons */}
      <FiCamera
        className="absolute left-[8%] top-[22%] hidden text-gold/30 animate-float md:block"
        size={44}
      />
      <FiCamera
        className="absolute right-[10%] top-[62%] hidden text-gold/20 animate-float md:block"
        size={64}
        style={{ animationDelay: "1.5s" }}
      />
      <FiCamera
        className="absolute left-[16%] bottom-[16%] hidden text-gold/25 animate-float md:block"
        size={30}
        style={{ animationDelay: "3s" }}
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="eyebrow mb-5"
        >
          Hyderabad · Est. 2019
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.9, ease: "easeOut" }}
          className="font-display text-4xl font-bold leading-[1.1] text-ivory sm:text-6xl lg:text-7xl"
        >
          Capturing Moments <br className="hidden sm:block" />
          That Last <span className="gold-text">Forever.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-ivory/70 sm:text-base"
        >
          {subtitleItems.map((item, i) => (
            <span key={item} className="flex items-center gap-2">
              {item}
              {i < subtitleItems.length - 1 && (
                <span className="text-gold">|</span>
              )}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.7 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#portfolio"
            className="group relative overflow-hidden rounded-full bg-gold-gradient px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-noir shadow-gold"
          >
            <span className="relative z-10">View Portfolio</span>
          </a>
          <a
            href="#booking"
            className="rounded-full border border-gold/60 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-ivory transition hover:bg-gold/10"
          >
            Book a Shoot
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-gold/70"
      >
        <FiChevronDown size={26} />
      </motion.div>
    </section>
  );
}

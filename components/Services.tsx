"use client";

import { motion } from "framer-motion";
import {
  FiCamera,
  FiFilm,
  FiHeart,
  FiUser,
  FiSmile,
  FiGift,
  FiBriefcase,
  FiArrowRight,
} from "react-icons/fi";
import { services } from "@/lib/data";

const iconMap = {
  camera: FiCamera,
  film: FiFilm,
  heart: FiHeart,
  user: FiUser,
  baby: FiSmile,
  cake: FiGift,
  building: FiBriefcase,
};

export default function Services() {
  return (
    <section id="services" className="section-pad relative bg-noir2">
      <div className="pointer-events-none absolute inset-0 bg-noir-radial" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow">What We Offer</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            Services Crafted for <span className="gold-text">Every Story</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.12 }}
                whileHover={{ y: -8 }}
                className="glass group relative flex flex-col rounded-2xl p-8 shadow-glass"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gold-gradient text-noir shadow-gold transition-transform duration-300 group-hover:rotate-6">
                  <Icon size={26} />
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-ivory">
                  {s.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-ivory/65">
                  {s.description}
                </p>
                <a
                  href="#booking"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gold"
                >
                  Learn More
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

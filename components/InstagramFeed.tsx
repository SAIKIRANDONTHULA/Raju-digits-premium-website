"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { portfolioItems } from "@/lib/data";

const feed = portfolioItems.slice(0, 6);

export default function InstagramFeed() {
  return (
    <section className="section-pad bg-noir">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-10">
        <span className="eyebrow">Follow Along</span>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
          <span className="gold-text">@rsdigitals</span> on Instagram
        </h2>

        <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-6">
          {feed.map((item, i) => (
            <motion.a
              key={item.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-noir/0 text-transparent transition group-hover:bg-noir/50 group-hover:text-gold">
                <FaInstagram size={22} />
              </div>
            </motion.a>
          ))}
        </div>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-sm font-semibold text-gold transition hover:bg-gold/10"
        >
          <FaInstagram /> View More on Instagram
        </a>
      </div>
    </section>
  );
}

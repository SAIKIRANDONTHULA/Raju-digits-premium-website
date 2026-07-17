"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlay, FiX } from "react-icons/fi";

const videos = [
  {
    id: 1,
    title: "Sindhu & Arjun — Wedding Film",
    thumb:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    src: "https://cdn.coverr.co/videos/coverr-a-couple-getting-married-4279/1080p.mp4",
  },
  {
    id: 2,
    title: "Meera & Suresh — Highlight Reel",
    thumb:
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=800&q=80",
    src: "https://cdn.coverr.co/videos/coverr-a-couple-getting-married-4279/1080p.mp4",
  },
  {
    id: 3,
    title: "The Reddy Engagement",
    thumb:
      "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=800&q=80",
    src: "https://cdn.coverr.co/videos/coverr-a-couple-getting-married-4279/1080p.mp4",
  },
];

export default function VideoGallery() {
  const [openId, setOpenId] = useState<number | null>(null);
  const active = videos.find((v) => v.id === openId);

  return (
    <section className="section-pad bg-noir2">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow">Motion &amp; Emotion</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            Cinematic <span className="gold-text">Films</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {videos.map((v) => (
            <motion.button
              key={v.id}
              onClick={() => setOpenId(v.id)}
              whileHover={{ y: -6 }}
              className="group relative h-64 overflow-hidden rounded-2xl border border-gold/15"
            >
              <Image
                src={v.thumb}
                alt={v.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-noir/50 transition group-hover:bg-noir/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-noir shadow-gold transition-transform duration-300 group-hover:scale-110">
                  <FiPlay size={22} className="ml-0.5" />
                </span>
              </div>
              <p className="absolute bottom-4 left-4 right-4 text-left font-display text-sm text-ivory">
                {v.title}
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-noir/95 p-4 backdrop-blur-md"
            onClick={() => setOpenId(null)}
          >
            <button
              aria-label="Close video"
              className="absolute right-6 top-6 text-ivory hover:text-gold"
              onClick={() => setOpenId(null)}
            >
              <FiX size={30} />
            </button>
            <motion.video
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={active.src}
              controls
              autoPlay
              className="max-h-[80vh] w-full max-w-3xl rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

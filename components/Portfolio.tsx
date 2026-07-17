"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn } from "react-icons/fi";
import { categories, portfolioItems, PortfolioItem } from "@/lib/data";

function TiltCard({
  item,
  onOpen,
}: {
  item: PortfolioItem;
  onOpen: () => void;
}) {
  const [style, setStyle] = useState({});

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -8;
    const rotateY = ((x - rect.width / 2) / rect.width) * 8;
    setStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`,
    });
  };

  const reset = () => setStyle({ transform: "perspective(900px)" });

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={style}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-gold/10 transition-transform duration-300 ${
        item.tall ? "row-span-2" : ""
      }`}
      onClick={onOpen}
    >
      <div className={`relative w-full ${item.tall ? "h-[520px]" : "h-[250px]"}`}>
        <Image
          src={item.img}
          alt={item.title}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-noir/90 via-noir/10 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <span className="eyebrow mb-1">{item.category}</span>
        <h3 className="font-display text-lg text-ivory">{item.title}</h3>
      </div>
      <div className="absolute right-4 top-4 flex h-9 w-9 scale-0 items-center justify-center rounded-full bg-gold text-noir transition-transform duration-300 group-hover:scale-100">
        <FiZoomIn size={16} />
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      active === "All"
        ? portfolioItems
        : portfolioItems.filter((p) => p.category === active),
    [active]
  );

  const openLightbox = (id: number) => {
    const idx = filtered.findIndex((p) => p.id === id);
    setLightboxIndex(idx);
  };

  const step = (dir: 1 | -1) => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + dir + filtered.length) % filtered.length);
  };

  return (
    <section id="portfolio" className="section-pad bg-noir">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-4 max-w-2xl text-center">
          <span className="eyebrow">Our Work</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            A Portfolio of <span className="gold-text">Emotion</span>
          </h2>
        </div>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                active === cat
                  ? "border-gold bg-gold-gradient text-noir shadow-gold"
                  : "border-gold/25 text-ivory/70 hover:border-gold/60 hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid auto-rows-[250px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <TiltCard key={item.id} item={item} onOpen={() => openLightbox(item.id)} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-noir/95 p-4 backdrop-blur-md"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              aria-label="Close preview"
              className="absolute right-6 top-6 text-ivory hover:text-gold"
              onClick={() => setLightboxIndex(null)}
            >
              <FiX size={30} />
            </button>
            <button
              aria-label="Previous image"
              className="absolute left-4 text-ivory hover:text-gold sm:left-8"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
            >
              <FiChevronLeft size={34} />
            </button>
            <motion.div
              key={filtered[lightboxIndex].id}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="relative h-[70vh] w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightboxIndex].img}
                alt={filtered[lightboxIndex].title}
                fill
                className="rounded-xl object-contain"
              />
              <p className="mt-3 text-center font-display text-xl text-ivory">
                {filtered[lightboxIndex].title}
              </p>
            </motion.div>
            <button
              aria-label="Next image"
              className="absolute right-4 text-ivory hover:text-gold sm:right-8"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
            >
              <FiChevronRight size={34} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

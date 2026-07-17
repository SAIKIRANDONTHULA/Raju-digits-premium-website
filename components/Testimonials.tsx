"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FiStar } from "react-icons/fi";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad relative bg-noir2">
      <div className="pointer-events-none absolute inset-0 bg-noir-radial" />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow">Kind Words</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            Stories From <span className="gold-text">Our Couples</span>
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true, el: ".testimonial-pagination" }}
          loop
          spaceBetween={24}
          className="pb-4"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass mx-auto flex max-w-2xl flex-col items-center rounded-2xl p-10 text-center shadow-glass"
              >
                <div className="relative mb-5 h-16 w-16 overflow-hidden rounded-full border-2 border-gold">
                  <Image src={t.img} alt={t.name} fill className="object-cover" />
                </div>
                <div className="mb-4 flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FiStar key={i} fill="#D4AF37" size={16} />
                  ))}
                </div>
                <p className="mb-5 text-base italic leading-relaxed text-ivory/80">
                  &ldquo;{t.review}&rdquo;
                </p>
                <p className="font-display text-lg font-semibold text-gold">
                  {t.name}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="testimonial-pagination mt-6 flex justify-center gap-2" />
      </div>
    </section>
  );
}

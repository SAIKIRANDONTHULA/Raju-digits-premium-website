"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "./ThemeProvider";

const links = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] transition-all duration-500 ${
        solid ? "glass py-3 shadow-glass" : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#home" className="font-display text-2xl font-bold tracking-wide">
          RS <span className="gold-text">Digitals</span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="gold-underline font-body text-sm uppercase tracking-wider text-ivory/90 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <button
            aria-label="Toggle theme"
            onClick={toggle}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold transition hover:bg-gold/10"
          >
            {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
          <a
            href="#booking"
            className="rounded-full bg-gold-gradient px-5 py-2 text-sm font-semibold text-noir shadow-gold transition hover:brightness-110"
          >
            Book a Shoot
          </a>
        </div>

        <button
          aria-label="Open menu"
          className="text-gold md:hidden"
          onClick={() => setOpen(true)}
        >
          <FiMenu size={26} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 z-[70] flex w-72 flex-col gap-8 bg-noir/95 p-8 backdrop-blur-xl md:hidden"
          >
            <button
              aria-label="Close menu"
              className="self-end text-gold"
              onClick={() => setOpen(false)}
            >
              <FiX size={26} />
            </button>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-xl text-ivory hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                toggle();
              }}
              className="flex items-center gap-2 text-sm text-ivory/70"
            >
              {theme === "dark" ? <FiSun /> : <FiMoon />} Toggle theme
            </button>
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="rounded-full bg-gold-gradient px-5 py-3 text-center text-sm font-semibold text-noir"
            >
              Book a Shoot
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiLoader } from "react-icons/fi";

const fields: {
  name: string;
  label: string;
  type: string;
  required?: boolean;
}[] = [
  { name: "name", label: "Full Name", type: "text", required: true },
  { name: "phone", label: "Phone Number", type: "tel", required: true },
  { name: "email", label: "Email Address", type: "email", required: true },
  { name: "location", label: "Event Location", type: "text" },
];

const eventTypes = [
  "Wedding",
  "Pre-Wedding",
  "Engagement",
  "Birthday",
  "Baby Shoot",
  "Fashion",
  "Corporate Event",
];

type Status = "idle" | "submitting" | "success";

export default function Booking() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1400);
  };

  return (
    <section id="booking" className="section-pad bg-noir">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow">Let&apos;s Create Together</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            Book Your <span className="gold-text">Shoot</span>
          </h2>
          <p className="mt-4 text-sm text-ivory/60">
            Tell us about your celebration and we&apos;ll get back to you
            within 24 hours with availability and a custom quote.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="glass grid grid-cols-1 gap-6 rounded-2xl p-8 shadow-glass sm:grid-cols-2 sm:p-10"
        >
          {fields.map((f) => (
            <div key={f.name} className={f.name === "location" ? "sm:col-span-2" : ""}>
              <label
                htmlFor={f.name}
                className="mb-2 block text-xs uppercase tracking-widest text-ivory/60"
              >
                {f.label}
                {f.required && <span className="text-gold"> *</span>}
              </label>
              <input
                id={f.name}
                name={f.name}
                type={f.type}
                required={f.required}
                className="w-full rounded-lg border border-gold/20 bg-white/5 px-4 py-3 text-sm text-ivory placeholder:text-ivory/30 outline-none transition focus:border-gold"
                placeholder={`Enter your ${f.label.toLowerCase()}`}
              />
            </div>
          ))}

          <div>
            <label
              htmlFor="eventType"
              className="mb-2 block text-xs uppercase tracking-widest text-ivory/60"
            >
              Event Type <span className="text-gold">*</span>
            </label>
            <select
              id="eventType"
              name="eventType"
              required
              defaultValue=""
              className="w-full rounded-lg border border-gold/20 bg-white/5 px-4 py-3 text-sm text-ivory outline-none transition focus:border-gold"
            >
              <option value="" disabled className="bg-noir">
                Select event type
              </option>
              {eventTypes.map((t) => (
                <option key={t} value={t} className="bg-noir">
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="eventDate"
              className="mb-2 block text-xs uppercase tracking-widest text-ivory/60"
            >
              Event Date <span className="text-gold">*</span>
            </label>
            <input
              id="eventDate"
              name="eventDate"
              type="date"
              required
              className="w-full rounded-lg border border-gold/20 bg-white/5 px-4 py-3 text-sm text-ivory outline-none transition focus:border-gold"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="mb-2 block text-xs uppercase tracking-widest text-ivory/60"
            >
              Tell Us About Your Vision
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full rounded-lg border border-gold/20 bg-white/5 px-4 py-3 text-sm text-ivory placeholder:text-ivory/30 outline-none transition focus:border-gold"
              placeholder="Share the details, themes or must-have shots for your day..."
            />
          </div>

          <div className="sm:col-span-2">
            <motion.button
              type="submit"
              disabled={status !== "idle"}
              whileTap={{ scale: 0.97 }}
              className="relative w-full overflow-hidden rounded-full bg-gold-gradient py-4 text-sm font-semibold uppercase tracking-wider text-noir shadow-gold disabled:opacity-80"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {status === "idle" && "Submit Booking Request"}
                {status === "submitting" && (
                  <>
                    <FiLoader className="animate-spin" /> Sending...
                  </>
                )}
                {status === "success" && (
                  <>
                    <FiCheck /> Request Sent — We&apos;ll Be In Touch
                  </>
                )}
              </span>
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

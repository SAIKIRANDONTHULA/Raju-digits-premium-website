"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const details = [
  { icon: FiMapPin, label: "Studio Address", value: "Hyderabad, Telangana, India" },
  { icon: FiPhone, label: "Call Us", value: "+91 99999 99999" },
  { icon: FiMail, label: "Email Us", value: "hello@rsdigitals.in" },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-noir2">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow">Get In Touch</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            Visit Our <span className="gold-text">Studio</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {details.map((d) => (
              <div key={d.label} className="glass flex items-center gap-5 rounded-xl p-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold-gradient text-noir">
                  <d.icon size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ivory/50">
                    {d.label}
                  </p>
                  <p className="font-display text-lg text-ivory">{d.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-gold/20"
          >
            <iframe
              title="RS Digitals Studio Location"
              src="https://www.google.com/maps?q=Hyderabad,Telangana,India&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 340 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale invert-[0.92] contrast-[0.9]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

# RS Digitals — Premium Photography Portfolio

A cinematic, animated photography studio website built with Next.js (App Router),
Tailwind CSS, Framer Motion, GSAP-ready structure, and Swiper.js.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** — black / white / gold (`#0F0F0F`, `#FFFFFF`, `#D4AF37`) theme
- **Framer Motion** — page/scroll animations, reveals, hover states
- **Swiper.js** — testimonials carousel
- **react-icons** — icon set
- Playfair Display (headings) + Poppins (body) via `next/font/google`

## Structure

```
app/
  layout.tsx        Root layout, fonts, metadata (SEO)
  page.tsx           Assembles all sections
  globals.css         Tailwind layers + glassmorphism/utility classes
components/
  Navbar, Hero, Portfolio, Services, About, VideoGallery,
  Testimonials, BeforeAfter, InstagramFeed, FAQ, Booking, Contact,
  Footer, PreLoader, ScrollProgress, ScrollToTop, WhatsAppButton,
  MouseGlow, ThemeProvider
lib/
  data.ts             Portfolio items, services, testimonials, FAQ content
```

## Notes & next steps

- Replace the Unsplash placeholder images in `lib/data.ts` and the hero/video
  background URLs with your own photography and film assets.
- Swap the WhatsApp number (`919999999999`) and contact details in
  `components/WhatsAppButton.tsx` and `components/Contact.tsx`.
- The booking form in `components/Booking.tsx` currently simulates
  submission — connect it to your email service, form backend (e.g.
  Formspree, Resend) or CRM of choice.
- Dark/light theme is handled by `ThemeProvider.tsx` and toggled from the
  navbar; it persists via `localStorage`.
- All animations respect `prefers-reduced-motion`.

export type PortfolioItem = {
  id: number;
  category:
    | "Weddings"
    | "Pre-Weddings"
    | "Engagement"
    | "Birthday"
    | "Fashion"
    | "Baby Shoot"
    | "Events";
  title: string;
  img: string;
  tall?: boolean;
};

export const categories = [
  "All",
  "Weddings",
  "Pre-Weddings",
  "Engagement",
  "Birthday",
  "Fashion",
  "Baby Shoot",
  "Events",
] as const;

const unsplash = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const portfolioItems: PortfolioItem[] = [
  { id: 1, category: "Weddings", title: "Sindhu & Arjun", img: unsplash("photo-1519741497674-611481863552"), tall: true },
  { id: 2, category: "Pre-Weddings", title: "Golden Hour Promise", img: unsplash("photo-1522673607200-164d1b6ce486") },
  { id: 3, category: "Engagement", title: "The Ring Moment", img: unsplash("photo-1583939003579-730e3918a45a") },
  { id: 4, category: "Birthday", title: "Turning One", img: unsplash("photo-1530103862676-de8c9debad1d"), tall: true },
  { id: 5, category: "Fashion", title: "Studio Noir", img: unsplash("photo-1517841905240-472988babdf9") },
  { id: 6, category: "Baby Shoot", title: "Little Wonders", img: unsplash("photo-1544126592-807ade215a0b") },
  { id: 7, category: "Events", title: "Grand Corporate Gala", img: unsplash("photo-1511795409834-ef04bbd61622"), tall: true },
  { id: 8, category: "Weddings", title: "Mandap Vows", img: unsplash("photo-1606216794074-735e91aa2c92") },
  { id: 9, category: "Pre-Weddings", title: "Sunset Silhouettes", img: unsplash("photo-1465495976277-4387d4b0b4c6") },
  { id: 10, category: "Fashion", title: "Editorial Edge", img: unsplash("photo-1490114538077-0a7f8cb49891"), tall: true },
  { id: 11, category: "Engagement", title: "Yes, Forever", img: unsplash("photo-1529636798458-92182e662485") },
  { id: 12, category: "Events", title: "Reception Lights", img: unsplash("photo-1478146059778-26028b07395a") },
];

export type Service = {
  id: number;
  title: string;
  description: string;
  icon: "camera" | "film" | "heart" | "user" | "baby" | "cake" | "building";
};

export const services: Service[] = [
  {
    id: 1,
    title: "Wedding Photography",
    description:
      "Full-day coverage that captures every ritual, glance and tear with a documentary eye and a painter's light.",
    icon: "camera",
  },
  {
    id: 2,
    title: "Cinematic Wedding Films",
    description:
      "Story-driven films scored and edited like a feature — your wedding, told the way it felt to be there.",
    icon: "film",
  },
  {
    id: 3,
    title: "Pre-Wedding Shoots",
    description:
      "Destination or local, romantic sessions designed around your story as a couple, not a template.",
    icon: "heart",
  },
  {
    id: 4,
    title: "Portrait Photography",
    description:
      "Studio and natural-light portraits that feel unmistakably you — for professionals, families and milestones.",
    icon: "user",
  },
  {
    id: 5,
    title: "Baby Photography",
    description:
      "Gentle, safe and playful sessions that preserve the smallest details of your little one's first year.",
    icon: "baby",
  },
  {
    id: 6,
    title: "Birthday Photography",
    description:
      "From first birthdays to milestone celebrations, we capture the joy, cake-smash chaos and candid laughter.",
    icon: "cake",
  },
  {
    id: 7,
    title: "Corporate Events",
    description:
      "Polished, professional coverage of launches, conferences and galas — delivered fast for same-day sharing.",
    icon: "building",
  },
];

export type Testimonial = {
  id: number;
  name: string;
  img: string;
  review: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya & Karthik",
    img: unsplash("photo-1544005313-94ddf0286df2", 200),
    review:
      "RS Digitals didn't just photograph our wedding, they captured how it felt. Every frame brings us right back to that day.",
  },
  {
    id: 2,
    name: "Ananya Reddy",
    img: unsplash("photo-1580489944761-15a19d654956", 200),
    review:
      "Our pre-wedding shoot was effortless and fun. The team made us feel comfortable, and the final gallery was breathtaking.",
  },
  {
    id: 3,
    name: "Vikram Rao",
    img: unsplash("photo-1500648767791-00dcc994a43e", 200),
    review:
      "Professional, punctual and incredibly creative. Our corporate event photos were delivered within 24 hours — flawless work.",
  },
  {
    id: 4,
    name: "Meera & Suresh",
    img: unsplash("photo-1531123897727-8f129e1688ce", 200),
    review:
      "The cinematic film they made of our wedding is a family heirloom now. We've watched it more times than we can count.",
  },
];

export const faqs = [
  {
    q: "How far in advance should we book?",
    a: "For weddings, we recommend booking 4–6 months ahead, especially for peak season dates. Portrait and event sessions can often be scheduled with 2–3 weeks' notice.",
  },
  {
    q: "How long until we receive our photos?",
    a: "Sneak peeks are shared within 48 hours. Full edited galleries are typically delivered within 3–4 weeks for weddings, and 1–2 weeks for portraits and events.",
  },
  {
    q: "Do you travel for destination shoots?",
    a: "Yes, we love destination weddings and pre-wedding shoots. Travel and accommodation are quoted separately based on location.",
  },
  {
    q: "Can we customise a package?",
    a: "Absolutely. Every love story and event is different, so we build packages around what matters most to you — from hours of coverage to albums and films.",
  },
];

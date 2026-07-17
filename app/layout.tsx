import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import PreLoader from "@/components/PreLoader";
import ThemeProvider from "@/components/ThemeProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RS Digitals | Premium Wedding & Portrait Photography in Hyderabad",
  description:
    "RS Digitals crafts cinematic wedding films, pre-wedding shoots, portraits and event photography in Hyderabad. We don't just take pictures, we tell stories.",
  keywords: [
    "wedding photography Hyderabad",
    "pre-wedding shoot",
    "cinematic wedding films",
    "portrait photography",
    "RS Digitals",
  ],
  openGraph: {
    title: "RS Digitals | Capturing Moments That Last Forever",
    description:
      "Premium wedding, pre-wedding, portrait and event photography studio based in Hyderabad.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${playfair.variable} ${poppins.variable} font-body`}>
        <ThemeProvider>
          <PreLoader />
          <ScrollProgress />
          {children}
          <WhatsAppButton />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}

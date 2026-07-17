import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import About from "@/components/About";
import VideoGallery from "@/components/VideoGallery";
import Testimonials from "@/components/Testimonials";
import BeforeAfter from "@/components/BeforeAfter";
import InstagramFeed from "@/components/InstagramFeed";
import FAQ from "@/components/FAQ";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";

export default function Home() {
  return (
    <main className="relative">
      <MouseGlow />
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <VideoGallery />
      <Testimonials />
      <BeforeAfter />
      <InstagramFeed />
      <FAQ />
      <Booking />
      <Contact />
      <Footer />
    </main>
  );
}

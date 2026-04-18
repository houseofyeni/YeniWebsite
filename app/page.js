"use client";
import { useRef, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Benefits from "@/components/Benefits";
import Flavours from "@/components/Flavours";
import Ingredients from "@/components/Ingredients";
import PatternInterrupt from "@/components/Patterninterrupt";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import SamplePopup from "@/components/SamplePopup";
import Analytics from "@/components/Analytics";

export default function Home() {
  const waitlistRef = useRef(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const hasAutoOpened = useRef(false);

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasAutoOpened.current) return;
      const scrolled = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? scrolled / docHeight : 0;
      if (pct >= 0.2) {
        hasAutoOpened.current = true;
        setPopupOpen(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar onCtaClick={openPopup} />
      <main>
        <Hero onCtaClick={openPopup} />
        <Problem />
        <Benefits onCtaClick={openPopup} />
        <Flavours />
        <Ingredients />
        <PatternInterrupt />
        <HowItWorks />
        <Testimonials />
        <Waitlist ref={waitlistRef} onCtaClick={openPopup} />
      </main>
      <Footer />
      <StickyMobileCTA onCtaClick={openPopup} />
      <SamplePopup isOpen={popupOpen} onClose={closePopup} />
      <Analytics />
    </>
  );
}

"use client";
import { useState, useEffect } from "react";

export default function StickyMobileCTA({ onCtaClick }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past the hero
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-4 right-4 z-40 md:hidden transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={onCtaClick}
        className="w-full bg-charcoal text-cream font-body font-medium text-base py-4 rounded-full shadow-lg shadow-black/30 flex items-center justify-center gap-2 active:scale-95 transition-transform"
      >
        <span>🌿</span>
        Get Free Samples
      </button>
    </div>
  );
}

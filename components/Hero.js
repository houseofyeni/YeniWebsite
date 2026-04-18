"use client";
import { useEffect, useState } from "react";
import { KitsHeroBadge } from "./KitsCounter";

function fadeUp(delayMs) {
  return {
    opacity: 0,
    transform: "translateY(28px)",
    animation: `heroFadeUp 0.8s cubic-bezier(0.22,1,0.36,1) ${delayMs}ms forwards`,
  };
}

const FLAVOURS = [
  {
    name: "Lemon Ginger",
    sub: "& Tulsi",
    color: "#E6F0DC",
    accent: "#4A7A3A",
    emoji: "🍋",
    tag: "Wind-down",
    desc: "Bright citrus, warming ginger, sacred tulsi. Your gut's favourite bedtime ritual.",
    image: "/hero-lemon.png",
  },
  {
    name: "Kokum Jeera",
    sub: "Classic",
    color: "#F5EAE0",
    accent: "#B07040",
    emoji: "🌿",
    tag: "After dinner",
    desc: "Tangy kokum, earthy jeera. The Indian digestive wisdom your dadi swore by.",
    image: "/hero-kokum.png",
  },
  {
    name: "Berry Lemonade",
    sub: "Calming",
    color: "#EBE0F5",
    accent: "#6B35B0",
    emoji: "🫐",
    tag: "Evening sip",
    desc: "Mixed berry burst, lemonade fizz. Universally loved, impossibly refreshing.",
    image: "/hero-berry.png",
  },
];

export default function Hero({ onCtaClick }) {
  const [mounted, setMounted] = useState(false);
  const [activeFlavour, setActiveFlavour] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const switchFlavour = (i) => {
    if (i === activeFlavour) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveFlavour(i);
      setIsTransitioning(false);
    }, 220);
  };

  const f = FLAVOURS[activeFlavour];

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6"
      style={{
        background: `radial-gradient(ellipse 100% 80% at 60% 20%, ${f.color}99 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 10% 90%, ${f.color}55 0%, transparent 50%), #FAF8F4`,
        transition: "background 0.8s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {/* Animated ambient orbs */}
      <div
        className="orb-float absolute pointer-events-none"
        style={{
          width: "700px",
          height: "700px",
          top: "-15%",
          right: "-12%",
          background: `radial-gradient(circle, ${f.color} 0%, transparent 65%)`,
          borderRadius: "50%",
          filter: "blur(80px)",
          transition: "background 0.8s ease",
        }}
      />
      <div
        className="orb-float-slow absolute pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          bottom: "-10%",
          left: "-8%",
          background: `radial-gradient(circle, ${f.color}88 0%, transparent 60%)`,
          borderRadius: "50%",
          filter: "blur(70px)",
          transition: "background 0.8s ease",
        }}
      />

      {/* Botanical SVG decoration — top right */}
      <svg
        className="absolute top-24 right-8 opacity-[0.07] pointer-events-none hidden lg:block"
        width="180"
        height="180"
        viewBox="0 0 180 180"
      >
        <circle
          cx="90"
          cy="90"
          r="85"
          stroke={f.accent}
          strokeWidth="1"
          fill="none"
          strokeDasharray="8 4"
        />
        <circle
          cx="90"
          cy="90"
          r="60"
          stroke={f.accent}
          strokeWidth="0.5"
          fill="none"
        />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
          <ellipse
            key={i}
            cx="90"
            cy="32"
            rx="6"
            ry="14"
            fill={f.accent}
            transform={`rotate(${deg} 90 90)`}
          />
        ))}
      </svg>

      {/* Spectrum top line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${f.accent}99 35%, ${f.accent} 50%, ${f.accent}99 65%, transparent 100%)`,
          transition: "background 0.6s ease",
        }}
      />

      <div className="max-w-6xl mx-auto w-full pt-32 pb-16 md:pt-40 md:pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* LEFT: Copy */}
          <div>
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 mb-7"
              style={mounted ? fadeUp(80) : { opacity: 0 }}
            >
              <span
                className="w-5 h-px"
                style={{ background: f.accent, transition: "background 0.5s" }}
              />
              <span
                className="font-mono text-xs tracking-widest uppercase"
                style={{ color: f.accent, transition: "color 0.5s" }}
              >
                Your Evening Ritual · India&apos;s First
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display font-light leading-[1.02] text-charcoal mb-5"
              style={{
                fontSize: "clamp(3rem, 7vw, 5.8rem)",
                letterSpacing: "-0.03em",
                ...(mounted ? fadeUp(160) : { opacity: 0 }),
              }}
            >
              Wind Down.
              <br />
              <em
                className="italic"
                style={{ color: f.accent, transition: "color 0.5s ease" }}
              >
                Gut Reset.
              </em>
              <br />
              Wake Up Light.
            </h1>

            {/* Sub */}
            <p
              className="font-body text-lg font-light leading-relaxed max-w-md mb-9"
              style={{
                color: "#5A534A",
                ...(mounted ? fadeUp(260) : { opacity: 0 }),
              }}
            >
              Yeni is India&apos;s first probiotic + hydration sachet crafted
              for your evening — anytime from 4 PM to 11 PM. One tear, one sip,
              your gut does the rest overnight.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-3"
              style={mounted ? fadeUp(360) : { opacity: 0 }}
            >
              <button
                onClick={onCtaClick}
                className="group inline-flex items-center justify-center gap-2 font-body font-semibold px-8 py-4 rounded-full text-base transition-all duration-300"
                style={{
                  background: f.accent,
                  color: "#FAF8F4",
                  boxShadow: `0 8px 28px ${f.accent}50`,
                  transition: "all 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = `0 14px 36px ${f.accent}60`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = `0 8px 28px ${f.accent}50`;
                }}
              >
                🌿 Claim Free Samples
              </button>
              <a
                href="#flavours"
                className="inline-flex items-center justify-center gap-2 font-body font-normal px-7 py-4 rounded-full text-base border transition-all duration-300"
                style={{
                  borderColor: `${f.accent}50`,
                  color: f.accent,
                  background: `${f.color}80`,
                }}
              >
                Explore Flavours ↓
              </a>
            </div>

            {/* Social proof */}
            <div
              className="flex items-center gap-5 mt-9 pt-7 border-t"
              style={{
                borderColor: `${f.accent}20`,
                ...(mounted ? fadeUp(460) : { opacity: 0 }),
              }}
            >
              <div className="flex -space-x-2">
                {["#8AAB7E", "#C8956E", "#5A7A50", "#7C3AED"].map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs text-white font-semibold"
                    style={{ backgroundColor: c, borderColor: "#FAF8F4" }}
                  >
                    {["P", "M", "R", "A"][i]}
                  </div>
                ))}
              </div>
              <div>
                <p className="font-body text-sm font-medium text-charcoal">
                  1,200+ on the waitlist
                </p>
                <p
                  className="font-mono text-xs mt-0.5"
                  style={{ color: f.accent }}
                >
                  <KitsHeroBadge />
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Interactive sachet + flavour picker */}
          <div
            className="flex flex-col items-center gap-8"
            style={
              mounted
                ? { animation: "heroFadeIn 0.9s ease 400ms both" }
                : { opacity: 0 }
            }
          >
            {/* Real product image */}
            <div
              style={{
                width: "260px",
                height: "340px",
                animation: mounted
                  ? "sachetFloat 5s ease-in-out infinite"
                  : "none",
                opacity: isTransitioning ? 0 : 1,
                transition: "opacity 0.3s ease",
                position: "relative",
              }}
            >
              <img
                key={f.image}
                src={f.image}
                alt={f.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "24px",
                  boxShadow: `0 32px 80px ${f.accent}35, 0 8px 24px rgba(0,0,0,0.12)`,
                  transition: "box-shadow 0.5s ease",
                }}
              />
              {/* Flavour glow behind image */}
              <div
                style={{
                  position: "absolute",
                  inset: "-20px",
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${f.color} 0%, transparent 70%)`,
                  filter: "blur(30px)",
                  zIndex: -1,
                  transition: "background 0.6s ease",
                }}
              />
            </div>

            {/* Flavour picker pills */}
            <div className="flex gap-3 flex-wrap justify-center">
              {FLAVOURS.map((fl, i) => (
                <button
                  key={i}
                  onClick={() => switchFlavour(i)}
                  className="font-body text-sm font-medium px-4 py-2 rounded-full border transition-all duration-300"
                  style={{
                    background: activeFlavour === i ? fl.accent : `${fl.color}`,
                    color: activeFlavour === i ? "#FAF8F4" : fl.accent,
                    borderColor: fl.accent,
                    transform: activeFlavour === i ? "scale(1.06)" : "scale(1)",
                    boxShadow:
                      activeFlavour === i
                        ? `0 4px 16px ${fl.accent}40`
                        : "none",
                  }}
                >
                  {fl.emoji} {fl.name}
                </button>
              ))}
            </div>

            {/* Flavour descriptor */}
            <div
              className="text-center max-w-xs px-6 py-4 rounded-2xl"
              style={{
                background: `${f.color}`,
                border: `1px solid ${f.accent}25`,
                opacity: isTransitioning ? 0 : 1,
                transition: "all 0.3s ease",
              }}
            >
              <p
                className="font-mono text-xs tracking-widest uppercase mb-1"
                style={{ color: f.accent }}
              >
                {f.tag}
              </p>
              <p
                className="font-display text-lg font-light italic"
                style={{ color: f.accent }}
              >
                {f.name} {f.sub}
              </p>
              <p
                className="font-body text-xs mt-1 leading-relaxed"
                style={{ color: "#5A534A" }}
              >
                {f.desc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: 0.45 }}
      >
        <span className="font-mono text-xs tracking-widest uppercase text-warm">
          Scroll
        </span>
        <div
          className="w-px h-10"
          style={{
            background: `linear-gradient(to bottom, ${f.accent}, transparent)`,
            animation: "heroPulse 2.2s ease-in-out infinite",
            transition: "background 0.5s",
          }}
        />
      </div>
    </section>
  );
}

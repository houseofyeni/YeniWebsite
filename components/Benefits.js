"use client";
import { useReveal } from "./useReveal";

const benefits = [
  {
    icon: "⚡",
    accent: "#4A7A3A",
    bg: "#E6F0DC",
    timeframe: "30 min",
    label: "Feel lighter after meals.",
  },
  {
    icon: "📉",
    accent: "#B07040",
    bg: "#F5EAE0",
    timeframe: "Day 5",
    label: "Bloating noticeably down.",
  },
  {
    icon: "🔥",
    accent: "#4A7A3A",
    bg: "#E6F0DC",
    timeframe: "7 days",
    label: "Less acidity. No antacids.",
  },
  {
    icon: "⏱️",
    accent: "#B07040",
    bg: "#F5EAE0",
    timeframe: "30 sec",
    label: "Complete gut reset. Daily.",
  },
  {
    icon: "🔋",
    accent: "#4A7A3A",
    bg: "#E6F0DC",
    timeframe: "Day 3",
    label: "No afternoon energy crash.",
  },
  {
    icon: "😴",
    accent: "#B07040",
    bg: "#F5EAE0",
    timeframe: "Night 1",
    label: "Sleep without gut discomfort.",
  },
  {
    icon: "🔄",
    accent: "#4A7A3A",
    bg: "#E6F0DC",
    timeframe: "2 weeks",
    label: "Digestion becomes clockwork.",
  },
  {
    icon: "🌿",
    accent: "#B07040",
    bg: "#F5EAE0",
    timeframe: "Every day",
    label: "A habit that actually sticks.",
  },
];

export default function Benefits({ onCtaClick }) {
  const ref = useReveal();

  return (
    <section
      id="benefits"
      ref={ref}
      style={{
        background: "#FAF8F4",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
        {/* Header */}
        <div className="reveal" style={{ marginBottom: "56px" }}>
          <span
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#8AAB7E",
              display: "block",
              marginBottom: "16px",
            }}
          >
            What Changes. How Fast.
          </span>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(2.2rem,5vw,4rem)",
              fontWeight: 300,
              color: "#1A1A18",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
            }}
          >
            Real outcomes.
            <br />
            <em style={{ fontStyle: "italic", color: "#4A7A3A" }}>
              Not wellness poetry.
            </em>
          </h2>
        </div>

        {/* 8-card grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "14px",
            marginBottom: "40px",
          }}
        >
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 4) + 1}`}
              style={{
                background: "#fff",
                borderRadius: "24px",
                padding: "28px 24px",
                border: "1px solid #F0EDE8",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.32s cubic-bezier(0.22,1,0.36,1)",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = `0 20px 48px ${b.accent}14`;
                e.currentTarget.style.borderColor = `${b.accent}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "#F0EDE8";
              }}
            >
              {/* Bottom accent bar */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: `linear-gradient(90deg, ${b.accent}, ${b.accent}20, transparent)`,
                  borderRadius: "0 0 24px 24px",
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "14px",
                  background: b.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  marginBottom: "20px",
                }}
              >
                {b.icon}
              </div>

              {/* THE NUMBER — absolute hero */}
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 2.6rem)",
                  fontWeight: 800,
                  color: b.accent,
                  margin: "0 0 8px",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              >
                {b.timeframe}
              </p>

              {/* Label — supporting */}
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "#7A736C",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {b.label}
              </p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div
          className="reveal"
          style={{
            background: "#1A1A18",
            borderRadius: "24px",
            padding: "32px 28px",
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "space-around",
            alignItems: "center",
            marginBottom: "28px",
          }}
        >
          {[
            { val: "2B+", label: "CFU Probiotics", color: "#8AAB7E" },
            { val: "0g", label: "Added Sugar", color: "#C8956E" },
            { val: "100%", label: "Real Ingredients", color: "#8AAB7E" },
            { val: "30 sec", label: "Daily Ritual", color: "#C8956E" },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "2.6rem",
                  fontWeight: 300,
                  color: s.color,
                  margin: "0 0 4px",
                }}
              >
                {s.val}
              </p>
              <p
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                  margin: 0,
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        {onCtaClick && (
          <div className="reveal" style={{ textAlign: "center" }}>
            <button
              onClick={onCtaClick}
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: "15px",
                fontWeight: 600,
                color: "#FAF8F4",
                background: "linear-gradient(135deg, #4A7A3A 0%, #2E4D24 100%)",
                border: "none",
                padding: "16px 36px",
                borderRadius: "100px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 8px 28px rgba(74,122,58,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 16px 40px rgba(74,122,58,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 28px rgba(74,122,58,0.3)";
              }}
            >
              🌿 Try Yeni Free — All 3 Flavours Included
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

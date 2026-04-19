"use client";
import { useReveal } from "./useReveal";

const benefits = [
  {
    icon: "⚡",
    num: "01",
    accent: "#4A7A3A",
    bg: "#E6F0DC",
    timeframe: "In 30 minutes",
    label: "Feel lighter after meals.",
  },
  {
    icon: "📉",
    num: "02",
    accent: "#B07040",
    bg: "#F5EAE0",
    timeframe: "By day 5",
    label: "Bloating noticeably down.",
  },
  {
    icon: "🔥",
    num: "03",
    accent: "#4A7A3A",
    bg: "#E6F0DC",
    timeframe: "In 7 days",
    label: "Less acidity. Without antacids.",
  },
  {
    icon: "💨",
    num: "04",
    accent: "#B07040",
    bg: "#F5EAE0",
    timeframe: "In 30 seconds",
    label: "Gut reset. Done for the day.",
  },
  {
    icon: "🔋",
    num: "05",
    accent: "#4A7A3A",
    bg: "#E6F0DC",
    timeframe: "By day 3",
    label: "No afternoon crash.",
  },
  {
    icon: "😴",
    num: "06",
    accent: "#B07040",
    bg: "#F5EAE0",
    timeframe: "From night 1",
    label: "Fall asleep without gut discomfort.",
  },
  {
    icon: "🔄",
    num: "07",
    accent: "#4A7A3A",
    bg: "#E6F0DC",
    timeframe: "In 2 weeks",
    label: "Digestion becomes clockwork.",
  },
  {
    icon: "🌿",
    num: "08",
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
            What Changes. Fast.
          </span>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "clamp(2.2rem,5vw,4rem)",
                fontWeight: 300,
                color: "#1A1A18",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                margin: 0,
              }}
            >
              Real outcomes.
              <br />
              <em style={{ fontStyle: "italic", color: "#4A7A3A" }}>
                Not wellness poetry.
              </em>
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: "14px",
                color: "#5A534A",
                maxWidth: "260px",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Each benefit tied to what the gut actually does — not vague
              claims.
            </p>
          </div>
        </div>

        {/* Unified 8-card grid — same design for all */}
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

              {/* Icon + accent circle */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "16px",
                    background: b.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "22px",
                  }}
                >
                  {b.icon}
                </div>
              </div>

              {/* Timeframe — the hero number */}
              <p
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: b.accent,
                  margin: "0 0 8px",
                  letterSpacing: "-0.01em",
                  lineHeight: 1,
                }}
              >
                {b.timeframe}
              </p>

              {/* Benefit label */}
              <p
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#5A534A",
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

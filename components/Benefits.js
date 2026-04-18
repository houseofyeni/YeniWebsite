"use client";
import { useReveal } from "./useReveal";

const benefits = [
  {
    icon: "⚡",
    label: "Lighter after meals.",
    sub: "In 30 minutes.",
    accent: "#4A7A3A",
    bg: "#E6F0DC",
    num: "01",
  },
  {
    icon: "📉",
    label: "Bloating down.",
    sub: "By day 5.",
    accent: "#B07040",
    bg: "#F5EAE0",
    num: "02",
  },
  {
    icon: "🔥",
    label: "Less acidity.",
    sub: "Without antacids.",
    accent: "#4A7A3A",
    bg: "#E6F0DC",
    num: "03",
  },
  {
    icon: "💨",
    label: "Less gas.",
    sub: "Less discomfort. Daily.",
    accent: "#B07040",
    bg: "#F5EAE0",
    num: "04",
  },
  {
    icon: "🔋",
    label: "No afternoon crash.",
    sub: "Real energy post-lunch.",
    accent: "#4A7A3A",
    bg: "#E6F0DC",
    num: "05",
  },
  {
    icon: "😴",
    label: "Fall asleep easy.",
    sub: "Without gut discomfort.",
    accent: "#B07040",
    bg: "#F5EAE0",
    num: "06",
  },
  {
    icon: "🔄",
    label: "Digestion on track.",
    sub: "Even on bad eating days.",
    accent: "#4A7A3A",
    bg: "#E6F0DC",
    num: "07",
  },
  {
    icon: "🌿",
    label: "30-second habit.",
    sub: "You'll actually keep.",
    accent: "#B07040",
    bg: "#F5EAE0",
    num: "08",
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
      {/* Subtle botanical bg */}
      <svg
        style={{
          position: "absolute",
          right: "-80px",
          top: "50%",
          transform: "translateY(-50%)",
          opacity: 0.03,
          pointerEvents: "none",
        }}
        width="500"
        height="500"
        viewBox="0 0 500 500"
      >
        <circle
          cx="250"
          cy="250"
          r="240"
          stroke="#4A7A3A"
          strokeWidth="1"
          fill="none"
          strokeDasharray="12 6"
        />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
          <ellipse
            key={i}
            cx="250"
            cy="18"
            rx="14"
            ry="32"
            fill="#4A7A3A"
            transform={`rotate(${deg} 250 250)`}
          />
        ))}
      </svg>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
        {/* Header */}
        <div className="reveal" style={{ marginBottom: "60px" }}>
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
              You'll feel like you —
              <br />
              <em style={{ fontStyle: "italic", color: "#4A7A3A" }}>
                without the gut problem.
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
              Real outcomes. Not wellness poetry. Each benefit tied to what your
              gut actually does.
            </p>
          </div>
        </div>

        {/* Benefits — large featured cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "16px",
            marginBottom: "16px",
          }}
        >
          {benefits.slice(0, 4).map((b, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: "#fff",
                borderRadius: "28px",
                padding: "36px 32px",
                border: "1px solid #F0EDE8",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = `0 24px 56px ${b.accent}15`;
                e.currentTarget.style.borderColor = `${b.accent}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "#F0EDE8";
              }}
            >
              {/* Ghost number */}
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "20px",
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "120px",
                  fontWeight: 700,
                  color: `${b.accent}07`,
                  lineHeight: 1,
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                {b.num}
              </span>

              {/* Icon circle */}
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "20px",
                  background: b.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px",
                  marginBottom: "24px",
                  boxShadow: `0 4px 16px ${b.accent}15`,
                }}
              >
                {b.icon}
              </div>

              {/* Number label */}
              <span
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: `${b.accent}80`,
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                {b.num}
              </span>

              {/* Benefit text */}
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "1.9rem",
                  fontWeight: 500,
                  color: "#1A1A18",
                  margin: "0 0 6px",
                  lineHeight: 1.1,
                }}
              >
                {b.label}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: "14px",
                  color: b.accent,
                  margin: 0,
                  fontWeight: 500,
                }}
              >
                {b.sub}
              </p>

              {/* Accent bottom bar */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: `linear-gradient(90deg, ${b.accent}40, ${b.accent}15, transparent)`,
                  borderRadius: "0 0 28px 28px",
                }}
              />
            </div>
          ))}
        </div>

        {/* Second row — compact horizontal cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          {benefits.slice(4).map((b, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: b.bg,
                borderRadius: "20px",
                padding: "24px 22px",
                border: `1px solid ${b.accent}15`,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = `0 16px 40px ${b.accent}18`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontSize: "26px" }}>{b.icon}</span>
                <span
                  style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: "10px",
                    color: `${b.accent}60`,
                    letterSpacing: "0.1em",
                  }}
                >
                  {b.num}
                </span>
              </div>

              <div>
                <p
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: "15px",
                    fontWeight: 700,
                    color: b.accent,
                    margin: "0 0 3px",
                    lineHeight: 1.2,
                  }}
                >
                  {b.label}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: "12px",
                    color: "#5A534A",
                    margin: 0,
                  }}
                >
                  {b.sub}
                </p>
              </div>
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
            { val: "100%", label: "Natural Ingredients", color: "#8AAB7E" },
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

        {/* Mid-page CTA */}
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

"use client";
import { useReveal } from "./useReveal";

const benefits = [
  {
    n: "01",
    title: "Supports Gut Health",
    desc: "Live probiotics restore microbiome balance — less discomfort, better digestion, consistently.",
    icon: "🦠",
    accent: "#4A7A3A",
    bg: "#E6F0DC",
  },
  {
    n: "02",
    title: "Reduces Bloating",
    desc: "Targeted strains chosen specifically to ease that heavy, bloated feeling after meals.",
    icon: "✨",
    accent: "#B07040",
    bg: "#F5EAE0",
  },
  {
    n: "03",
    title: "Deep Hydration",
    desc: "Electrolytes replenish what you lose through the day — water alone doesn't cut it.",
    icon: "💧",
    accent: "#4A7A3A",
    bg: "#E6F0DC",
  },
  {
    n: "04",
    title: "Effortless Daily Habit",
    desc: "30-second ritual. No prep, no pills to forget, no fridge required. Just tear, mix, sip.",
    icon: "⚡",
    accent: "#B07040",
    bg: "#F5EAE0",
  },
];

export default function Benefits() {
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
      {/* Botanical BG motif */}
      <svg
        style={{
          position: "absolute",
          right: "-60px",
          top: "50%",
          transform: "translateY(-50%)",
          opacity: 0.04,
          pointerEvents: "none",
        }}
        width="400"
        height="400"
        viewBox="0 0 400 400"
      >
        <circle
          cx="200"
          cy="200"
          r="190"
          stroke="#4A7A3A"
          strokeWidth="1"
          fill="none"
          strokeDasharray="10 6"
        />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
          <ellipse
            key={i}
            cx="200"
            cy="18"
            rx="12"
            ry="28"
            fill="#4A7A3A"
            transform={`rotate(${deg} 200 200)`}
          />
        ))}
      </svg>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginBottom: "64px",
          }}
          className="reveal"
        >
          <span
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#8AAB7E",
            }}
          >
            What Yeni Does For You
          </span>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond',Georgia,serif",
              fontSize: "clamp(2.4rem,5vw,4rem)",
              fontWeight: 300,
              color: "#1A1A18",
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              margin: 0,
            }}
          >
            Every sip working
            <br />
            <em style={{ fontStyle: "italic", color: "#4A7A3A" }}>
              overnight.
            </em>
          </h2>
        </div>

        {/* Benefits grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px",
          }}
        >
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: "#fff",
                borderRadius: "24px",
                padding: "36px 30px",
                border: "1px solid #F0EDE8",
                transition: "all 0.3s ease",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = `0 20px 48px ${b.accent}18`;
                e.currentTarget.style.borderColor = `${b.accent}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "#F0EDE8";
              }}
            >
              {/* Background number */}
              <span
                style={{
                  position: "absolute",
                  top: "-10px",
                  right: "16px",
                  fontFamily: "serif",
                  fontSize: "80px",
                  fontWeight: 700,
                  color: `${b.accent}08`,
                  lineHeight: 1,
                  pointerEvents: "none",
                }}
              >
                {b.n}
              </span>
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
                  marginBottom: "20px",
                }}
              >
                {b.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "#1A1A18",
                  marginBottom: "10px",
                  lineHeight: 1.2,
                }}
              >
                {b.title}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: "14px",
                  color: "#5A534A",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div
          className="reveal"
          style={{
            marginTop: "48px",
            background: "#1A1A18",
            borderRadius: "24px",
            padding: "36px 40px",
            display: "flex",
            flexWrap: "wrap",
            gap: "0",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {[
            { val: "5B+", label: "CFU Probiotics", color: "#8AAB7E" },
            { val: "0g", label: "Added Sugar", color: "#C8956E" },
            { val: "100%", label: "Natural", color: "#8AAB7E" },
            { val: "30s", label: "To Prepare", color: "#C8956E" },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                padding: "8px 24px",
                borderRight:
                  i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}
            >
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
                  color: "rgba(255,255,255,0.35)",
                  margin: 0,
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

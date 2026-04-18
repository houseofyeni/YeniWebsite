"use client";
import { useReveal } from "./useReveal";

const ingredients = [
  {
    emoji: "🌿",
    name: "Kokum Extract",
    outcome: "Less bloating. Better digestion.",
    desc: "Anti-inflammatory cooling agent. Used in Indian cooking for exactly this — now clinically extracted.",
    color: "#4A7A3A",
  },
  {
    emoji: "🫐",
    name: "Kokum",
    outcome: "Less bloating. Less puffiness.",
    desc: "Anti-inflammatory. Used in Indian cooking for exactly this. Now in every sachet.",
    color: "#B07040",
  },
  {
    emoji: "🌾",
    name: "Jeera (Cumin)",
    outcome: "Less gas. Faster digestion.",
    desc: "Activates digestive enzymes. Kills gas. Speeds up your gut.",
    color: "#4A7A3A",
  },
  {
    emoji: "🦠",
    name: "Live Probiotics",
    outcome: "Gut flora rebuilt.",
    desc: "2 Billion CFU. Rebuilds your microbiome from inside. The long-game fix.",
    color: "#6B35B0",
  },
  {
    emoji: "⚡",
    name: "Electrolytes",
    outcome: "Real hydration.",
    desc: "Sodium, potassium, magnesium. Rehydrates at cellular level — not just surface.",
    color: "#B07040",
  },
];

export default function Ingredients() {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      style={{
        background: "#1A1A18",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ghost word */}
      <div
        style={{
          position: "absolute",
          bottom: "-40px",
          left: "-20px",
          fontFamily: "serif",
          fontSize: "clamp(80px,15vw,200px)",
          fontWeight: 900,
          color: "rgba(255,255,255,0.025)",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        PURE
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
        {/* Header */}
        <div className="reveal" style={{ marginBottom: "12px" }}>
          <span
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#8AAB7E",
              display: "block",
              marginBottom: "14px",
            }}
          >
            What&apos;s Inside
          </span>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(2rem,5vw,3.5rem)",
              fontWeight: 300,
              color: "#FAF8F4",
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
            }}
          >
            Ingredients you already trust —
            <br />
            <em style={{ fontStyle: "italic", color: "#8AAB7E" }}>
              now in a form you&apos;ll use daily.
            </em>
          </h2>
        </div>

        {/* Trust line */}
        <p
          className="reveal"
          style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: "14px",
            color: "rgba(255,255,255,0.45)",
            marginBottom: "40px",
            maxWidth: "420px",
            lineHeight: 1.6,
          }}
        >
          From kitchens like yours — kokum, jeera, tulsi — combined with
          clinically-studied probiotics. No fillers. Only real ingredients.
        </p>

        {/* Ingredient rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {ingredients.map((ing, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 3) + 1}`}
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "center",
                padding: "18px 22px",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                e.currentTarget.style.borderColor = `${ing.color}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
              }}
            >
              {/* Emoji */}
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "14px",
                  background: `${ing.color}20`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  flexShrink: 0,
                }}
              >
                {ing.emoji}
              </div>

              {/* Name + desc */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#FAF8F4",
                    margin: "0 0 2px",
                  }}
                >
                  {ing.name}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.4)",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {ing.desc}
                </p>
              </div>

              {/* Outcome pill */}
              <div style={{ flexShrink: 0 }}>
                <span
                  style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: "10px",
                    letterSpacing: "0.06em",
                    padding: "5px 12px",
                    borderRadius: "100px",
                    border: `1px solid ${ing.color}50`,
                    color: ing.color,
                    whiteSpace: "nowrap",
                  }}
                >
                  {ing.outcome}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Certs */}
        <div
          className="reveal"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "36px",
            paddingTop: "32px",
            borderTop: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {[
            "✓ FSSAI Approved",
            "✓ No Artificial Colors",
            "✓ Gluten Free",
            "✓ Vegan",
            "✓ Lab Tested",
          ].map((c) => (
            <span
              key={c}
              style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: "11px",
                color: "rgba(255,255,255,0.4)",
                background: "rgba(255,255,255,0.05)",
                padding: "7px 14px",
                borderRadius: "100px",
                border: "1px solid rgba(255,255,255,0.08)",
                letterSpacing: "0.06em",
              }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

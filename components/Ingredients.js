"use client";
import { useReveal } from "./useReveal";

const ingredients = [
  {
    name: "Live Probiotics",
    strain: "Lactobacillus acidophilus",
    benefit: "Restores gut microbiome balance",
    emoji: "🦠",
    color: "#4A7A3A",
  },
  {
    name: "Electrolytes",
    strain: "Sodium, Potassium, Magnesium",
    benefit: "Rapid cellular rehydration",
    emoji: "⚡",
    color: "#B07040",
  },
  {
    name: "Tulsi Extract",
    strain: "Ocimum tenuiflorum",
    benefit: "Adaptogenic stress relief",
    emoji: "🌿",
    color: "#4A7A3A",
  },
  {
    name: "Kokum",
    strain: "Garcinia indica",
    benefit: "Natural digestive enzyme booster",
    emoji: "🫐",
    color: "#6B35B0",
  },
  {
    name: "Ginger Root",
    strain: "Zingiber officinale",
    benefit: "Reduces nausea & inflammation",
    emoji: "🫚",
    color: "#B07040",
  },
  {
    name: "Jeera",
    strain: "Cuminum cyminum",
    benefit: "Stimulates digestive enzymes",
    emoji: "🌾",
    color: "#4A7A3A",
  },
];

export default function Ingredients() {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      style={{
        background: "#1A1A18",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Big ghost word */}
      <div
        style={{
          position: "absolute",
          bottom: "-40px",
          left: "-20px",
          fontFamily: "serif",
          fontSize: "clamp(100px,18vw,240px)",
          fontWeight: 900,
          color: "rgba(255,255,255,0.025)",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        PURE
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginBottom: "56px",
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
            What&apos;s Inside
          </span>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(2.4rem,5vw,4rem)",
              fontWeight: 300,
              color: "#FAF8F4",
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              margin: 0,
            }}
          >
            Every ingredient
            <br />
            <em style={{ fontStyle: "italic", color: "#8AAB7E" }}>
              earns its place.
            </em>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "12px",
          }}
        >
          {ingredients.map((ing, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 3) + 1}`}
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "center",
                padding: "20px 24px",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                transition: "all 0.3s ease",
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
              <div>
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
                    fontFamily: "'DM Mono',monospace",
                    fontSize: "10px",
                    color: "rgba(255,255,255,0.3)",
                    margin: "0 0 4px",
                    letterSpacing: "0.04em",
                  }}
                >
                  {ing.strain}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: "12px",
                    color: ing.color,
                    margin: 0,
                  }}
                >
                  {ing.benefit}
                </p>
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
            justifyContent: "center",
            gap: "12px",
            marginTop: "48px",
            paddingTop: "40px",
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
                padding: "8px 16px",
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

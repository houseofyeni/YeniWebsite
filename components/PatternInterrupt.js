"use client";
import { useReveal } from "./useReveal";

export default function PatternInterrupt() {
  const ref = useReveal();
  return (
    <section ref={ref} style={{ background: "#F5F2ED", padding: "72px 0" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "0 20px" }}>
        {/* Eyebrow */}
        <span
          className="reveal"
          style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: "11px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#B07040",
            display: "block",
            marginBottom: "20px",
          }}
        >
          Before You Blame Yourself
        </span>

        {/* Headline */}
        <h2
          className="reveal"
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "clamp(1.8rem,4vw,3rem)",
            fontWeight: 300,
            color: "#1A1A18",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            marginBottom: "28px",
          }}
        >
          Why Nothing Has Worked
          <br />
          <em style={{ fontStyle: "italic", color: "#4A7A3A" }}>
            For You (Until Now)
          </em>
        </h2>

        {/* Body — stacked punchy lines */}
        <div
          className="reveal reveal-delay-1"
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          {[
            {
              bullet: "01",
              text: "You're not lazy. You know jeera water helps. You've tried it.",
            },
            {
              bullet: "02",
              text: "The problem was never the remedy — it was the routine.",
            },
            {
              bullet: "03",
              text: "Boiling water. Measuring spices. Drinking something warm at 7am. Too many steps for a daily habit.",
            },
            {
              bullet: "04",
              text: "Inconsistency isn't a you problem. It's a product problem. Yeni removes the friction.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}
            >
              <span
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "10px",
                  color: "#8AAB7E",
                  flexShrink: 0,
                  marginTop: "4px",
                  letterSpacing: "0.08em",
                }}
              >
                {item.bullet}
              </span>
              <p
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: "16px",
                  color: i === 3 ? "#1A1A18" : "#5A534A",
                  lineHeight: 1.65,
                  margin: 0,
                  fontWeight: i === 3 ? 500 : 400,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="reveal"
          style={{
            marginTop: "36px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "linear-gradient(90deg, #4A7A3A30, transparent)",
            }}
          />
          <span
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "10px",
              color: "#4A7A3A",
              letterSpacing: "0.12em",
              whiteSpace: "nowrap",
            }}
          >
            THE YENI WAY →
          </span>
        </div>
      </div>
    </section>
  );
}

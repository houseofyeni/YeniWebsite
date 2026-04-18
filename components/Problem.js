"use client";
import { useReveal } from "./useReveal";

const problems = [
  {
    icon: "🥤",
    title: "Sugary drinks, no real benefits",
    desc: "Most hydration drinks are loaded with sugar, artificial colours, and empty calories — leaving your gut worse off than before.",
  },
  {
    icon: "🌀",
    title: "Gut health is complicated",
    desc: "Probiotics, prebiotics, fibre — it's overwhelming. Most people give up before seeing results, simply because the routine is too hard.",
  },
  {
    icon: "📦",
    title: "Inconvenient formats",
    desc: "Bulky bottles, refrigerated yoghurts, hard-to-swallow pills. Life is fast. Your gut health solution should be faster.",
  },
];

export default function Problem() {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      style={{
        background: "#FAF8F4",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        {/* Two col layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="grid grid-cols-1 md:grid-cols-2"
        >
          {/* Left */}
          <div className="reveal">
            <span
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
              The Problem
            </span>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "clamp(2.4rem,5vw,4rem)",
                fontWeight: 300,
                color: "#1A1A18",
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
                marginBottom: "24px",
              }}
            >
              Your gut deserves
              <br />
              better than{" "}
              <em style={{ fontStyle: "italic", color: "#B07040" }}>this.</em>
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: "16px",
                color: "#5A534A",
                lineHeight: 1.75,
                marginBottom: "36px",
              }}
            >
              Most gut health solutions are either ineffective, inconvenient, or
              taste terrible. Yeni was built to fix all three.
            </p>
            {/* Bridge arrow */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  flex: 1,
                  height: "1px",
                  background: "linear-gradient(90deg, #C8D7C0, transparent)",
                }}
              />
              <span
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "10px",
                  color: "#8AAB7E",
                  letterSpacing: "0.1em",
                  whiteSpace: "nowrap",
                }}
              >
                ENTER YENI →
              </span>
            </div>
          </div>

          {/* Right — problem cards stacked */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {problems.map((p, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1}`}
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "24px",
                  border: "1px solid #F0EDE8",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#C8956E30";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#F0EDE8";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <span
                  style={{ fontSize: "24px", flexShrink: 0, marginTop: "2px" }}
                >
                  {p.icon}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond',serif",
                      fontSize: "1.25rem",
                      fontWeight: 500,
                      color: "#1A1A18",
                      marginBottom: "6px",
                      lineHeight: 1.2,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans',sans-serif",
                      fontSize: "13px",
                      color: "#5A534A",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useReveal } from "./useReveal";

const steps = [
  {
    num: "01",
    action: "Tear",
    icon: "✂️",
    desc: "Anytime from 4–11 PM, grab a Yeni sachet. One pull on the easy-tear notch — works one-handed, on the couch, in the dark.",
    color: "#4A7A3A",
    bg: "#E6F0DC",
  },
  {
    num: "02",
    action: "Mix",
    icon: "💧",
    desc: "Pour into 200ml water. Watch the colour bloom. Stir for 10 seconds. That's your evening ritual beginning.",
    color: "#B07040",
    bg: "#F5EAE0",
  },
  {
    num: "03",
    action: "Sip",
    icon: "🌙",
    desc: "Sip slowly while you wind down. Probiotics + adaptogens work overnight. Wake up lighter, less bloated, more you.",
    color: "#6B35B0",
    bg: "#EBE0F5",
  },
];

export default function HowItWorks() {
  const ref = useReveal();
  return (
    <section
      id="how-it-works"
      ref={ref}
      style={{
        background: "#F5F2ED",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{ textAlign: "center", marginBottom: "72px" }}
          className="reveal"
        >
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
            How It Works
          </span>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(2.4rem,5vw,4rem)",
              fontWeight: 300,
              color: "#1A1A18",
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              margin: 0,
            }}
          >
            Three steps to your
            <br />
            <em style={{ fontStyle: "italic", color: "#4A7A3A" }}>
              happiest gut.
            </em>
          </h2>
        </div>

        {/* Steps — large horizontal layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "24px",
          }}
        >
          {steps.map((s, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1}`}
              style={{ position: "relative" }}
            >
              {/* Connector line */}
              {i < 2 && (
                <div
                  style={{
                    position: "absolute",
                    top: "48px",
                    right: "-12px",
                    width: "24px",
                    height: "1px",
                    background: "linear-gradient(90deg, #C8D7C0, transparent)",
                    zIndex: 2,
                    display: "none",
                  }}
                  className="hidden lg:block"
                />
              )}
              <div
                style={{
                  background: "#fff",
                  borderRadius: "28px",
                  padding: "40px 32px",
                  border: "1px solid rgba(0,0,0,0.05)",
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Step number bg */}
                <span
                  style={{
                    position: "absolute",
                    top: "-16px",
                    right: "20px",
                    fontFamily: "serif",
                    fontSize: "100px",
                    fontWeight: 900,
                    color: `${s.color}06`,
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </span>
                {/* Icon circle */}
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "20px",
                    background: s.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
                    marginBottom: "24px",
                  }}
                >
                  {s.icon}
                </div>
                <span
                  style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: s.color,
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  {s.num}
                </span>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "2rem",
                    fontWeight: 400,
                    color: "#1A1A18",
                    marginBottom: "12px",
                    lineHeight: 1,
                  }}
                >
                  {s.action}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: "14px",
                    color: "#5A534A",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Time callout */}
        <div
          className="reveal"
          style={{ marginTop: "40px", textAlign: "center" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: "#1A1A18",
              borderRadius: "100px",
              padding: "14px 28px",
            }}
          >
            <span style={{ fontSize: "20px" }}>🌙</span>
            <p
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: "14px",
                color: "rgba(255,255,255,0.8)",
                margin: 0,
              }}
            >
              Best between{" "}
              <strong style={{ color: "#8AAB7E" }}>4 PM – 11 PM daily</strong> —
              30 seconds to your best night&apos;s rest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

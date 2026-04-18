"use client";
import { useReveal } from "./useReveal";

const steps = [
  {
    num: "01",
    action: "Tear",
    icon: "✂️",
    desc: "One pull on the notch. No scissors. Works one-handed, on the couch, in the dark.",
    color: "#4A7A3A",
    bg: "#E6F0DC",
  },
  {
    num: "02",
    action: "Mix",
    icon: "💧",
    desc: "Pour into 200ml water. Stir 10 seconds. Watch the colour bloom. That's your reset beginning.",
    color: "#B07040",
    bg: "#F5EAE0",
  },
  {
    num: "03",
    action: "Sip",
    icon: "🌙",
    desc: "Drink slowly. Let the probiotics work overnight. Thirty seconds. That's your entire gut routine.",
    color: "#6B35B0",
    bg: "#EBE0F5",
  },
];

const timeline = [
  { day: "Day 1", result: "Feel lighter within the hour." },
  { day: "Day 5", result: "Bloating visibly down." },
  { day: "Week 2", result: "Digestion becomes clockwork." },
  { day: "Month 1", result: "People notice the difference." },
];

export default function HowItWorks() {
  const ref = useReveal();
  return (
    <section
      id="how-it-works"
      ref={ref}
      style={{ background: "#FAF8F4", padding: "80px 0" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
        {/* Header */}
        <div
          className="reveal"
          style={{ textAlign: "center", marginBottom: "52px" }}
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
              fontSize: "clamp(2rem,5vw,3.5rem)",
              fontWeight: 300,
              color: "#1A1A18",
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
            }}
          >
            Three steps.
            <br />
            <em style={{ fontStyle: "italic", color: "#4A7A3A" }}>
              Thirty seconds.
            </em>
          </h2>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "16px",
            marginBottom: "52px",
          }}
        >
          {steps.map((s, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: "#fff",
                borderRadius: "24px",
                padding: "32px 28px",
                border: "1px solid #F0EDE8",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "-16px",
                  right: "16px",
                  fontFamily: "serif",
                  fontSize: "90px",
                  fontWeight: 900,
                  color: `${s.color}06`,
                  lineHeight: 1,
                }}
              >
                {s.num}
              </span>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "18px",
                  background: s.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "26px",
                  marginBottom: "20px",
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
                  marginBottom: "6px",
                }}
              >
                {s.num}
              </span>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "1.8rem",
                  fontWeight: 400,
                  color: "#1A1A18",
                  marginBottom: "10px",
                  lineHeight: 1,
                }}
              >
                {s.action}
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
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* When to drink */}
        <div
          className="reveal"
          style={{
            background: "#F5F2ED",
            borderRadius: "20px",
            padding: "28px 24px",
            marginBottom: "32px",
          }}
        >
          <p
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#8AAB7E",
              marginBottom: "14px",
            }}
          >
            When to Drink
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {[
              {
                time: "Morning (best)",
                note: "Empty stomach, 20 min before breakfast.",
              },
              {
                time: "After meals",
                note: "Feeling heavy? Have it 30 min after eating.",
              },
              {
                time: "4–11 PM",
                note: "Your gut's golden window. Yeni was built for this.",
              },
            ].map((w, i) => (
              <div key={i} style={{ flex: "1 1 200px" }}>
                <p
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#1A1A18",
                    margin: "0 0 3px",
                  }}
                >
                  {w.time}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: "12px",
                    color: "#5A534A",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {w.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div
          className="reveal grid grid-cols-2 md:grid-cols-4"
          style={{ gap: "10px", marginBottom: "28px" }}
        >
          {timeline.map((t, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: "14px",
                padding: "16px",
                border: "1px solid #F0EDE8",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#8AAB7E",
                  margin: "0 0 6px",
                }}
              >
                {t.day}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#1A1A18",
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                {t.result}
              </p>
            </div>
          ))}
        </div>

        {/* Time callout */}
        <div className="reveal" style={{ textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#1A1A18",
              borderRadius: "100px",
              padding: "12px 24px",
            }}
          >
            <span style={{ fontSize: "18px" }}>🌙</span>
            <p
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: "13px",
                color: "rgba(255,255,255,0.8)",
                margin: 0,
              }}
            >
              Best at{" "}
              <strong style={{ color: "#8AAB7E" }}>4–11 PM daily.</strong> Once
              a day. Every day. That&apos;s the whole system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

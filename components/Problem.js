"use client";
import { useReveal } from "./useReveal";

const problems = [
  {
    icon: "😮‍💨",
    title: "The 3 PM Bloat",
    desc: "Normal lunch. Stomach like a balloon. Jeans feeling tight by 3 PM. Every day.",
  },
  {
    icon: "💊",
    title: "The Antacid Habit",
    desc: "More antacids than actual desserts. The gut needs a fix — not a band-aid.",
  },
  {
    icon: "😴",
    title: "The Afternoon Crash",
    desc: "Not laziness. The gut struggling after a heavy meal. Energy gone by 2 PM.",
  },
  {
    icon: "☕",
    title: "Chai on Empty",
    desc: "Known consequence. Done anyway. Two hours of regret every single morning.",
  },
  {
    icon: "🔄",
    title: "The Broken Loop",
    desc: "Jeera water for 3 days. Then nothing. Repeat. The routine fails — not the person.",
  },
];

export default function Problem() {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      style={{
        background: "#FAF8F4",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
        {/* Header */}
        <div className="reveal" style={{ marginBottom: "48px" }}>
          <span
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#B07040",
              display: "block",
              marginBottom: "14px",
            }}
          >
            Sound Familiar?
          </span>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(2rem,5vw,3.5rem)",
              fontWeight: 300,
              color: "#1A1A18",
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              marginBottom: "16px",
            }}
          >
            Not bad eating habits.
            <br />
            <em style={{ fontStyle: "italic", color: "#B07040" }}>
              Just a gut that can&apos;t keep up.
            </em>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: "16px",
              color: "#5A534A",
              lineHeight: 1.7,
              maxWidth: "480px",
            }}
          >
            Most gut problems aren&apos;t about what goes in. They&apos;re about
            what the gut can&apos;t process fast enough.
          </p>
        </div>

        {/* Problem cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "12px",
          }}
        >
          {problems.map((p, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 3) + 1}`}
              style={{
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
                background: "#fff",
                borderRadius: "18px",
                padding: "20px",
                border: "1px solid #F0EDE8",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#C8956E40";
                e.currentTarget.style.transform = "translateX(4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#F0EDE8";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              <span
                style={{ fontSize: "22px", flexShrink: 0, marginTop: "2px" }}
              >
                {p.icon}
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#1A1A18",
                    marginBottom: "4px",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: "13px",
                    color: "#5A534A",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Solution bridge — redesigned, no arrow */}
        <div
          className="reveal"
          style={{
            marginTop: "44px",
            display: "flex",
            alignItems: "center",
            gap: "0",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, #C8D7C0 60%, transparent)",
            }}
          />
          <div
            style={{
              margin: "0 20px",
              fontFamily: "'DM Mono',monospace",
              fontSize: "10px",
              letterSpacing: "0.14em",
              color: "#FAF8F4",
              background: "#4A7A3A",
              padding: "8px 20px",
              borderRadius: "100px",
              whiteSpace: "nowrap",
            }}
          >
            MEET YENI
          </div>
          <div
            style={{
              flex: 1,
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, #C8D7C0 60%, transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

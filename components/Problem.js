"use client";
import { useReveal } from "./useReveal";

const problems = [
  {
    icon: "😮‍💨",
    title: "The 3 PM Bloat",
    desc: "Normal lunch. Stomach like a balloon. No more unbuttoning your jeans after lunch.",
  },
  {
    icon: "💊",
    title: "The Antacid Habit",
    desc: "You've eaten more antacids than actual desserts. Your gut needs a fix, not a band-aid.",
  },
  {
    icon: "😴",
    title: "The Afternoon Crash",
    desc: "It's not laziness. It's your gut failing you. No more sitting through meetings feeling heavy.",
  },
  {
    icon: "☕",
    title: "Chai on Empty",
    desc: "You know the consequence. You do it anyway. Then you spend two hours paying for it.",
  },
  {
    icon: "🔄",
    title: "The Broken Loop",
    desc: "Jeera water for 3 days. Then nothing. Repeat. The routine didn't fit your life — that's a product problem.",
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
            You&apos;re not eating badly.
            <br />
            <em style={{ fontStyle: "italic", color: "#B07040" }}>
              Your gut just can&apos;t keep up.
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
            Most gut problems aren&apos;t about what you eat. They&apos;re about
            what your gut can&apos;t process fast enough.
          </p>
        </div>

        {/* Problem cards — mobile scroll, desktop grid */}
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
                e.currentTarget.style.borderColor = "#C8956E30";
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

        {/* Bridge */}
        <div
          className="reveal"
          style={{
            marginTop: "40px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
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
              letterSpacing: "0.12em",
              whiteSpace: "nowrap",
            }}
          >
            ENTER YENI →
          </span>
        </div>
      </div>
    </section>
  );
}

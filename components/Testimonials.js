"use client";
import { useReveal } from "./useReveal";

const testimonials = [
  {
    name: "Meghna R.",
    city: "Bangalore",
    avatar: "M",
    color: "#4A7A3A",
    bg: "#E6F0DC",
    text: "Tried jeera water, probiotics, isabgol. Nothing stuck. With Yeni, I've been consistent for 3 weeks. Bloating is down. I haven't taken an antacid in 12 days. That's a first.",
    tag: "Lemon Ginger Tulsi",
    stars: 5,
    signal: "12 days antacid-free",
  },
  {
    name: "Arjun K.",
    city: "Mumbai",
    avatar: "A",
    color: "#B07040",
    bg: "#F5EAE0",
    text: "Was skeptical. Tried Kokum Jeera anyway. By day 4, the post-lunch food coma was gone. I'm more productive in the afternoon than I've been in years.",
    tag: "Kokum + Jeera",
    stars: 5,
    signal: "Results by day 4",
  },
  {
    name: "Priya S.",
    city: "Delhi",
    avatar: "P",
    color: "#6B35B0",
    bg: "#EBE0F5",
    text: "I have PCOS. Bloating is constant. After 10 days on Yeni, I look less puffy and feel less heavy after dinner. I don't fully understand the science but my body does.",
    tag: "Berry Lemonade",
    stars: 5,
    signal: "Noticeable in 10 days",
  },
  {
    name: "Rohan M.",
    city: "Hyderabad",
    avatar: "R",
    color: "#4A7A3A",
    bg: "#E6F0DC",
    text: "I travel every week. Gut routine always breaks. Now I throw 2 sachets in my laptop bag. Had one on the flight last Monday. Felt fine the next morning. That never happens.",
    tag: "All 3 Flavours",
    stars: 5,
    signal: "Works while travelling",
  },
  {
    name: "Nandita T.",
    city: "Pune",
    avatar: "N",
    color: "#B07040",
    bg: "#F5EAE0",
    text: "My mum makes jeera water when I'm home. Yeni tastes better and I've been consistent for 5 weeks. Mum's verdict: better than her jeera water.",
    tag: "Lemon Ginger Tulsi",
    stars: 5,
    signal: "5 weeks consistent",
  },
];

function Stars({ count }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#F59E0B", fontSize: "12px" }}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useReveal();
  return (
    <section
      id="reviews"
      ref={ref}
      style={{
        background: "#0F1409",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
        {/* Header */}
        <div
          className="reveal"
          style={{ textAlign: "center", marginBottom: "48px" }}
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
            Real People. Actual Results.
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
            Real stomachs.
            <br />
            <em style={{ fontStyle: "italic", color: "#8AAB7E" }}>
              Real outcomes.
            </em>
          </h2>
        </div>

        {/* Testimonial grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "12px",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 2) + 1}`}
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: "20px",
                padding: "24px",
                border: "1px solid rgba(255,255,255,0.07)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                e.currentTarget.style.borderColor = `${t.color}40`;
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "14px",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      background: t.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "14px",
                      flexShrink: 0,
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'DM Sans',sans-serif",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#FAF8F4",
                        margin: 0,
                      }}
                    >
                      {t.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "'DM Mono',monospace",
                        fontSize: "10px",
                        color: "rgba(255,255,255,0.35)",
                        margin: 0,
                      }}
                    >
                      {t.city}
                    </p>
                  </div>
                </div>
                <Stars count={t.stars} />
              </div>

              {/* Quote */}
              <p
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  marginBottom: "14px",
                }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Bottom row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: "10px",
                    letterSpacing: "0.08em",
                    padding: "4px 10px",
                    borderRadius: "100px",
                    border: `1px solid ${t.color}50`,
                    color: t.color,
                  }}
                >
                  {t.tag}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: "10px",
                    color: "#8AAB7E",
                    letterSpacing: "0.06em",
                  }}
                >
                  → {t.signal}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust stats */}
        <div
          className="reveal"
          style={{
            marginTop: "52px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: "40px",
          }}
        >
          {[
            { val: "1,200+", label: "On the Waitlist", color: "#8AAB7E" },
            { val: "4.9★", label: "Avg. Rating", color: "#F59E0B" },
            { val: "94%", label: "Would Recommend", color: "#8AAB7E" },
            {
              val: "7 days",
              label: "Average to First Result",
              color: "#C8956E",
            },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                padding: "0 28px",
                borderRight:
                  i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "2.2rem",
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
      </div>
    </section>
  );
}

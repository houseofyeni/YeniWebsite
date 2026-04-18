"use client";
import { useReveal } from "./useReveal";

const testimonials = [
  {
    name: "Priya M.",
    city: "Bangalore",
    avatar: "P",
    color: "#4A7A3A",
    bg: "#E6F0DC",
    text: "I've tried every probiotic out there. Yeni is the first one I've actually stuck to — because it tastes incredible and takes zero effort.",
    tag: "Lemon Ginger Tulsi",
    stars: 5,
  },
  {
    name: "Rahul S.",
    city: "Mumbai",
    avatar: "R",
    color: "#B07040",
    bg: "#F5EAE0",
    text: "The Kokum Jeera tastes like something my mum would make — but with probiotics in it. My digestion has visibly improved in three weeks.",
    tag: "Kokum + Jeera",
    stars: 5,
  },
  {
    name: "Ananya K.",
    city: "Delhi",
    avatar: "A",
    color: "#6B35B0",
    bg: "#EBE0F5",
    text: "Berry Lemonade is dangerously good. Started taking it for gut health but now I just look forward to it every evening. Bloating is almost gone.",
    tag: "Berry Lemonade",
    stars: 5,
  },
  {
    name: "Karthik V.",
    city: "Chennai",
    avatar: "K",
    color: "#4A7A3A",
    bg: "#E6F0DC",
    text: "Game changer for travel. I carry sachets everywhere. No more skipping my gut routine just because I'm not home.",
    tag: "All 3 Flavours",
    stars: 5,
  },
];

function Stars() {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {[...Array(5)].map((_, i) => (
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
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Scattered botanical circles */}
      {[
        { x: "5%", y: "10%", s: 120 },
        { x: "90%", y: "80%", s: 80 },
        { x: "80%", y: "5%", s: 60 },
      ].map((c, i) => (
        <svg
          key={i}
          style={{
            position: "absolute",
            left: c.x,
            top: c.y,
            opacity: 0.04,
            pointerEvents: "none",
          }}
          width={c.s}
          height={c.s}
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="47"
            stroke="#8AAB7E"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="5 3"
          />
        </svg>
      ))}

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "60px",
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
              marginBottom: "16px",
            }}
          >
            Early Reviewers
          </span>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(2.4rem,5vw,4rem)",
              fontWeight: 300,
              color: "#FAF8F4",
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              textAlign: "center",
              margin: 0,
            }}
          >
            Real people.
            <br />
            <em style={{ fontStyle: "italic", color: "#8AAB7E" }}>
              Real guts.
            </em>
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "16px",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 2) + 1}`}
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: "24px",
                padding: "28px",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: t.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "14px",
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'DM Sans',sans-serif",
                        fontSize: "14px",
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
                        fontSize: "11px",
                        color: "rgba(255,255,255,0.35)",
                        margin: 0,
                      }}
                    >
                      {t.city}
                    </p>
                  </div>
                </div>
                <Stars />
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.75,
                  fontStyle: "italic",
                  marginBottom: "16px",
                }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <span
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                  padding: "5px 12px",
                  borderRadius: "100px",
                  border: `1px solid ${t.color}50`,
                  color: t.color,
                }}
              >
                {t.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div
          className="reveal"
          style={{
            marginTop: "56px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: "48px",
          }}
        >
          {[
            { val: "1,200+", label: "On the Waitlist", color: "#8AAB7E" },
            { val: "4.9★", label: "Avg. Rating", color: "#F59E0B" },
            { val: "94%", label: "Would Recommend", color: "#8AAB7E" },
            { val: "3 wks", label: "To Notice Results", color: "#C8956E" },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                padding: "0 36px",
                borderRight:
                  i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "2.4rem",
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

"use client";
import { useState } from "react";
import { useReveal } from "./useReveal";

const flavours = [
  {
    id: 1,
    name: "Lemon + Ginger + Tulsi",
    tagline: "The Wind-Down",
    desc: "Bright lemon, warming ginger, and sacred tulsi — a zingy reset that preps your gut for deep sleep. Inspired by your dadi's kitchen wisdom, upgraded for your evening.",
    notes: ["Citrus Forward", "Warming Finish", "Herbal Depth"],
    emoji: "🍋",
    bg: "#E6F0DC",
    accent: "#4A7A3A",
    dark: "#2E4D24",
    badge: "Bestseller",
    time: "4–7 PM",
    image: "/hero-lemon.png",
  },
  {
    id: 2,
    name: "Kokum + Jeera",
    tagline: "After Dinner",
    desc: "Tangy kokum from the Konkan coast paired with digestive jeera. The classic Indian post-meal ritual — now in a sachet you can take anywhere.",
    notes: ["Tangy & Tart", "Earthy Warmth", "Digestive Boost"],
    emoji: "🌿",
    bg: "#F5EAE0",
    accent: "#B07040",
    dark: "#7A4D2A",
    badge: "Staff Pick",
    time: "7–9 PM",
    image: "/hero-kokum.png",
  },
  {
    id: 3,
    name: "Berry Lemonade",
    tagline: "Evening Sipper",
    desc: "A burst of mixed berries with a lemonade fizz — refreshing, fruity, and universally loved. The one everyone in your house will try to steal.",
    notes: ["Sweet & Bright", "Berry Burst", "Refreshing"],
    emoji: "🫐",
    bg: "#EBE0F5",
    accent: "#6B35B0",
    dark: "#4A2080",
    badge: "New",
    time: "9–11 PM",
    image: "/hero-berry.png",
  },
];

export default function Flavours() {
  const ref = useReveal();
  const [active, setActive] = useState(0);
  const f = flavours[active];

  return (
    <section
      id="flavours"
      ref={ref}
      style={{
        background: "#0F1409",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Big background letter */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          fontFamily: "serif",
          fontSize: "clamp(200px,30vw,400px)",
          fontWeight: 700,
          letterSpacing: "-0.05em",
          color: "rgba(255,255,255,0.02)",
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
        }}
      >
        YENI
      </div>

      {/* Ambient glow behind active */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${f.accent}18 0%, transparent 70%)`,
          filter: "blur(60px)",
          transition: "background 0.7s ease",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div
          className="reveal"
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <span
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: f.accent,
              display: "block",
              marginBottom: "16px",
              transition: "color 0.5s",
            }}
          >
            Three Flavours
          </span>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond',Georgia,serif",
              fontSize: "clamp(2.4rem,5vw,4rem)",
              fontWeight: 300,
              color: "#FAF8F4",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              margin: 0,
            }}
          >
            Find your evening{" "}
            <em
              style={{
                fontStyle: "italic",
                color: f.accent,
                transition: "color 0.5s",
              }}
            >
              ritual
            </em>
            .
          </h2>
        </div>

        {/* Tab selectors */}
        <div
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "48px",
            flexWrap: "wrap",
          }}
        >
          {flavours.map((fl, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                padding: "10px 22px",
                borderRadius: "100px",
                border: `1.5px solid ${active === i ? fl.accent : "rgba(255,255,255,0.12)"}`,
                background: active === i ? fl.accent : "rgba(255,255,255,0.04)",
                color: active === i ? "#FAF8F4" : "rgba(255,255,255,0.5)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: active === i ? `0 4px 20px ${fl.accent}40` : "none",
              }}
            >
              {fl.emoji} {fl.name.split(" + ")[0]}
            </button>
          ))}
        </div>

        {/* Main flavour display */}
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2px",
            borderRadius: "28px",
            overflow: "hidden",
            border: `1px solid ${f.accent}30`,
          }}
        >
          {/* Left: real product image */}
          <div
            style={{
              background: f.bg,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "380px",
              position: "relative",
              overflow: "hidden",
              padding: "24px",
            }}
          >
            {/* Glow behind image */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `radial-gradient(circle at 50% 60%, ${f.bg} 0%, ${f.accent}15 100%)`,
                transition: "background 0.6s ease",
              }}
            />
            <img
              src={f.image}
              alt={f.name}
              style={{
                width: "100%",
                maxWidth: "320px",
                height: "340px",
                objectFit: "cover",
                borderRadius: "20px",
                boxShadow: `0 24px 60px ${f.accent}30, 0 4px 16px rgba(0,0,0,0.1)`,
                position: "relative",
                zIndex: 1,
                transition: "box-shadow 0.5s ease",
              }}
            />
            {/* Top info bar */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                right: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                zIndex: 2,
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: f.dark,
                  background: `${f.bg}cc`,
                  padding: "4px 10px",
                  borderRadius: "100px",
                  backdropFilter: "blur(8px)",
                }}
              >
                {f.tagline} · {f.time}
              </span>
              <span
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                  background: f.accent,
                  color: "#FAF8F4",
                  padding: "5px 12px",
                  borderRadius: "100px",
                }}
              >
                {f.badge}
              </span>
            </div>
          </div>

          {/* Right: info */}
          <div
            style={{
              background: "#161C10",
              padding: "48px 44px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: "16px",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.75,
                marginBottom: "28px",
              }}
            >
              {f.desc}
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "32px",
              }}
            >
              {f.notes.map((n) => (
                <span
                  key={n}
                  style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: "11px",
                    letterSpacing: "0.08em",
                    padding: "6px 14px",
                    borderRadius: "100px",
                    border: `1px solid ${f.accent}50`,
                    color: f.accent,
                  }}
                >
                  {n}
                </span>
              ))}
            </div>
            <div
              style={{
                height: "1px",
                background: "rgba(255,255,255,0.07)",
                marginBottom: "28px",
              }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: `${f.accent}20`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                }}
              >
                🌙
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.4)",
                  margin: 0,
                }}
              >
                Best enjoyed at{" "}
                <strong style={{ color: f.accent }}>{f.time}</strong> daily for
                optimal gut results
              </p>
            </div>
          </div>
        </div>

        <p
          className="reveal"
          style={{
            textAlign: "center",
            fontFamily: "'DM Mono',monospace",
            fontSize: "11px",
            color: "rgba(255,255,255,0.3)",
            marginTop: "28px",
            letterSpacing: "0.08em",
          }}
        >
          Free sample kit includes all 3 flavours — find your favourite.
        </p>
      </div>
    </section>
  );
}

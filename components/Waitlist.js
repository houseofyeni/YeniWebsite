"use client";
import { forwardRef } from "react";
import { KitsUrgencyLine } from "./KitsCounter";

const Waitlist = forwardRef(function Waitlist({ onCtaClick }, ref) {
  return (
    <section
      id="waitlist"
      ref={ref}
      style={{
        background: "#FAF8F4",
        padding: "96px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Big botanical ring */}
      <svg
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          opacity: 0.04,
          pointerEvents: "none",
        }}
        width="700"
        height="700"
        viewBox="0 0 700 700"
      >
        <circle
          cx="350"
          cy="350"
          r="340"
          stroke="#4A7A3A"
          strokeWidth="1"
          fill="none"
          strokeDasharray="12 6"
        />
        <circle
          cx="350"
          cy="350"
          r="250"
          stroke="#4A7A3A"
          strokeWidth="0.5"
          fill="none"
        />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(
          (deg, i) => (
            <ellipse
              key={i}
              cx="350"
              cy="18"
              rx="10"
              ry="24"
              fill="#4A7A3A"
              transform={`rotate(${deg} 350 350)`}
            />
          ),
        )}
      </svg>

      <div
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
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
          Free Samples · Limited to 500 Packs
        </span>

        <h2
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "clamp(2.8rem,6vw,5rem)",
            fontWeight: 300,
            color: "#1A1A18",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: "20px",
          }}
        >
          Your evening ritual
          <br />
          starts{" "}
          <em style={{ fontStyle: "italic", color: "#4A7A3A" }}>tonight.</em>
        </h2>

        <p
          style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: "17px",
            color: "#5A534A",
            lineHeight: 1.7,
            marginBottom: "44px",
            maxWidth: "480px",
            margin: "0 auto 44px",
          }}
        >
          Try all 3 Yeni flavours free — delivered to your door. No payment, no
          commitment. Just your gut feeling about us.
        </p>

        {/* Big CTA */}
        <button
          onClick={onCtaClick}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "18px 40px",
            borderRadius: "100px",
            border: "none",
            cursor: "pointer",
            fontFamily: "'DM Sans',sans-serif",
            fontSize: "16px",
            fontWeight: 600,
            color: "#FAF8F4",
            background: "linear-gradient(135deg, #4A7A3A 0%, #2E4D24 100%)",
            boxShadow: "0 12px 40px rgba(74,122,58,0.35)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow =
              "0 18px 50px rgba(74,122,58,0.45)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 12px 40px rgba(74,122,58,0.35)";
          }}
        >
          <span style={{ fontSize: "20px" }}>🌿</span>
          Claim My Free Sample Kit
          <svg
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>

        <div style={{ marginTop: "20px" }}>
          <KitsUrgencyLine />
        </div>

        {/* Feature pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
            marginTop: "44px",
            paddingTop: "36px",
            borderTop: "1px solid #EDE8E0",
          }}
        >
          {[
            "🍋 All 3 flavours",
            "🚚 Free shipping",
            "💳 No card required",
            "⏱️ Ships in 3–5 days",
          ].map((f) => (
            <span
              key={f}
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: "13px",
                color: "#5A534A",
                background: "#F0EDE8",
                padding: "8px 16px",
                borderRadius: "100px",
              }}
            >
              {f}
            </span>
          ))}
        </div>

        <p
          style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: "10px",
            color: "#C0B8AD",
            marginTop: "20px",
            letterSpacing: "0.06em",
          }}
        >
          No spam · No payment · WhatsApp notification only
        </p>
      </div>
    </section>
  );
});
export default Waitlist;

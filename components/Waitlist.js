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
        padding: "80px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Botanical ring */}
      <svg
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          opacity: 0.04,
          pointerEvents: "none",
        }}
        width="600"
        height="600"
        viewBox="0 0 600 600"
      >
        <circle
          cx="300"
          cy="300"
          r="290"
          stroke="#4A7A3A"
          strokeWidth="1"
          fill="none"
          strokeDasharray="10 6"
        />
        <circle
          cx="300"
          cy="300"
          r="210"
          stroke="#4A7A3A"
          strokeWidth="0.5"
          fill="none"
        />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(
          (deg, i) => (
            <ellipse
              key={i}
              cx="300"
              cy="18"
              rx="8"
              ry="20"
              fill="#4A7A3A"
              transform={`rotate(${deg} 300 300)`}
            />
          ),
        )}
      </svg>

      <div
        style={{
          maxWidth: "600px",
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
            marginBottom: "18px",
          }}
        >
          Free Samples · Limited to 500 Packs
        </span>

        <h2
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "clamp(2.2rem,5vw,4rem)",
            fontWeight: 300,
            color: "#1A1A18",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: "16px",
          }}
        >
          You&apos;ve known something
          <br />
          was off.{" "}
          <em style={{ fontStyle: "italic", color: "#4A7A3A" }}>
            Now do something about it.
          </em>
        </h2>

        <p
          style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: "16px",
            color: "#5A534A",
            lineHeight: 1.7,
            marginBottom: "12px",
            maxWidth: "460px",
            margin: "0 auto 12px",
          }}
        >
          Try all 3 Yeni flavours — completely free. We ship it. You drink it.
          <br />
          <strong style={{ color: "#1A1A18" }}>
            You&apos;ll feel the difference before you expect it.
          </strong>
        </p>

        <p
          style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: "13px",
            color: "#8AAB7E",
            marginBottom: "32px",
          }}
        >
          Indian-made. Clinically formulated. Actually drinkable.
        </p>

        {/* Big CTA */}
        <button
          onClick={onCtaClick}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "16px 36px",
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
            width: "100%",
            maxWidth: "400px",
            justifyContent: "center",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 18px 50px rgba(74,122,58,0.45)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 12px 40px rgba(74,122,58,0.35)";
          }}
        >
          <span style={{ fontSize: "18px" }}>🌿</span>
          My Gut Needs This — Send My Free Kit
          <svg
            width="16"
            height="16"
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

        {/* Urgency */}
        <div style={{ marginTop: "16px" }}>
          <KitsUrgencyLine />
        </div>

        {/* Trust pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "8px",
            marginTop: "28px",
            paddingTop: "28px",
            borderTop: "1px solid #EDE8E0",
          }}
        >
          {[
            "🍋 All 3 flavours",
            "🚚 Free shipping",
            "💳 No card required",
            "✋ No subscription",
          ].map((f) => (
            <span
              key={f}
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: "12px",
                color: "#5A534A",
                background: "#F0EDE8",
                padding: "7px 14px",
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
            marginTop: "16px",
            letterSpacing: "0.06em",
          }}
        >
          No spam · No commitment · WhatsApp notification only
        </p>
      </div>
    </section>
  );
});

export default Waitlist;

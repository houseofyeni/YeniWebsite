"use client";
import { useState, useEffect, useRef } from "react";
import { KitsPopupPill } from "./KitsCounter";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbxGsEwR8mm7s3-H0SyCVdM5K9lbL80o_YTDxUHdoeEl1dsflQtF-BPkC3kVZb6063VC/exec";

function sendToSheet(payload) {
  try {
    navigator.sendBeacon(
      GOOGLE_SHEET_URL,
      new Blob([JSON.stringify(payload)], { type: "text/plain" }),
    );
  } catch {
    fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(payload),
    }).catch(() => {});
  }
}

export default function SamplePopup({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const [visible, setVisible] = useState(false);
  const inputRef = useRef(null);

  // Animate in/out
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Small delay so CSS transition fires
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setVisible(true)),
      );
      setTimeout(() => inputRef.current?.focus(), 400);
    } else {
      setVisible(false);
      document.body.style.overflow = "";
      // Reset form on close
      setName("");
      setMobile("");
      setStatus("idle");
      setErrorMsg("");
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleClose = () => {
    if (status === "loading") return;
    setVisible(false);
    setTimeout(onClose, 300);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !mobile.trim() || mobile.length < 10) return;

    setStatus("loading");
    setErrorMsg("");

    // Basic client-side validation
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobile.trim())) {
      setStatus("error");
      setErrorMsg("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    try {
      // Send directly to Google Sheets from browser
      sendToSheet({
        name: name.trim(),
        mobile: mobile.trim(),
        timestamp: new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
        }),
        source: "Yeni Landing Page",
      });

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @keyframes popupSlideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes popupShake {
          0%, 100% { transform: translateX(0); }
          20%       { transform: translateX(-6px); }
          40%       { transform: translateX(6px); }
          60%       { transform: translateX(-4px); }
          80%       { transform: translateX(4px); }
        }
        @keyframes popupPing {
          0%   { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes popupBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-6px); }
        }
        .shake { animation: popupShake 0.4s ease; }
      `}</style>

      {/* Backdrop */}
      <div
        onClick={handleClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1000,
          background: "rgba(26,26,24,0.75)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          transition: "opacity 0.3s ease",
          opacity: visible ? 1 : 0,
        }}
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Get Free Samples"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1001,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            background: "#FAF8F4",
            borderRadius: "24px",
            width: "100%",
            maxWidth: "480px",
            maxHeight: "90vh",
            overflowY: "auto",
            pointerEvents: "all",
            boxShadow:
              "0 32px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.08)",
            animation: visible
              ? "popupSlideUp 0.4s cubic-bezier(0.22,1,0.36,1) forwards"
              : "none",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.3s ease",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Top dusk bar */}
          <div
            style={{
              height: "4px",
              background: "linear-gradient(90deg, #8AAB7E, #C8956E, #7C3AED)",
            }}
          />

          {/* Close button */}
          <button
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: "#F2F0EC",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#4A453E",
              fontSize: "18px",
              lineHeight: 1,
              transition: "background 0.2s",
              zIndex: 10,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#E4EBE0")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#F2F0EC")}
            aria-label="Close"
          >
            ×
          </button>

          {status === "success" ? (
            <SuccessState onClose={handleClose} name={name} />
          ) : (
            <FormState
              name={name}
              setName={setName}
              mobile={mobile}
              setMobile={setMobile}
              status={status}
              errorMsg={errorMsg}
              setStatus={setStatus}
              handleSubmit={handleSubmit}
              inputRef={inputRef}
            />
          )}
        </div>
      </div>
    </>
  );
}

/* ─── Form state ─────────────────────────────────────────── */
function FormState({
  name,
  setName,
  mobile,
  setMobile,
  status,
  errorMsg,
  setStatus,
  handleSubmit,
  inputRef,
}) {
  const [inputFocused, setInputFocused] = useState(false);
  const [nameFocused, setNameFocused] = useState(false);

  return (
    <div style={{ padding: "28px 28px 32px" }}>
      <div style={{ marginBottom: "20px" }}>
        <KitsPopupPill />
      </div>

      {/* Headline */}
      <h2
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(1.8rem, 5vw, 2.4rem)",
          fontWeight: 300,
          lineHeight: 1.1,
          color: "#1A1A18",
          marginBottom: "8px",
          letterSpacing: "-0.02em",
        }}
      >
        Try Yeni — completely{" "}
        <em style={{ fontStyle: "italic", color: "#5A7A50" }}>free.</em>
      </h2>

      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "14px",
          color: "#4A453E",
          lineHeight: 1.6,
          marginBottom: "20px",
        }}
      >
        Get all 3 flavours delivered to your door. Zero payment, zero commitment
        — just your honest gut feeling about Yeni.
      </p>

      {/* What you get */}
      <div
        style={{
          background: "#F2F5F0",
          borderRadius: "16px",
          padding: "14px 16px",
          marginBottom: "20px",
          border: "1px solid #E4EBE0",
        }}
      >
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "10px",
            color: "#5A7A50",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          What's in your free kit
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            { emoji: "🍋", label: "Lemon + Ginger + Tulsi sachet" },
            { emoji: "🌿", label: "Kokum + Jeera sachet" },
            { emoji: "🫐", label: "Berry Lemonade sachet" },
            { emoji: "🚚", label: "Free shipping, no card needed" },
          ].map((item) => (
            <div
              key={item.label}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <span style={{ fontSize: "16px" }}>{item.emoji}</span>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  color: "#2E4028",
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Name input */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: `2px solid ${nameFocused ? "#8AAB7E" : "#E4EBE0"}`,
            borderRadius: "100px",
            overflow: "hidden",
            background: "#fff",
            transition: "border-color 0.2s, box-shadow 0.2s",
            boxShadow: nameFocused
              ? "0 0 0 4px rgba(138,171,126,0.15)"
              : "none",
            marginBottom: "10px",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              color: "#9CA3AF",
              padding: "0 0 0 18px",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            👤
          </span>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            onFocus={() => setNameFocused(true)}
            onBlur={() => setNameFocused(false)}
            placeholder="Your name"
            required
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              padding: "14px 12px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              color: "#1A1A18",
              background: "transparent",
            }}
          />
        </div>

        {/* Mobile input */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: `2px solid ${inputFocused ? "#8AAB7E" : errorMsg ? "#EF4444" : "#E4EBE0"}`,
            borderRadius: "100px",
            overflow: "hidden",
            background: "#fff",
            transition: "border-color 0.2s, box-shadow 0.2s",
            boxShadow: inputFocused
              ? "0 0 0 4px rgba(138,171,126,0.15)"
              : "none",
            marginBottom: "10px",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              color: "#9CA3AF",
              padding: "0 0 0 18px",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            🇮🇳 +91
          </span>
          <input
            ref={inputRef}
            type="tel"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={10}
            value={mobile}
            onChange={(e) => {
              const v = e.target.value.replace(/\D/g, "");
              setMobile(v);
              if (status !== "idle") setStatus("idle");
            }}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            placeholder="Enter your mobile number"
            required
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              padding: "14px 12px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              color: "#1A1A18",
              background: "transparent",
              letterSpacing: mobile.length > 0 ? "0.05em" : "0",
            }}
          />
        </div>

        {/* Error */}
        {errorMsg && (
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px",
              color: "#EF4444",
              marginBottom: "10px",
              paddingLeft: "4px",
            }}
          >
            ⚠️ {errorMsg}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={
            status === "loading" || mobile.length < 10 || name.trim().length < 2
          }
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "100px",
            border: "none",
            background: mobile.length === 10 ? "#1A1A18" : "#C8D7C0",
            color: mobile.length === 10 ? "#FAF8F4" : "#8AAB7E",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "15px",
            fontWeight: 500,
            cursor: mobile.length < 10 ? "not-allowed" : "pointer",
            transition: "all 0.25s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
          onMouseEnter={(e) => {
            if (mobile.length === 10)
              e.currentTarget.style.background = "#2E4028";
          }}
          onMouseLeave={(e) => {
            if (mobile.length === 10)
              e.currentTarget.style.background = "#1A1A18";
          }}
        >
          {status === "loading" ? (
            <>
              <svg
                style={{
                  width: "16px",
                  height: "16px",
                  animation: "spin 1s linear infinite",
                }}
                fill="none"
                viewBox="0 0 24 24"
              >
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                <circle
                  style={{ opacity: 0.25 }}
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  style={{ opacity: 0.75 }}
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Claiming your kit…
            </>
          ) : (
            <>🌿 Claim My Free Sample Kit</>
          )}
        </button>
      </form>

      {/* Social proof bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          marginTop: "16px",
          paddingTop: "16px",
          borderTop: "1px solid #E4EBE0",
        }}
      >
        {/* Avatars */}
        <div style={{ display: "flex" }}>
          {["#8AAB7E", "#C8956E", "#5A7A50", "#7C3AED"].map((c, i) => (
            <div
              key={i}
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: c,
                border: "2px solid #FAF8F4",
                marginLeft: i > 0 ? "-6px" : 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "9px",
                color: "#fff",
                fontWeight: 600,
              }}
            >
              {["P", "M", "R", "A"][i]}
            </div>
          ))}
        </div>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "12px",
            color: "#4A453E",
          }}
        >
          <strong style={{ color: "#1A1A18" }}>1,200+ people</strong> already
          claimed — grab yours before they're gone
        </p>
      </div>

      <p
        style={{
          textAlign: "center",
          marginTop: "10px",
          fontFamily: "'DM Mono', monospace",
          fontSize: "10px",
          color: "#9CA3AF",
          letterSpacing: "0.06em",
        }}
      >
        No spam · No payment · WhatsApp notification only
      </p>
    </div>
  );
}

/* ─── Success state ──────────────────────────────────────── */
function SuccessState({ onClose, name }) {
  return (
    <div style={{ padding: "40px 28px 36px", textAlign: "center" }}>
      {/* Bouncing emoji */}
      <div
        style={{
          fontSize: "52px",
          marginBottom: "16px",
          display: "inline-block",
          animation: "popupBounce 1s ease-in-out infinite",
        }}
      >
        🚀
      </div>

      <h2
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "2rem",
          fontWeight: 300,
          color: "#1A1A18",
          marginBottom: "8px",
          letterSpacing: "-0.02em",
        }}
      >
        You&apos;re on the list{name ? `, ${name.split(" ")[0]}` : ""}!
      </h2>

      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "14px",
          color: "#4A453E",
          lineHeight: 1.6,
          marginBottom: "24px",
          maxWidth: "300px",
          margin: "0 auto 24px",
        }}
      >
        Your free sample kit is reserved. We&apos;ll WhatsApp you as soon as
        it&apos;s ready to ship. 🌿
      </p>

      {/* What happens next */}
      <div
        style={{
          background: "#F2F5F0",
          borderRadius: "16px",
          padding: "16px",
          marginBottom: "24px",
          border: "1px solid #E4EBE0",
          textAlign: "left",
        }}
      >
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "10px",
            color: "#5A7A50",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          What happens next
        </p>
        {[
          "We pack your 3-flavour sample kit",
          "You get a WhatsApp with tracking",
          "Sip, feel the difference, share feedback",
        ].map((step, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              marginBottom: "8px",
            }}
          >
            <span
              style={{
                flexShrink: 0,
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background: "#5A7A50",
                color: "#fff",
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {i + 1}
            </span>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                color: "#2E4028",
                lineHeight: 1.4,
              }}
            >
              {step}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={onClose}
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: "100px",
          border: "2px solid #E4EBE0",
          background: "transparent",
          cursor: "pointer",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "14px",
          color: "#4A453E",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "#8AAB7E";
          e.currentTarget.style.color = "#1A1A18";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "#E4EBE0";
          e.currentTarget.style.color = "#4A453E";
        }}
      >
        Back to the site
      </button>
    </div>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";
import { useKitsCount } from "./useKitsCount";

/* ── Animated flip number ─────────────────────────────────── */
function FlipNumber({ value }) {
  const [displayed, setDisplayed] = useState(value);
  const [phase, setPhase] = useState("idle"); // idle | exit | enter
  const prev = useRef(value);

  useEffect(() => {
    if (value === prev.current) return;
    // Exit
    setPhase("exit");
    const t1 = setTimeout(() => {
      setDisplayed(value);
      setPhase("enter");
      prev.current = value;
    }, 180);
    const t2 = setTimeout(() => setPhase("idle"), 360);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [value]);

  const style = {
    display: "inline-block",
    fontVariantNumeric: "tabular-nums",
    transition: "opacity 0.18s ease, transform 0.18s ease",
    opacity: phase === "exit" ? 0 : 1,
    transform:
      phase === "exit"
        ? "translateY(6px)"
        : phase === "enter"
          ? "translateY(-4px)"
          : "translateY(0)",
  };

  return <span style={style}>{displayed}</span>;
}

/* ── Shared keyframes injected once ──────────────────────── */
const KEYFRAMES = `
  @keyframes kitsPing {
    0%   { transform: scale(1); opacity: 0.6; }
    100% { transform: scale(2.4); opacity: 0; }
  }
  @keyframes kitsRestock {
    0%,100% { opacity: 1; }
    50%     { opacity: 0.4; }
  }
`;

function PulseDot({ color = "#F59E0B", restocking }) {
  return (
    <span
      style={{
        position: "relative",
        display: "inline-flex",
        width: "10px",
        height: "10px",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: restocking ? "#3B82F6" : color,
          animation: "kitsPing 1.5s ease-out infinite",
        }}
      />
      <span
        style={{
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          background: restocking ? "#3B82F6" : color,
          display: "block",
          position: "relative",
          transition: "background 0.4s",
        }}
      />
    </span>
  );
}

/* ── Nav badge ────────────────────────────────────────────── */
export function NavKitsBadge() {
  const { count, restocking } = useKitsCount();

  return (
    <>
      <style>{KEYFRAMES}</style>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          background: restocking
            ? "rgba(219,234,254,0.85)"
            : "rgba(254,243,199,0.85)",
          border: `1px solid ${restocking ? "rgba(59,130,246,0.2)" : "rgba(217,119,6,0.18)"}`,
          borderRadius: "100px",
          padding: "5px 11px",
          transition: "all 0.4s ease",
        }}
      >
        <PulseDot color="#F59E0B" restocking={restocking} />
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "10px",
            color: restocking ? "#1D4ED8" : "#92400E",
            letterSpacing: "0.06em",
            whiteSpace: "nowrap",
            transition: "color 0.4s",
          }}
        >
          {restocking ? (
            "Restocking…"
          ) : (
            <>
              <FlipNumber value={count} /> packs left
            </>
          )}
        </span>
      </div>
    </>
  );
}

/* ── Urgency line (sections) ─────────────────────────────── */
export function KitsUrgencyLine({ dark = false }) {
  const { count, restocking } = useKitsCount();
  const textColor = dark ? "rgba(245,158,11,0.95)" : "#B07040";

  return (
    <>
      <style>{KEYFRAMES}</style>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        <PulseDot color="#F59E0B" restocking={restocking} />
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
            color: restocking ? "#3B82F6" : textColor,
            margin: 0,
            letterSpacing: "0.06em",
            transition: "color 0.4s",
          }}
        >
          {restocking ? (
            "🔄 Restocking — more packs coming…"
          ) : (
            <>
              Only <FlipNumber value={count} /> free packs remaining
            </>
          )}
        </p>
      </div>
    </>
  );
}

/* ── Hero micro badge ────────────────────────────────────── */
export function KitsHeroBadge() {
  const { count, restocking } = useKitsCount();
  return (
    <>
      <style>{KEYFRAMES}</style>
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "11px",
          letterSpacing: "0.06em",
        }}
      >
        {restocking ? (
          "🔄 Restocking packs…"
        ) : (
          <>
            ⚡ <FlipNumber value={count} /> free packs remaining
          </>
        )}
      </span>
    </>
  );
}

/* ── Popup urgency pill ───────────────────────────────────── */
export function KitsPopupPill() {
  const { count, restocking } = useKitsCount();
  return (
    <>
      <style>{KEYFRAMES}</style>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          background: restocking ? "rgba(219,234,254,0.9)" : "#FEF3C7",
          borderRadius: "100px",
          padding: "6px 12px",
          transition: "background 0.4s",
        }}
      >
        <PulseDot color="#F59E0B" restocking={restocking} />
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
            color: restocking ? "#1E40AF" : "#92400E",
            letterSpacing: "0.08em",
            transition: "color 0.4s",
          }}
        >
          {restocking ? (
            "Restocking packs…"
          ) : (
            <>
              Only <FlipNumber value={count} /> free packs left
            </>
          )}
        </span>
      </div>
    </>
  );
}

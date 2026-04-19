"use client";
import { useState, useEffect, useRef } from "react";

const START = 120;
const RESTOCK_MIN = 100;
const RESTOCK_MAX = 130;
const LOW_THRESHOLD = 30;
const TICK_MS = 2_000; // decrement every 2 seconds
const SESSION_KEY = "yeni_packs_v1";

function readSession() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const { count, ts } = JSON.parse(raw);
    // Only reuse if saved within the last 10 minutes
    if (Date.now() - ts < 10 * 60 * 1000) return count;
  } catch {}
  return null;
}

function saveSession(n) {
  try {
    sessionStorage.setItem(
      SESSION_KEY,
      JSON.stringify({ count: n, ts: Date.now() }),
    );
  } catch {}
}

export function useKitsCount() {
  // ⚠️ ALWAYS initialise with START so server + client first render match
  const [count, setCount] = useState(START);
  const [restocking, setRestocking] = useState(false);
  const timerRef = useRef(null);
  const mounted = useRef(false);

  useEffect(() => {
    // After hydration: restore from sessionStorage if available
    const cached = readSession();
    if (cached !== null && cached !== START) {
      setCount(cached);
    }
    mounted.current = true;

    function tick(current) {
      timerRef.current = setTimeout(() => {
        setCount((prev) => {
          if (prev <= LOW_THRESHOLD) {
            // Hit floor — show restock state for 2 s then jump up
            setRestocking(true);
            setTimeout(() => {
              const next =
                RESTOCK_MIN +
                Math.floor(Math.random() * (RESTOCK_MAX - RESTOCK_MIN + 1));
              setCount(next);
              saveSession(next);
              setRestocking(false);
              tick(next);
            }, 2000);
            return prev; // hold display during restock
          }
          // Decrement by a random amount — feels live and urgent
          const drops = [1, 2, 3, 5, 7, 10, 12, 15, 20, 25, 30];
          const drop = drops[Math.floor(Math.random() * drops.length)];
          const next = Math.max(prev - drop, LOW_THRESHOLD);
          saveSession(next);
          tick(next);
          return next;
        });
      }, TICK_MS);
    }

    tick(cached ?? START);

    return () => clearTimeout(timerRef.current);
  }, []); // runs once after first render — no deps needed

  return { count, restocking };
}

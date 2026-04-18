"use client";
import { useEffect, useRef } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxGsEwR8mm7s3-H0SyCVdM5K9lbL80o_YTDxUHdoeEl1dsflQtF-BPkC3kVZb6063VC/exec";

function getSessionId() {
  try {
    let sid = sessionStorage.getItem("yeni_sid");
    if (!sid) {
      sid = "s_" + Math.random().toString(36).slice(2, 10) + "_" + Date.now();
      sessionStorage.setItem("yeni_sid", sid);
    }
    return sid;
  } catch {
    return "unknown";
  }
}

function getDevice() {
  const ua = navigator.userAgent;
  if (/tablet|ipad|playbook|silk/i.test(ua)) return "Tablet";
  if (
    /mobile|iphone|ipod|android|blackberry|opera mini|windows phone/i.test(ua)
  )
    return "Mobile";
  return "Desktop";
}

function getBrowser() {
  const ua = navigator.userAgent;
  if (ua.includes("Chrome") && !ua.includes("Edg")) return "Chrome";
  if (ua.includes("Safari") && !ua.includes("Chrome")) return "Safari";
  if (ua.includes("Firefox")) return "Firefox";
  if (ua.includes("Edg")) return "Edge";
  return "Other";
}

async function getIP() {
  try {
    const res = await fetch("https://api.ipify.org?format=json");
    const d = await res.json();
    return d.ip || "";
  } catch {
    return "";
  }
}

// Google Apps Script requires text/plain for no-cors — JSON is sent as string
// Apps Script parses it fine with JSON.parse(e.postData.contents)
function sendToSheet(payload) {
  try {
    navigator.sendBeacon(
      SCRIPT_URL,
      new Blob([JSON.stringify(payload)], { type: "text/plain" }),
    );
  } catch {
    // Fallback to fetch if sendBeacon not available
    fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(payload),
    }).catch(() => {});
  }
}

export default function Analytics() {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    const sid = getSessionId();
    const device = getDevice();
    const browser = getBrowser();
    const referrer = document.referrer || "direct";
    const screen = `${window.screen.width}x${window.screen.height}`;
    const page = window.location.pathname || "/";
    const start = Date.now();

    // Get IP then log the visit
    getIP().then((ip) => {
      sendToSheet({
        type: "pageview",
        event: "entry",
        sessionId: sid,
        page,
        device,
        browser,
        referrer,
        screen,
        ip,
        timeOnPage: 0,
      });
    });

    return () => {};
  }, []);

  return null;
}

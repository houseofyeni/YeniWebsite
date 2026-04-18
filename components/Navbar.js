"use client";
import { useState, useEffect } from "react";
import { NavKitsBadge } from "./KitsCounter";

export default function Navbar({ onCtaClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Benefits", href: "#benefits" },
    { label: "Flavours", href: "#flavours" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Reviews", href: "#reviews" },
  ];

  return (
    /* Floating pill wrapper */
    <div
      style={{
        position: "fixed",
        top: scrolled ? "10px" : "14px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100% - 28px)",
        maxWidth: "880px",
        zIndex: 1000,
        transition: "top 0.4s cubic-bezier(0.22,1,0.36,1)",
        animation: "navSlideDown 0.65s cubic-bezier(0.22,1,0.36,1) forwards",
      }}
    >
      {/* The glass pill */}
      <header
        className={`glass-pill${scrolled ? " is-scrolled" : ""}`}
        style={{ borderRadius: "100px", padding: "8px 8px 8px 22px" }}
      >
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "6px",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              textDecoration: "none",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="/yeni-logo.jpg"
              alt="Yeni"
              style={{
                height: "36px",
                width: "36px",
                borderRadius: "10px",
                objectFit: "cover",
                display: "block",
              }}
            />
          </a>

          {/* Desktop nav links */}
          <ul
            className="hidden md:flex"
            style={{
              alignItems: "center",
              gap: "2px",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className={`npill-link${activeLink === l.href ? " active" : ""}`}
                  onClick={() => setActiveLink(l.href)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right cluster */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexShrink: 0,
            }}
          >
            <div className="hidden md:flex">
              <NavKitsBadge />
            </div>

            {/* CTA */}
            <button
              className="hidden md:inline-flex items-center"
              onClick={onCtaClick}
              style={{
                gap: "6px",
                padding: "9px 18px",
                borderRadius: "100px",
                border: "none",
                cursor: "pointer",
                fontFamily: "'DM Sans',sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                color: "#FAF8F4",
                background: "linear-gradient(135deg, #5A7A50 0%, #2E4028 100%)",
                boxShadow:
                  "0 4px 14px rgba(46,64,40,0.32), inset 0 1px 0 rgba(255,255,255,0.15)",
                whiteSpace: "nowrap",
                transition: "all 0.28s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 22px rgba(46,64,40,0.42)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 14px rgba(46,64,40,0.32)";
              }}
            >
              🌿 Get Free Samples
            </button>

            {/* Mobile burger — hidden on md+ via Tailwind, display:flex only via className */}
            <button
              className="md:hidden flex flex-col items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.7)",
                background: "rgba(255,255,255,0.55)",
                cursor: "pointer",
                gap: "4px",
                transition: "all 0.2s",
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    width: "15px",
                    height: "1.5px",
                    background: "#1A1A18",
                    borderRadius: "2px",
                    display: "block",
                    transition: "all 0.3s ease",
                    transform: menuOpen
                      ? i === 0
                        ? "rotate(45deg) translate(4px,4px)"
                        : i === 2
                          ? "rotate(-45deg) translate(4px,-4px)"
                          : "scaleX(0)"
                      : "none",
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile dropdown */}
      <div
        style={{
          overflow: "hidden",
          maxHeight: menuOpen ? "360px" : "0",
          opacity: menuOpen ? 1 : 0,
          transition:
            "max-height 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.25s ease",
          marginTop: "8px",
        }}
      >
        <div
          className="mobile-glass-menu"
          style={{ display: "flex", flexDirection: "column", gap: "2px" }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                color: "#4A453E",
                padding: "12px 16px",
                borderRadius: "12px",
                textDecoration: "none",
                transition: "all 0.2s",
                display: "block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(138,171,126,0.12)";
                e.currentTarget.style.color = "#1A1A18";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#4A453E";
              }}
            >
              {l.label}
            </a>
          ))}
          <div
            style={{
              height: "1px",
              background: "rgba(0,0,0,0.07)",
              margin: "6px 0",
            }}
          />
          <button
            onClick={() => {
              setMenuOpen(false);
              onCtaClick();
            }}
            className="ncta"
            style={{
              width: "100%",
              justifyContent: "center",
              borderRadius: "14px",
              padding: "14px 18px",
              fontSize: "14px",
            }}
          >
            🌿 Claim My Free Sample Kit
          </button>
        </div>
      </div>
    </div>
  );
}

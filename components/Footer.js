export default function Footer() {
  return (
    <footer
      style={{
        background: "#0F1409",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "48px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <a
          href="#"
          style={{
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            src="/yeni-logo.jpg"
            alt="Yeni"
            style={{
              height: "32px",
              width: "32px",
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
          <span
            style={{
              fontFamily: "'Cormorant Garamond',Georgia,serif",
              fontSize: "20px",
              fontWeight: 500,
              color: "#FAF8F4",
              letterSpacing: "-0.025em",
            }}
          >
            yeni
          </span>
        </a>
        <div style={{ display: "flex", gap: "32px" }}>
          {["Privacy Policy", "Terms", "Contact Us"].map((l) => (
            <a
              key={l}
              href="#"
              style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: "11px",
                color: "rgba(255,255,255,0.3)",
                textDecoration: "none",
                letterSpacing: "0.06em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.3)")
              }
            >
              {l}
            </a>
          ))}
        </div>
        <p
          style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: "11px",
            color: "rgba(255,255,255,0.2)",
            margin: 0,
            letterSpacing: "0.06em",
          }}
        >
          © {new Date().getFullYear()} Yeni. Made with 🌿 in India.
        </p>
      </div>
    </footer>
  );
}

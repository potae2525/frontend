"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [hovered, setHovered] = useState(null);

  const navStyle = {
    background: "linear-gradient(90deg, #1f2937, #111827, #000000)",
    padding: "24px",
    borderRadius: "24px",
    maxWidth: "900px",
    margin: "40px auto",
    color: "#e5e7eb",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    boxShadow: "0 10px 30px rgba(0, 128, 0, 0.6)",
    textAlign: "center",
  };

  const linkStyle = {
    color: "#9ca3af",
    fontWeight: "600",
    fontSize: "18px",
    margin: "0 20px",
    textDecoration: "none",
    transition: "color 0.3s ease",
  };

  const videoWrapperStyle = {
    position: "relative",
    paddingBottom: "56.25%", // 16:9 ratio
    height: 0,
    maxWidth: "900px",
    margin: "20px auto 0",
    borderRadius: "24px",
    overflow: "hidden",
    boxShadow: "0 10px 40px rgba(34, 197, 94, 0.6)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  };

  const iframeStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "none",
    borderRadius: "24px",
  };

  return (
    <nav style={navStyle}>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          marginBottom: "32px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {[
          { label: "หน้าแรก", href: "/" },
          { label: "บริการ", href: "/service" },
          { label: "ติดต่อ", href: "/contact" },
          { label: "เกี่ยวกับ", href: "/about" },
        ].map(({ label, href }, i) => (
          <li key={href}>
            <Link
              href={href}
              style={{
                ...linkStyle,
                color: hovered === i ? "#22c55e" : linkStyle.color,
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div
        style={videoWrapperStyle}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <iframe
          src="https://www.youtube.com/embed/sZiJWoWAcOw?si=UqmOtI6hwWHTMc8z"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={iframeStyle}
        />
      </div>
    </nav>
  );
}

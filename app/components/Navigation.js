"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow-sm py-3"
      style={{
        background: "linear-gradient(90deg, #0a0a0a, #1a1a1a)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div className="container-fluid">
        {/* โลโก้ */}
        <Link
          href="/potae"
          onClick={closeMenu}
          className="navbar-brand d-flex align-items-center gap-2"
          style={{ textDecoration: "none", color: "#f0f0f0" }}
        >
          <Image
            src="/image/img/op.jpg"
            alt="โลโก้"
            width={50}
            height={50}
            className="rounded-circle shadow-sm"
          />
          <span
            style={{
              fontWeight: "700",
              fontSize: "1.6rem",
              letterSpacing: "0.08em",
              color: "#39a9db", // ฟ้าสปอตร์
              textShadow: "0 0 6px #39a9db",
            }}
          >
            POTAE
          </span>
        </Link>

        {/* ปุ่มแฮมเบอร์เกอร์ */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          style={{ filter: "drop-shadow(0 0 2px #39a9db)" }}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
            {[
              { label: "หน้าแรก", href: "/" },
              { label: "บริการ", href: "/service" },
              { label: "ติดต่อ", href: "/contact" },
              { label: "เกี่ยวกับ", href: "/about" },
            ].map(({ label, href }) => (
              <li className="nav-item" key={href}>
                <Link
                  href={href}
                  className="nav-link text-light px-3 fw-semibold hover-link"
                  onClick={closeMenu}
                  style={{
                    fontSize: "1.1rem",
                    letterSpacing: "0.05em",
                    transition: "color 0.3s ease",
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ค้นหา + ปุ่ม */}
          <div className="d-flex align-items-center gap-3 ms-lg-4 mt-3 mt-lg-0">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 rounded-pill px-4"
                type="search"
                placeholder="ค้นหา"
                aria-label="Search"
                style={{
                  backgroundColor: "#222",
                  border: "1.5px solid #39a9db",
                  color: "#eee",
                  width: "220px",
                  transition: "border-color 0.3s ease",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#1fb6ff")}
                onBlur={(e) => (e.target.style.borderColor = "#39a9db")}
              />
              <button
                className="btn btn-primary rounded-pill px-4"
                type="submit"
                style={{
                  background:
                    "linear-gradient(90deg, #1fb6ff, #005f99)",
                  border: "none",
                  boxShadow: "0 0 8px #1fb6ff",
                  fontWeight: "600",
                  letterSpacing: "0.05em",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                ค้นหา
              </button>
            </form>
            <Link
              href="/login"
              className="btn btn-outline-primary fw-semibold rounded-pill px-4"
              onClick={closeMenu}
              style={{
                borderColor: "#39a9db",
                color: "#39a9db",
                fontWeight: "600",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#39a9db";
                e.currentTarget.style.color = "#000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#39a9db";
              }}
            >
              เข้าสู่ระบบ
            </Link>
            <Link
              href="/apply"
              className="btn btn-primary text-white fw-semibold rounded-pill px-4"
              onClick={closeMenu}
              style={{
                background:
                  "linear-gradient(90deg, #1fb6ff, #005f99)",
                border: "none",
                fontWeight: "600",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              สมัครสมาชิก
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-link:hover {
          color: #1fb6ff !important;
          text-decoration: underline;
          text-shadow: 0 0 6px #1fb6ff;
        }
        .btn-primary:hover {
          filter: brightness(1.1);
        }
        .btn-outline-primary:hover {
          filter: brightness(1.2);
        }
      `}</style>
    </nav>
  );
}

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
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-2"
        style={{
        
        }}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand d-flex align-items-center gap-2 brand-hover"
            href="/"
            onClick={closeMenu}
          >
            <Image
              src="/image/img/op.jpg"
              alt="โลโก้"
              width={44}
              height={44}
              style={{
                objectFit: "cover",
                borderRadius: "50%",
                boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
              }}
            />
            <span className="text-white fw-bold fs-5 mb-0">POTAE</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarSupportedContent"
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" href="/" onClick={closeMenu}>
                  หน้าแรก
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/service" onClick={closeMenu}>
                  บริการ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact" onClick={closeMenu}>
                  ติดต่อ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/adout" onClick={closeMenu}>
                  เกี่ยวกับ
                </Link>
              </li>
            </ul>

            <div className="d-flex align-items-center gap-2">
              <form className="d-flex me-2" role="search">
                <input
                  className="form-control me-2 rounded-pill px-3"
                  type="search"
                  placeholder="ค้นหา"
                  aria-label="Search"
                />
                <button className="btn btn-success rounded-pill px-4" type="submit">
                  ค้นหา
                </button>
              </form>
              <Link
                href="/login"
                className="btn btn-outline-light fw-semibold rounded-pill px-4"
                onClick={closeMenu}
              >
                เข้าสู่ระบบ
              </Link>
              <Link
                href="/apply"
                className="btn btn-light text-dark fw-semibold rounded-pill px-4"
                onClick={closeMenu}
              >
                สมัครสมาชิก
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        nav {
          font-family: 'Kanit', sans-serif;
          font-weight: 400;
          letter-spacing: 0.03em;
          /* background removed from here because now using inline style */
        }

        .navbar-brand {
          font-weight: 600;
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }

        .navbar-brand:hover {
          transform: scale(1.03);
        }

        .nav-link {
          font-weight: 500;
          font-size: 1.1rem;
          transition: color 0.3s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #4ade80;
        }

        .btn-success {
          font-weight: 600;
          font-size: 1rem;
          border-radius: 2rem;
          transition: all 0.3s ease;
          background-color: #4ade80;
          border: none;
          box-shadow: 0 4px 12px rgba(74, 222, 128, 0.4);
        }

        .btn-success:hover {
          background-color: #22c55e;
          color: white;
          transform: scale(1.03);
          box-shadow: 0 6px 18px rgba(34, 197, 94, 0.45);
        }

        input.form-control {
          font-size: 1rem;
          border-radius: 2rem;
          border: 1px solid #ccc;
        }

        .btn-outline-light {
          font-weight: 600;
          border-radius: 2rem;
          transition: all 0.3s ease;
          border: 2px solid white;
        }

        .btn-outline-light:hover {
          background-color: #4ade80;
          color: white;
          border-color: #4ade80;
          transform: scale(1.03);
          box-shadow: 0 4px 12px rgba(74, 222, 128, 0.4);
        }

        .btn-light {
          font-weight: 600;
          border-radius: 2rem;
          transition: all 0.3s ease;
          border: 2px solid #ccc;
        }

        .btn-light:hover {
          background-color: #22c55e;
          color: white;
          border-color: #22c55e;
          transform: scale(1.03);
          box-shadow: 0 4px 12px rgba(34, 197, 94, 0.4);
        }

        .brand-hover:hover {
          opacity: 0.9;
        }
      `}</style>
    </>
  );
}

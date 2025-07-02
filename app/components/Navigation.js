"use client"
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/" onClick={closeMenu}>
            Potae2525
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
                <Link className="nav-link active" aria-current="page" href="/" onClick={closeMenu}>
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
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="ค้นหา"
                aria-label="Search"
              />
              <button className="btn btn-success" type="submit">
                ค้นหา
              </button>
            </form>
          </div>
        </div>
      </nav>

      <style jsx>{`
        nav {
          font-family: 'Kanit', sans-serif;
          font-weight: 400;
          letter-spacing: 0.03em;
        }

        .navbar-brand {
          font-weight: 600;
          font-size: 1.5rem;
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
          padding: 0.4rem 1.2rem;
          border-radius: 0.4rem;
          transition: background-color 0.3s ease;
        }

        .btn-success:hover {
          background-color: #22c55e;
          color: white;
        }

        input.form-control {
          font-size: 1rem;
        }
      `}</style>
    </>
  );
}

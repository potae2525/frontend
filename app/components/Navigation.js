"use client"
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  // State สำหรับการจัดการเปิดปิดเมนู
  const [isOpen, setIsOpen] = useState(false);

  // ฟังก์ชันเพื่อ toggle เมนู
  const toggleMenu = () => setIsOpen(!isOpen);

  // ฟังก์ชันที่เรียกเมื่อเปลี่ยนหน้าแล้วปิดเมนู
  const closeMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#" onClick={closeMenu}>Potae2525</Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu} // เปิดปิดเมนู
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen ? "true" : "false"} // เช็คสถานะเมนู
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#" onClick={closeMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#" onClick={closeMenu}>Link</Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="#" onClick={closeMenu}>Action</Link></li>
                <li><Link className="dropdown-item" href="#" onClick={closeMenu}>Another action</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" href="#" onClick={closeMenu}>Something else here</Link></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState(null);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    setToken(localStorage.getItem('token'));
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => { if (isOpen) setIsOpen(false); };

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: 'คุณแน่ใจไหม?',
      text: "ต้องการออกจากระบบจริงหรือไม่?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#e53935',
      cancelButtonColor: '#1976d2',
      confirmButtonText: 'ใช่, ออกจากระบบ!',
      cancelButtonText: 'ยกเลิก',
    });

    if (result.isConfirmed) {
      localStorage.removeItem('token');
      setToken(null);
      router.push('/login');
      Swal.fire('ออกจากระบบแล้ว!', '', 'success');
    }
  };

  if (!mounted) return null;

  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm py-3"
      style={{
        background: "linear-gradient(90deg, #0a0a0a, #1a1a1a)",
        fontFamily: "'Poppins', 'Segoe UI', 'Tahoma', sans-serif"
      }}
    >
      <div className="container-fluid">
        {/* Logo */}
        <Link href="/potae" onClick={closeMenu} className="navbar-brand d-flex align-items-center gap-2">
          <Image src="/image/img/op.jpg" alt="โลโก้" width={50} height={50} className="rounded-circle shadow-sm" />
          <span style={{
            fontWeight: "700",
            fontSize: "1.8rem",
            letterSpacing: "0.1em",
            color: "#39a9db",
            textShadow: "0 0 8px #39a9db"
          }}>POTAE</span>
        </Link>

        {/* Hamburger */}
        <button className="navbar-toggler border-0" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          {/* Menu Items */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
            {[
              { label: "หน้าแรก", href: "/" },
              { label: "บริการ", href: "/service" },
              { label: "ติดต่อ", href: "/contact" },
              { label: "เกี่ยวกับ", href: "/adout" }
            ].map(({ label, href }) => (
              <li className="nav-item" key={href}>
                <Link
                  href={href}
                  className="nav-link text-light px-3 fw-semibold hover-link"
                  onClick={closeMenu}
                  style={{ fontSize: "1.1rem", letterSpacing: "0.05em" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="d-flex align-items-center gap-3 ms-lg-4 mt-3 mt-lg-0">
            {!token && (
              <>
                <Link
                  href="/login"
                  className="btn btn-outline-light fw-semibold rounded-pill px-4"
                  style={{
                    borderColor: "#39a9db",
                    color: "#39a9db",
                    fontWeight: "600",
                    fontSize: "1rem",
                    transition: "all 0.3s ease"
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
                  className="btn btn-outline-light fw-semibold rounded-pill px-4"
                  style={{
                    borderColor: "#39a9db",
                    color: "#39a9db",
                    fontWeight: "600",
                    fontSize: "1rem",
                    transition: "all 0.3s ease"
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
                  สมัครสมาชิก
                </Link>
              </>
            )}

            {token && (
              <button
                onClick={handleLogout}
                className="btn fw-semibold rounded-pill px-4"
                style={{
                  background: "linear-gradient(90deg, #e53935, #ff6b6b)",
                  border: "none",
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: "1rem",
                  boxShadow: "0 0 12px rgba(229,57,53,0.5)",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(229,57,53,0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 0 12px rgba(229,57,53,0.5)";
                }}
              >
                ออกจากระบบ
              </button>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-link:hover {
          color: #1fb6ff !important;
          text-shadow: 0 0 8px #1fb6ff;
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
}

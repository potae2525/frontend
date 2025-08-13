"use client";
import Link from "next/link";
import {
  FaHome,
  FaStar,
  FaTags,
  FaQuestionCircle,
  FaInfoCircle,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #0d1b2a 0%, #000814 100%)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
      className="text-white"
    >
      <footer className="py-5">
        <div className="container">
          <div className="row gy-4">
            {/* หมวด 1 */}
            <div className="col-6 col-md-2">
              <h5
                className="text-uppercase mb-3 fw-bold"
                style={{ color: "#0d6efd" }}
              >
                เมนูหลัก
              </h5>
              <ul className="nav flex-column gap-2">
                {[
                  { icon: <FaHome />, label: "หน้าแรก", href: "/" },
                  { icon: <FaStar />, label: "ติดต่อ", href: "/contact" },
                  { icon: <FaInfoCircle />, label: "เกี่ยวกับเรา", href: "/adout" },
                ].map(({ icon, label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="nav-link p-0 d-flex align-items-center gap-2 footer-link"
                      style={{
                        color: "#eee",
                        fontWeight: 600,
                        fontSize: "1rem",
                      }}
                    >
                      {icon} {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* หมวด 2 */}
            <div className="col-6 col-md-2">
              <h5
                className="text-uppercase mb-3 fw-bold"
                style={{ color: "#0d6efd" }}
              >
                บริการ
              </h5>
              <ul className="nav flex-column gap-2">
                {[
                  { label: "บริการ ", href: "/service" },
                
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="nav-link p-0 footer-link"
                      style={{
                        color: "#eee",
                        fontWeight: 600,
                        fontSize: "1rem",
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* หมวด 3 */}
            <div className="col-6 col-md-2">
              <h5
                className="text-uppercase mb-3 fw-bold"
                style={{ color: "#0d6efd" }}
              >
                นโยบาย
              </h5>
              <ul className="nav flex-column gap-2">
                {[
                  { label: "นโยบายความเป็นส่วนตัว", href: "/policy/privacy" },
                  { label: "ข้อกำหนดการใช้งาน", href: "/policy/terms" },
                  { label: "การคืนเงิน", href: "/policy/refund" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="nav-link p-0 footer-link"
                      style={{
                        color: "#eee",
                        fontWeight: 600,
                        fontSize: "1rem",
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* สมัครรับข่าวสาร */}
            <div className="col-md-5 offset-md-1">
              <form>
                <h5
                  className="text-uppercase mb-3 fw-bold"
                  style={{ color: "#0d6efd" }}
                >
                  สมัครรับจดหมายข่าว
                </h5>
                <p style={{ color: "#ccc" }}>
                  รับข่าวสารและข้อเสนอพิเศษล่าสุดจากเรา
                </p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <input
                    id="newsletter1"
                    type="email"
                    className="form-control rounded-pill"
                    placeholder="กรอกอีเมลของคุณ"
                    style={{
                      backgroundColor: "#001f3f",
                      border: "1.5px solid #0d6efd",
                      color: "#fff",
                      transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#66b2ff";
                      e.target.style.boxShadow = "0 0 8px #66b2ff";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#0d6efd";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                  <button
                    className="btn rounded-pill fw-bold px-4"
                    type="button"
                    style={{
                      background: "linear-gradient(90deg, #0d6efd, #004085)",
                      color: "#fff",
                      boxShadow: "0 0 8px #0d6efd",
                      border: "none",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  >
                    สมัคร
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* ด้านล่างฟุตเตอร์ */}
          <div
            className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top border-light"
            style={{ color: "#ccc" }}
          >
            <p className="mb-0">© 2025 บริษัทของคุณ สงวนลิขสิทธิ์</p>
            <ul className="list-unstyled d-flex gap-3 fs-4 mb-0">
              <li>
                <Link
                  className="footer-link"
                  href="https://instagram.com/yourcompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{ color: "#eee", transition: "color 0.3s ease" }}
                >
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link
                  className="footer-link"
                  href="https://facebook.com/yourcompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  style={{ color: "#eee", transition: "color 0.3s ease" }}
                >
                  <FaFacebook />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* CSS inline สำหรับ hover effect */}
      <style jsx>{`
        .footer-link {
          transition: color 0.3s ease, transform 0.2s ease;
          cursor: pointer;
        }
        .footer-link:hover {
          color: #66b2ff !important;
          transform: translateX(4px);
          text-decoration: none;
        }
        .btn:hover {
          filter: brightness(1.1);
        }
      `}</style>
    </div>
  );
}

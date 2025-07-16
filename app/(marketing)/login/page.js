"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // เก็บ error ข้อความ
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validate = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!email.trim()) {
      newErrors.email = "โปรดกรอกอีเมล";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
      valid = false;
    }

    if (!password) {
      newErrors.password = "โปรดกรอกรหัสผ่าน";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return; // ถ้าไม่ผ่าน validation หยุด
    }

    // ทำงานกับ backend ได้ที่นี่
    alert("เข้าสู่ระบบสำเร็จ!");
  };

  return (
    <>
      {/* Background Layer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundImage:
            "url('/image/img/021.jpg'), linear-gradient(135deg, #f0f4ff, #dbeafe)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          filter: "brightness(0.85)",
          zIndex: -1,
        }}
      />
      {/* Content */}
      <div
        className="d-flex justify-content-center align-items-center px-3"
        style={{
          minHeight: "calc(100vh - 60px)",
          position: "relative",
          zIndex: 1,
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-95 p-5 rounded-5 shadow-lg position-relative"
          style={{
            width: "100%",
            maxWidth: "380px",
            backdropFilter: "blur(15px)",
            boxShadow: "0 12px 28px rgba(0, 0, 0, 0.12)",
            border: "1px solid rgba(0,0,0,0.07)",
          }}
          noValidate
        >
          {/* Logo */}
          <div className="d-flex justify-content-center mb-4">
            <Image
              src="/image/img/op.jpg"
              alt="โลโก้"
              width={140}
              height={140}
              className="rounded-circle"
            />
          </div>

          <h2
            className="mb-5 text-center text-primary fw-bold"
            style={{ fontSize: "1.6rem", letterSpacing: "1.2px" }}
          >
            เข้าสู่ระบบ
          </h2>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="form-label fw-semibold"
              style={{ fontSize: "1rem" }}
            >
              อีเมล
            </label>
            <input
              type="email"
              id="email"
              className={`form-control border-0 shadow-sm rounded-4 ${
                errors.email ? "is-invalid" : ""
              }`}
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                fontSize: "1rem",
                padding: "14px 16px",
                transition: "box-shadow 0.3s ease",
                boxShadow: errors.email
                  ? "0 0 0 0.25rem rgba(220,53,69,.25)"
                  : "none",
                border: errors.email ? "1px solid #dc3545" : "none",
              }}
              onFocus={(e) =>
                (e.target.style.boxShadow = errors.email
                  ? "0 0 0 0.25rem rgba(220,53,69,.5)"
                  : "0 0 10px 2px #3b82f6")
              }
              onBlur={(e) =>
                (e.target.style.boxShadow = errors.email ? "0 0 0 0.25rem rgba(220,53,69,.25)" : "none")
              }
            />
            {errors.email && (
              <div
                className="invalid-feedback"
                style={{ display: "block", fontSize: 13, color: "#dc3545" }}
              >
                {errors.email}
              </div>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="form-label fw-semibold"
              style={{ fontSize: "1rem" }}
            >
              รหัสผ่าน
            </label>
            <input
              type="password"
              id="password"
              className={`form-control border-0 shadow-sm rounded-4 ${
                errors.password ? "is-invalid" : ""
              }`}
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                fontSize: "1rem",
                padding: "14px 16px",
                transition: "box-shadow 0.3s ease",
                boxShadow: errors.password
                  ? "0 0 0 0.25rem rgba(220,53,69,.25)"
                  : "none",
                border: errors.password ? "1px solid #dc3545" : "none",
              }}
              onFocus={(e) =>
                (e.target.style.boxShadow = errors.password
                  ? "0 0 0 0.25rem rgba(220,53,69,.5)"
                  : "0 0 10px 2px #3b82f6")
              }
              onBlur={(e) =>
                (e.target.style.boxShadow = errors.password
                  ? "0 0 0 0.25rem rgba(220,53,69,.25)"
                  : "none")
              }
            />
            {errors.password && (
              <div
                className="invalid-feedback"
                style={{ display: "block", fontSize: 13, color: "#dc3545" }}
              >
                {errors.password}
              </div>
            )}
          </div>

          {/* Forgot Password */}
          <div className="mb-4 text-end">
            <Link
              href="/forgot-password"
              className="text-decoration-none small text-secondary"
              style={{ fontWeight: "500" }}
            >
              ลืมรหัสผ่าน?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-100 fw-semibold"
            style={{
              borderRadius: "2rem",
              padding: "12px 0",
              fontSize: "1.1rem",
              boxShadow: "0 6px 20px rgba(59, 130, 246, 0.4)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(59, 130, 246, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(59, 130, 246, 0.4)";
            }}
          >
            เข้าสู่ระบบ
          </button>

          {/* Register Link */}
          <div className="mt-5 text-center" style={{ fontSize: "0.95rem" }}>
            <span className="text-secondary" style={{ fontWeight: "500" }}>
              ยังไม่มีบัญชี?
            </span>{" "}
            <Link
              href="/apply"
              className="text-decoration-none text-primary fw-semibold"
              style={{ transition: "color 0.3s" }}
            >
              สมัครสมาชิก
            </Link>
          </div>
        </form>

        <style jsx>{`
          .rounded-circle {
            border-radius: 50%;
            object-fit: cover;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }
        `}</style>
      </div>
    </>
  );
}

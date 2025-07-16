"use client";
import { useState } from "react";
import Link from "next/link";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // ทำงานกับ backend ได้ที่นี่
  };

  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center px-3"
      style={{
        background: "linear-gradient(135deg, #f0f4ff, #dbeafe)",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-75 p-5 rounded-4 shadow-lg text-dark position-relative"
        style={{
          width: "100%",
          maxWidth: "480px",
          backdropFilter: "blur(16px)",
          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        <h2 className="mb-4 text-center text-primary fw-bold">🔐 เข้าสู่ระบบ</h2>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="form-label fw-semibold">
            📧 อีเมล
          </label>
          <input
            type="email"
            id="email"
            className="form-control form-control-lg border-0 shadow-sm rounded-3"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="mb-2">
          <label htmlFor="password" className="form-label fw-semibold">
            🔒 รหัสผ่าน
          </label>
          <input
            type="password"
            id="password"
            className="form-control form-control-lg border-0 shadow-sm rounded-3"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* ลืมรหัสผ่าน */}
        <div className="mb-4 text-end">
          <Link
            href="/forgot-password"
            className="text-decoration-none small text-secondary"
          >
            ลืมรหัสผ่าน?
          </Link>
        </div>

        {/* ปุ่ม */}
        <button
          type="submit"
          className="btn btn-primary btn-lg w-100"
          style={{
            borderRadius: "2rem",
            boxShadow: "0 4px 12px rgba(0, 123, 255, 0.2)",
            transition: "all 0.2s ease-in-out",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          ✅ เข้าสู่ระบบ
        </button>

        {/* สมัครสมาชิก */}
        <div className="mt-4 text-center">
          <span className="text-secondary">ยังไม่มีบัญชี?</span>{" "}
          <Link
            href="/apply"
            className="text-decoration-none text-primary fw-semibold"
            style={{ transition: "color 0.3s" }}
          >
            สมัครสมาชิก
          </Link>
        </div>
      </form>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function ตัวอย่างฟอร์ม() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("❌ รหัสผ่านไม่ตรงกัน");
      return;
    }

    setError("");
    alert("✅ สมัครสำเร็จ!");
  };

  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center px-2"
      style={{
        background: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="p-3 rounded-3"
        style={{
          width: "100%",
          maxWidth: "360px", // ลดขนาดฟอร์มลง
          backgroundColor: "#fff",
          border: "1px solid #ddd",
          boxShadow: "0 3px 8px rgba(0, 0, 0, 0.06)",
          transition: "all 0.3s ease",
        }}
      >
        <h2
          className="text-center fw-bold text-dark mb-3"
          style={{ letterSpacing: "1px", fontSize: "1.3rem" }}
        >
          🚀 สมัครสมาชิก
        </h2>

        {/* ชื่อ */}
        <div className="mb-2">
          <label className="form-label fw-semibold" style={{ fontSize: "0.9rem" }}>
            👤 ชื่อ
          </label>
          <input
            type="text"
            className="form-control form-control-sm rounded-2 border border-secondary-subtle"
            placeholder="ชื่อของคุณ"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        {/* นามสกุล */}
        <div className="mb-2">
          <label className="form-label fw-semibold" style={{ fontSize: "0.9rem" }}>
            👥 นามสกุล
          </label>
          <input
            type="text"
            className="form-control form-control-sm rounded-2 border border-secondary-subtle"
            placeholder="นามสกุลของคุณ"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        {/* อีเมล */}
        <div className="mb-2">
          <label className="form-label fw-semibold" style={{ fontSize: "0.9rem" }}>
            📧 อีเมล
          </label>
          <input
            type="email"
            className="form-control form-control-sm rounded-2 border border-secondary-subtle"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* ข้อความ */}
        <div className="mb-2">
          <label className="form-label fw-semibold" style={{ fontSize: "0.9rem" }}>
            💬 ข้อความ
          </label>
          <textarea
            className="form-control form-control-sm rounded-2 border border-secondary-subtle"
            rows={2}
            placeholder="เขียนข้อความถึงเรา..."
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
            required
            style={{ fontSize: "0.85rem" }}
          />
        </div>

        {/* รหัสผ่าน */}
        <div className="mb-2">
          <label className="form-label fw-semibold" style={{ fontSize: "0.9rem" }}>
            🔒 รหัสผ่าน
          </label>
          <input
            type="password"
            className="form-control form-control-sm rounded-2 border border-secondary-subtle"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
            maxLength={20}
          />
        </div>

        {/* ยืนยันรหัสผ่าน */}
        <div className="mb-2">
          <label className="form-label fw-semibold" style={{ fontSize: "0.9rem" }}>
            🔐 ยืนยันรหัสผ่าน
          </label>
          <input
            type="password"
            className="form-control form-control-sm rounded-2 border border-secondary-subtle"
            placeholder="********"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength={8}
            maxLength={20}
          />
        </div>

        {/* ข้อความแสดง error */}
        {error && (
          <div
            className="text-danger fw-semibold mb-3 text-center"
            style={{ fontSize: "0.9rem" }}
          >
            {error}
          </div>
        )}

        {/* ลิงก์เข้าสู่ระบบ */}
        <div className="text-center mt-2" style={{ fontSize: "0.9rem" }}>
          <span className="text-secondary">มีบัญชีอยู่แล้ว?</span>{" "}
          <Link href="/login" className="fw-bold text-decoration-none text-primary">
            เข้าสู่ระบบ
          </Link>
        </div>

        {/* ปุ่ม */}
        <button
          type="submit"
          className="btn btn-primary btn-sm w-100 mt-3"
          style={{
            borderRadius: "15px",
            fontWeight: "600",
            fontSize: "0.9rem",
            transition: "all 0.2s ease",
            boxShadow: "0 3px 10px rgba(0, 123, 255, 0.25)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          ✅ ยืนยันการสมัคร
        </button>
      </form>
    </div>
  );
}

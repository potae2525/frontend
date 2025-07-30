"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2"; // เพิ่ม SweetAlert2

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

    if (!valid) {
      Swal.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาด",
        text: "กรุณากรอกข้อมูลให้ถูกต้อง",
        footer: '<a href="#">ทำไมฉันถึงพบปัญหานี้?</a>',
      });
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    Swal.fire({
      icon: "success",
      title: "เข้าสู่ระบบสำเร็จ!",
      text: `ยินดีต้อนรับ, ${email}`,
    });
  };

  return (
    <>
      {/* พื้นหลัง */}
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
          {/* โลโก้ */}
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
            <label htmlFor="email" className="form-label fw-semibold">
              อีเมล
            </label>
            <input
              type="email"
              id="email"
              className={`form-control shadow-sm rounded-4 ${
                errors.email ? "is-invalid" : ""
              }`}
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <div className="invalid-feedback" style={{ display: "block" }}>
                {errors.email}
              </div>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="form-label fw-semibold">
              รหัสผ่าน
            </label>
            <input
              type="password"
              id="password"
              className={`form-control shadow-sm rounded-4 ${
                errors.password ? "is-invalid" : ""
              }`}
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <div className="invalid-feedback" style={{ display: "block" }}>
                {errors.password}
              </div>
            )}
          </div>

          {/* ลืมรหัสผ่าน */}
          <div className="mb-4 text-end">
            <Link href="/forgot-password" className="text-secondary small">
              ลืมรหัสผ่าน?
            </Link>
          </div>

          {/* ปุ่มเข้าสู่ระบบ */}
          <button
            type="submit"
            className="btn btn-primary w-100 fw-semibold"
            style={{
              borderRadius: "2rem",
              padding: "12px 0",
              fontSize: "1.1rem",
            }}
          >
            เข้าสู่ระบบ
          </button>

          {/* สมัครสมาชิก */}
          <div className="mt-5 text-center" style={{ fontSize: "0.95rem" }}>
            <span className="text-secondary fw-medium">ยังไม่มีบัญชี?</span>{" "}
            <Link href="/apply" className="text-primary fw-semibold">
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

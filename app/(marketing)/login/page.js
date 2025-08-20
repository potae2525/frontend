"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2";

export default function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false); // ✅ เพิ่ม remember
  const [errors, setErrors] = useState({ username: "", password: "" });
  const router = useRouter();

  // โหลดค่าจาก localStorage เมื่อเริ่มต้น
  useEffect(() => {
    const savedUsername = localStorage.getItem("savedUsername");
    const savedPassword = localStorage.getItem("savedPassword");
    if (savedUsername) setUsername(savedUsername);
    if (savedPassword) setPassword(savedPassword);
    if (savedUsername || savedPassword) setRemember(true); // ✅ กำหนด checkbox เป็น true หากมีข้อมูล
  }, []);

  const validate = () => {
    let valid = true;
    const newErrors = { username: "", password: "" };

    if (!username.trim()) {
      newErrors.username = "โปรดกรอกชื่อผู้ใช้";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      console.log("Login Response:", data);

      if (data.token) {
        // บันทึก token ใน localStorage
        localStorage.setItem("token", data.token);

        // ✅ บันทึกหรือเคลียร์ username/password ตาม checkbox
        if (remember) {
          localStorage.setItem("savedUsername", username);
          localStorage.setItem("savedPassword", password);
        } else {
          localStorage.removeItem("savedUsername");
          localStorage.removeItem("savedPassword");
        }

        Swal.fire({
          icon: "success",
          title: "เข้าสู่ระบบสำเร็จ!",
          text: `ยินดีต้อนรับ, ${username}`,
        }).then(() => {
           //router.push('/admin/users');
        window.location.href = "/admin/users";
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "เข้าสู่ระบบไม่สำเร็จ",
          text: data.message || "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาด",
        text: "ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้",
      });
    }
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

          {/* Username */}
          <div className="mb-4">
            <label htmlFor="username" className="form-label fw-semibold">
              ชื่อผู้ใช้
            </label>
            <input
              type="text"
              id="username"
              className={`form-control shadow-sm rounded-4 ${
                errors.username ? "is-invalid" : ""
              }`}
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && (
              <div className="invalid-feedback" style={{ display: "block" }}>
                {errors.username}
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

          {/* Remember me */}
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="remember"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="remember">
              จำชื่อผู้ใช้และรหัสผ่าน
            </label>
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

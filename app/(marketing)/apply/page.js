"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ตัวอย่างฟอร์ม() {
  const [form, setForm] = useState({
    prefix: "",
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    gender: "",
    birthdate: "",
    textarea: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [error, setError] = useState("");
  const [bgImg, setBgImg] = useState("/image/img/021.jpg");
  const [objUrl, setObjUrl] = useState(null);

  const handleChange = (e) => {
    const { id, value, type, checked, name } = e.target;

    if (type === "radio") {
      setForm((f) => ({ ...f, gender: value }));
      setErrors((prev) => ({ ...prev, gender: undefined }));
    } else {
      setForm((f) => ({
        ...f,
        [id]: type === "checkbox" ? checked : value,
      }));
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!form.prefix.trim()) newErrors.prefix = "โปรดเลือกคำนำหน้า";
    if (!form.username.trim()) newErrors.username = "โปรดกรอกชื่อผู้ใช้";
    if (!form.firstName.trim()) newErrors.firstName = "โปรดกรอกชื่อ";
    if (!form.lastName.trim()) newErrors.lastName = "โปรดกรอกนามสกุล";
    if (!form.email.trim()) newErrors.email = "โปรดกรอกอีเมล";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
    if (!form.gender.trim()) newErrors.gender = "โปรดเลือกเพศ";
    if (!form.birthdate.trim()) newErrors.birthdate = "โปรดเลือกวันเกิด";
    if (!form.address.trim()) newErrors.address = "โปรดกรอกที่อยู่";
    if (!form.textarea.trim()) newErrors.textarea = "โปรดกรอกข้อความ";
    if (!form.acceptTerms) newErrors.acceptTerms = "โปรดยอมรับเงื่อนไข";
    if (form.password.length < 8)
      newErrors.password = "รหัสผ่านอย่างน้อย 8 ตัวอักษร";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "รหัสผ่านไม่ตรงกัน";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setError("");
      return; // ไม่ล้างฟอร์ม
    }

    // ถ้าไม่มี error ให้ล้างฟอร์มและแจ้ง success
    setErrors({});
    setError("");
    alert("✅ สมัครสำเร็จ!");
    setForm({
      prefix: "",
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      gender: "",
      birthdate: "",
      textarea: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    });
  };

  const handleBgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (objUrl) URL.revokeObjectURL(objUrl);
      const url = URL.createObjectURL(file);
      setBgImg(url);
      setObjUrl(url);
    }
  };

  useEffect(() => () => objUrl && URL.revokeObjectURL(objUrl), [objUrl]);

  return (
    <div
      style={{
        background: `url(${bgImg}) center/cover no-repeat`,
        fontFamily: "'Kanit', sans-serif",
        minHeight: "100vh",
        padding: "3rem 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "background 0.5s ease",
      }}
    >
      <form
        onSubmit={handleSubmit}
        noValidate
        style={{
          maxWidth: 720,
          width: "90%",
          background: "rgba(255,255,255,0.95)",
          padding: 20,
          borderRadius: 16,
          boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
          backdropFilter: "blur(10px)",
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          fontSize: 14,
        }}
      >
        {/* โลโก้สวยขึ้น */}
        <div
          style={{
            width: "100%",
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          <Image
            src="/image/img/op.jpg"
            alt="โลโก้"
            width={100}
            height={100}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              border: "3px solid white",
              display: "inline-block",
            }}
          />
        </div>

        <h2
          style={{
            width: "100%",
            textAlign: "center",
            color: "#0d6efd",
            marginBottom: 12,
          }}
        >
          สมัครสมาชิก
        </h2>

        <select
          id="prefix"
          value={form.prefix}
          onChange={handleChange}
          style={{
            flex: "1 1 20%",
            minWidth: 120,
            padding: 8,
            borderRadius: 8,
            border: errors.prefix ? "2px solid red" : "1px solid #ccc",
          }}
        >
          <option value="">คำนำหน้า</option>
          <option value="นาย">นาย</option>
          <option value="นาง">นาง</option>
          <option value="นางสาว">นางสาว</option>
        </select>
        {errors.prefix && (
          <div style={{ color: "red", fontSize: 12, width: "100%" }}>
            {errors.prefix}
          </div>
        )}

        <input
          id="username"
          type="text"
          placeholder="ชื่อผู้ใช้"
          value={form.username}
          onChange={handleChange}
          style={{
            flex: "1 1 30%",
            minWidth: 140,
            padding: 8,
            borderRadius: 8,
            border: errors.username ? "2px solid red" : "1px solid #ccc",
          }}
        />
        {errors.username && (
          <div style={{ color: "red", fontSize: 12, width: "100%" }}>
            {errors.username}
          </div>
        )}

        <input
          id="firstName"
          type="text"
          placeholder="ชื่อ"
          value={form.firstName}
          onChange={handleChange}
          style={{
            flex: "1 1 25%",
            minWidth: 130,
            padding: 8,
            borderRadius: 8,
            border: errors.firstName ? "2px solid red" : "1px solid #ccc",
          }}
        />
        {errors.firstName && (
          <div style={{ color: "red", fontSize: 12, width: "100%" }}>
            {errors.firstName}
          </div>
        )}

        <input
          id="lastName"
          type="text"
          placeholder="นามสกุล"
          value={form.lastName}
          onChange={handleChange}
          style={{
            flex: "1 1 25%",
            minWidth: 130,
            padding: 8,
            borderRadius: 8,
            border: errors.lastName ? "2px solid red" : "1px solid #ccc",
          }}
        />
        {errors.lastName && (
          <div style={{ color: "red", fontSize: 12, width: "100%" }}>
            {errors.lastName}
          </div>
        )}

        <input
          id="email"
          type="email"
          placeholder="อีเมล"
          value={form.email}
          onChange={handleChange}
          style={{
            flex: "1 1 40%",
            minWidth: 180,
            padding: 8,
            borderRadius: 8,
            border: errors.email ? "2px solid red" : "1px solid #ccc",
          }}
        />
        {errors.email && (
          <div style={{ color: "red", fontSize: 12, width: "100%" }}>
            {errors.email}
          </div>
        )}

        <input
          id="birthdate"
          type="date"
          value={form.birthdate}
          onChange={handleChange}
          style={{
            flex: "1 1 25%",
            minWidth: 130,
            padding: 8,
            borderRadius: 8,
            border: errors.birthdate ? "2px solid red" : "1px solid #ccc",
          }}
        />
        {errors.birthdate && (
          <div style={{ color: "red", fontSize: 12, width: "100%" }}>
            {errors.birthdate}
          </div>
        )}

        <div style={{ flex: "1 1 35%", minWidth: 150 }}>
          <label
            style={{ fontWeight: "600", fontSize: 14, display: "block" }}
          >
            เพศ
          </label>
          <div style={{ display: "flex", gap: 12 }}>
            {["ชาย", "หญิง", "อื่นๆ"].map((g) => (
              <label
                key={g}
                style={{
                  fontSize: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <input
                  type="radio"
                  id={`gender${g}`}
                  name="gender"
                  value={g}
                  checked={form.gender === g}
                  onChange={handleChange}
                />
                {g}
              </label>
            ))}
          </div>
          {errors.gender && (
            <div style={{ color: "red", fontSize: 12 }}>{errors.gender}</div>
          )}
        </div>

        <textarea
          id="address"
          rows={2}
          placeholder="ที่อยู่"
          value={form.address}
          onChange={handleChange}
          style={{
            flex: "1 1 100%",
            padding: 8,
            borderRadius: 8,
            border: errors.address ? "2px solid red" : "1px solid #ccc",
          }}
        />
        {errors.address && (
          <div style={{ color: "red", fontSize: 12, width: "100%" }}>
            {errors.address}
          </div>
        )}

        <textarea
          id="textarea"
          rows={3}
          placeholder="ข้อความ"
          value={form.textarea}
          onChange={handleChange}
          style={{
            flex: "1 1 100%",
            padding: 8,
            borderRadius: 8,
            border: errors.textarea ? "2px solid red" : "1px solid #ccc",
          }}
        />
        {errors.textarea && (
          <div style={{ color: "red", fontSize: 12, width: "100%" }}>
            {errors.textarea}
          </div>
        )}

        <input
          id="password"
          type="password"
          placeholder="รหัสผ่าน"
          value={form.password}
          onChange={handleChange}
          minLength={8}
          maxLength={20}
          style={{
            flex: "1 1 45%",
            minWidth: 180,
            padding: 8,
            borderRadius: 8,
            border: errors.password ? "2px solid red" : "1px solid #ccc",
          }}
        />
        {errors.password && (
          <div style={{ color: "red", fontSize: 12, width: "100%" }}>
            {errors.password}
          </div>
        )}

        <input
          id="confirmPassword"
          type="password"
          placeholder="ยืนยันรหัสผ่าน"
          value={form.confirmPassword}
          onChange={handleChange}
          minLength={8}
          maxLength={20}
          style={{
            flex: "1 1 45%",
            minWidth: 180,
            padding: 8,
            borderRadius: 8,
            border: errors.confirmPassword ? "2px solid red" : "1px solid #ccc",
          }}
        />
        {errors.confirmPassword && (
          <div style={{ color: "red", fontSize: 12, width: "100%" }}>
            {errors.confirmPassword}
          </div>
        )}

        <label
          style={{
            flex: "1 1 100%",
            fontSize: 14,
            display: "flex",
            alignItems: "center",
            gap: 8,
            border: errors.acceptTerms ? "2px solid red" : "none",
            padding: 4,
            borderRadius: 8,
          }}
        >
          <input
            id="acceptTerms"
            type="checkbox"
            checked={form.acceptTerms}
            onChange={handleChange}
            style={{ width: 16, height: 16 }}
          />
          ยอมรับเงื่อนไขการใช้งาน
        </label>
        {errors.acceptTerms && (
          <div style={{ color: "red", fontSize: 12, width: "100%" }}>
            {errors.acceptTerms}
          </div>
        )}

        {error && (
          <div
            style={{
              color: "red",
              fontWeight: "600",
              width: "100%",
              textAlign: "center",
            }}
          >
            {error}
          </div>
        )}

        <div
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: 14,
            marginTop: 8,
          }}
        >
          มีบัญชีอยู่แล้ว?{" "}
          <Link
            href="/login"
            style={{
              color: "#0d6efd",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            เข้าสู่ระบบ
          </Link>
        </div>

        <button
          type="submit"
          style={{
            marginTop: 12,
            width: "100%",
            padding: 10,
            fontSize: 16,
            borderRadius: 24,
            border: "none",
            backgroundColor: "#0d6efd",
            color: "#fff",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 5px 15px rgba(13, 110, 253, 0.4)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 7px 20px rgba(13, 110, 253, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 5px 15px rgba(13, 110, 253, 0.4)";
          }}
        >
          ยืนยันการสมัคร
        </button>
      </form>
    </div>
  );
}

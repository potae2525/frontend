"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const cars = [
  { id: 1, model: "Ferrari F8 Tributo", price: "15,000,000 บาท", description: "รถสปอร์ตสมรรถนะสูง", image: "/image/can/0.11.jpg" },
  { id: 2, model: "Lamborghini Huracan", price: "18,000,000 บาท", description: "ดีไซน์ล้ำสมัย", image: "/image/can/0.22.jpg" },
  { id: 3, model: "Porsche 911 Carrera", price: "9,000,000 บาท", description: "รถสปอร์ตคลาสสิก", image: "/image/can/0.33.jpg" },
  { id: 4, model: "McLaren 720S", price: "22,000,000 บาท", description: "สุดยอดรถสปอร์ต", image: "/image/can/0.44.jpg" },
  { id: 5, model: "Aston Martin Vantage", price: "10,500,000 บาท", description: "สปอร์ตอังกฤษสุดหรู", image: "/image/can/0.55.jpg" },
  { id: 6, model: "BMW M4", price: "8,200,000 บาท", description: "เครื่องยนต์แรง พร้อมดีไซน์ทันสมัย", image: "/image/can/0.66.jpg" },
  { id: 7, model: "Mercedes AMG GT", price: "12,000,000 บาท", description: "สมรรถนะสูง ดีไซน์หรูหรา", image: "/image/can/0.77.jpg" },
  { id: 8, model: "Audi R8", price: "16,500,000 บาท", description: "รถสปอร์ตอิตาเลียน-เยอรมัน สมรรถนะสุดยอด", image: "/image/can/0.88.jpg" },
];

export default function ServicePage() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;
    if (index < 0) index = 0;
    if (index >= cars.length) index = cars.length - 1;
    setCurrentIndex(index);

    const cardWidth = scrollRef.current.children[0].offsetWidth + 30;
    scrollRef.current.scrollTo({ left: cardWidth * index, behavior: "smooth" });
  };

  const handleClick = (e) => {
    const rect = scrollRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const containerWidth = rect.width;

    if (clickX < containerWidth / 2) {
      scrollToIndex(currentIndex - 1);
    } else {
      scrollToIndex(currentIndex + 1);
    }
  };

  return (
    <div style={{ minHeight: "100vh", position: "relative", fontFamily: '"Kanit", sans-serif' }}>
      {/* Background */}
      <Image
        src="/image/img/021.jpg" // ใส่รูปพื้นหลังเหมือนหน้า About
        alt="Background"
        fill
        style={{ objectFit: "cover", zIndex: -1 }}
        priority
      />
      {/* Overlay ดำโปร่ง */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.4)", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1, padding: "80px 20px 120px", maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "3.5rem", fontWeight: 800, color: "#fff", textAlign: "center", marginBottom: "15px" }}>PoTae Luxury</h1>
        <p style={{ fontSize: "1.5rem", textAlign: "center", color: "#e3f2fd", marginBottom: "35px" }}>รถสปอร์ตคลาสสิกและหรูหราหลากหลายรุ่น</p>

        <div
          ref={scrollRef}
          onClick={handleClick}
          style={{
            display: "flex",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            gap: "30px",
            paddingBottom: "15px",
            scrollBehavior: "smooth",
            cursor: "pointer",
          }}
        >
          {cars.map(({ id, model, price, description, image }) => (
            <div
              key={id}
              style={{
                scrollSnapAlign: "start",
                flex: "0 0 95%",
                borderRadius: "25px",
                position: "relative",
                userSelect: "none",
                transition: "transform 0.3s, box-shadow 0.3s",
                overflow: "hidden",
                height: "450px",
              }}
              className="card-hover"
            >
              <Image src={image} alt={model} fill style={{ objectFit: "cover" }} priority={id === 1} />
              {/* ข้อความบนรูป */}
              <div style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                color: "white",
                textShadow: "0 2px 8px rgba(0,0,0,0.7)",
                background: "rgba(0,0,0,0.35)",
                padding: "15px",
                borderRadius: "15px",
                maxWidth: "80%",
              }}>
                <h3 style={{ fontSize: "2rem", fontWeight: "700", margin: 0 }}>{model}</h3>
                <p style={{ fontSize: "1.4rem", fontWeight: "600", margin: "5px 0" }}>{price}</p>
                <p style={{ fontSize: "1rem", lineHeight: 1.4, margin: 0 }}>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .card-hover:hover {
          transform: scale(1.04);
          box-shadow: 0 20px 50px rgba(0,0,0,0.25);
        }
      `}</style>
    </div>
  );
}

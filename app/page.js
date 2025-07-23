import Carousel from "./components/Carousel";
import Card from "./components/Card";

export default function Home() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", padding: "2rem" }}>
      {/* วิดีโอพื้นหลัง */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
        src="/image/video/333.mp4" // ใส่พาธวิดีโอของคุณ
        type="video/mp4"
      />

      {/* เนื้อหาหลัก */}
      <Carousel />
      <Card />
      <h1
        style={{
          fontSize: "2.25rem",
          textAlign: "center",
          color: "#2563eb", // สีฟ้าเข้มแบบ Tailwind text-blue-700
          fontWeight: "600",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        {/* ข้อความตรงนี้ใส่ได้เลย */}
      </h1>
    </div>
  );
} 
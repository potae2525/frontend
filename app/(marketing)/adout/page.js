"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <div className="background-container">
        <div className="image-wrapper">
          <Image
            src="/image/img/021.jpg"
            alt="Background"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            priority
          />
        </div>
      </div>

      <div className="container">
        <div className="header">
          <div className="logo-wrapper">
            <Image
              src="/image/img/op.jpg"
              alt="โลโก้ Potae"
              width={60}
              height={60}
              style={{ borderRadius: "50%" }}
              priority
            />
          </div>
          <h1 className="title">เกี่ยวกับเรา</h1>
        </div>

        <p className="intro-text">
          <span className="highlight-text">
            <strong>
              <span className="large-text">บริษัท Potae</span>
            </strong>
          </span>
        </p>
        <p className="content-text">
          AI Overview
          <br />
          ปิดจริง บริษัทขายรถมือ 2 ชื่อดัง ทุกสาขาทั่วประเทศไทย : PPTVHD36
          <br />
          บริษัทรถยนต์ในประเทศไทยมีหลายบริษัททั้งผู้ผลิตและผู้จำหน่ายรถยนต์,
          รวมถึงบริษัทรถเช่าและบริษัทขายรถมือสอง. บริษัทรถยนต์ที่มียอดขายสูงสุดในประเทศไทย
          ได้แก่ Toyota, Isuzu, และ Honda. นอกจากนี้ยังมีบริษัทรถยนต์อื่นๆ ที่ได้รับความนิยม เช่น Mazda, Mitsubishi,
          Ford, Suzuki, และ Nissan.
          <br />
          สำหรับรถเช่า, มีบริษัทชั้นนำ เช่น Thai Rent a Car, World Rent a Car, Master Car Rental, Avis, และ Exclusive Car Rental.
          <br />
          ส่วนตลาดรถมือสอง มีเว็บไซต์ที่ให้บริการ เช่น One2car.com, Carsome.co.th, TaladROD.com, และ Chobrod.com.
        </p>
      </div>

      <style jsx>{`
        .background-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
          overflow: hidden;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          height: 100vh;
          filter: brightness(0.75);
        }

        .container {
          position: relative;
          max-width: 900px;
          margin: 60px auto 40px auto;
          padding: 40px 35px;
          background-color: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          font-family: "Kanit", sans-serif;
        }

        .header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 35px;
          justify-content: center;
        }

        .logo-wrapper {
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
          border-radius: 50%;
          overflow: hidden;
          width: 60px;
          height: 60px;
          background: white;
          transition: transform 0.3s ease;
        }
        .logo-wrapper:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.35);
        }

        .title {
          font-size: 3rem;
          font-weight: 700;
          color: #1a1a1a;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
          margin: 0;
        }

        .intro-text {
          font-size: 1.8rem;
          color: #2f3e50; /* ปรับเป็นสีเข้มขึ้นเล็กน้อย */
          text-align: center;
          margin-bottom: 45px;
          font-weight: 600;
          padding-top: 10px;
        }

        .highlight-text {
          color: #2980b9;
        }

        .large-text {
          font-size: 2.2rem;
          font-weight: 600;
        }

        .content-text {
          font-size: 1.4rem;
          line-height: 1.75;
          color: #222;
          text-align: justify;
          padding: 25px;
          border: 1px solid #2980b9;
          border-radius: 10px;
          background-color: #fff;
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08);
          margin-top: 25px;
          white-space: pre-line;
          /* เพิ่มช่องว่างระหว่างย่อหน้า */
          margin-bottom: 20px;
        }

        @media (max-width: 768px) {
          .container {
            margin: 40px 15px 30px;
            padding: 30px 25px;
          }

          .title {
            font-size: 2.4rem;
          }

          .intro-text {
            font-size: 1.5rem;
            margin-bottom: 35px;
          }

          .content-text {
            font-size: 1.2rem;
            margin-top: 20px;
            padding: 20px;
          }

          .header {
            gap: 12px;
          }

          .logo-wrapper {
            width: 50px;
            height: 50px;
          }
        }

        @media (max-width: 480px) {
          .container {
            margin: 25px 10px 20px;
            padding: 20px 15px;
          }

          .title {
            font-size: 1.8rem;
          }

          .intro-text {
            font-size: 1.3rem;
          }

          .content-text {
            font-size: 1.1rem;
            padding: 15px;
            margin-top: 15px;
          }

          .logo-wrapper {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </>
  );
}

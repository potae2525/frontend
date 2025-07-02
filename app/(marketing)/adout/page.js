"use client";
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>เกี่ยวกับเรา</title>
        <meta name="description" content="เกี่ยวกับบริษัท ซีเจ ซอฟท์ จำกัด" />
      </Head>
      <div className="background-container">
        <Image 
          src="/image/img/021.jpg" 
          alt="Background" 
          layout="fill" 
          objectFit="cover" 
          quality={100} 
          priority
        />
      </div>
      <div className="container">
        <h1 className="title">เกี่ยวกับเรา</h1>
        <p className="intro-text">
          <span className="highlight-text">
            <strong><span className="large-text">บริษัท Potae</span></strong>
          </span>
        </p>
        <p className="content-text">
          AI Overview
          <br />
          ปิดจริง บริษัทขายรถมือ 2 ชื่อดัง ทุกสาขาทั่วประเทศไทย : PPTVHD36
          <br />
          บริษัทรถยนต์ในประเทศไทยมีหลายบริษัททั้งผู้ผลิตและผู้จำหน่ายรถยนต์, รวมถึงบริษัทรถเช่าและบริษัทขายรถมือสอง.
          บริษัทรถยนต์ที่มียอดขายสูงสุดในประเทศไทย ได้แก่ Toyota, Isuzu, และ Honda. นอกจากนี้ยังมีบริษัทรถยนต์อื่นๆ ที่ได้รับความนิยม เช่น Mazda, Mitsubishi, Ford, Suzuki, และ Nissan.
          <br />
          สำหรับรถเช่า, มีบริษัทชั้นนำ เช่น Thai Rent a Car, World Rent a Car, Master Car Rental, Avis, และ Exclusive Car Rental.
          <br />
          ส่วนตลาดรถมือสอง มีเว็บไซต์ที่ให้บริการ เช่น One2car.com, Carsome.co.th, TaladROD.com, และ Chobrod.com.
        </p>
      </div>

      <style jsx>{`
        /* ตั้งค่าพื้นหลัง */
        .background-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1; /* ให้อยู่ข้างหลัง */
        }

        .container {
          position: relative;
          padding: 40px;
          max-width: 900px;
          margin: 0 auto;
          margin-top: 40px; /* ขยับกรอบให้ติดขอบบน */
          font-family: 'Kanit', sans-serif;
          background-color: rgba(255, 255, 255, 0.9); /* ปรับโปร่งแสงให้ดูมืดน้อยลง */
          border-radius: 15px;
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15); /* เพิ่มเงาให้ดูมีมิติ */
        }

        .title {
          font-size: 3.5rem; /* ขยายขนาดตัวอักษร */
          color: #2c3e50;
          text-align: center;
          margin-bottom: 35px; /* เพิ่มระยะห่างใต้หัวข้อ */
          font-weight: 700;
        }

        .intro-text {
          font-size: 1.8rem;
          color: #34495e;
          text-align: center;
          margin-bottom: 45px; /* เพิ่มระยะห่างจากเนื้อหา */
          font-weight: 500;
          padding-top: 20px;
        }

        .highlight-text {
          color: #2980b9; /* ใช้สีฟ้าคลาสสิค */
        }

        .large-text {
          font-size: 2rem;
          font-weight: bold;
        }

        .content-text {
          font-size: 1.5rem; /* ขยายขนาดข้อความ */
          line-height: 1.75; /* ปรับ line-height ให้ข้อความอ่านง่ายขึ้น */
          color: #333;
          text-align: justify;
          padding: 25px;
          border: 1px solid #2980b9;
          border-radius: 8px;
          background-color: #ffffff;
          box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
          margin-top: 35px; /* เพิ่ม margin-top */
        }

        .content-text br {
          margin-bottom: 12px;
        }

        /* สำหรับหน้าจอเล็ก */
        @media (max-width: 768px) {
          .container {
            padding: 30px;
            margin-top: 20px; /* ลด margin-top สำหรับหน้าจอเล็ก */
          }

          .title {
            font-size: 2.8rem;
            margin-bottom: 25px;
          }

          .intro-text {
            font-size: 1.6rem;
            padding-top: 20px;
          }

          .content-text {
            font-size: 1.3rem;
            margin-top: 20px;
          }
        }

        /* สำหรับหน้าจอมือถือ */
        @media (max-width: 480px) {
          .container {
            padding: 20px;
            margin-top: 10px;
          }

          .title {
            font-size: 2.2rem;
            margin-bottom: 20px;
          }

          .intro-text {
            font-size: 1.4rem;
          }

          .content-text {
            font-size: 1.2rem;
            margin-top: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default AboutPage;

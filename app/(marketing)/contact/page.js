"use client";

import Image from "next/image";

export default function ContactMap() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', fontFamily: "'Kanit', sans-serif" }}>
      {/* Background */}
      <Image
        src="/image/img/021.jpg" // ใส่รูปพื้นหลังเหมือนหน้า About
        alt="Background"
        fill
        style={{ objectFit: 'cover', zIndex: -1 }}
        priority
      />
      {/* Overlay ดำโปร่ง */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.4)',
          zIndex: 0,
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, padding: '80px 20px 120px' }}>
        <div
          className="row row-cols-1 gy-5 wow fadeInUp"
          style={{ visibility: 'visible', animationName: 'fadeInUp' }}
        >
          <div className="col">
            <article className="post-items">
              <div className="post-content">
                {/* กรอบคำอธิบาย */}
                <div
                  style={{
                    border: '2px solid black',
                    borderRadius: '8px',
                    padding: '25px',
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    marginBottom: '2rem',
                    marginTop: '2rem',
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                    maxWidth: '800px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                >
                  <p style={{ margin: 0, color: '#000' }}>
                    <strong>วิทยาลัยเทคนิคเชียงใหม่ สถาบันการอาชีวศึกษาภาคเหนือ 1</strong>
                    <br />
                    เลขที่ 9 ถนนเวียงแก้ว ตำบลศรีภูมิ อำเภอเมืองเชียงใหม่ จังหวัดเชียงใหม่ 50200
                    <br />
                    <strong>โทรศัพท์</strong>: 053 217 708 | <strong>โทรสาร</strong>: 053 221 599 |{' '}
                    <strong>อีเมล</strong>: ctc@cmtc.ac.th
                  </p>
                </div>

                {/* แผนที่ Google Maps */}
                <div
                  style={{
                    position: 'relative',
                    paddingBottom: '40%',
                    height: 0,
                    overflow: 'hidden',
                    maxWidth: '800px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: '2rem',
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30214.618968496696!2d98.96247307638849!3d18.8058450835695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a9a71d80adf%3A0xe41f657fc5052416!2z4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LiZ4Li04LiE4LmA4LiK4Li14Lii4LiH4LmD4Lir4Lih4LmI!5e0!3m2!1sth!2sth!4v1671708540352!5m2!1sth!2sth"
                    style={{
                      border: 0,
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map - วิทยาลัยเทคนิคเชียงใหม่"
                  />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

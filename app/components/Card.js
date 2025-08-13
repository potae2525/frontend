"use client";

import Image from "next/image";

export default function Card() {
  return (
    <>
      <div className="container py-4">
        <h2 className="section-title text-center mb-4">แนะนำรถยนต์น่าสนใจ</h2>

        <div className="row justify-content-center px-3 gx-4 gy-4">
          {[
            {
              img: "/image/img/05.png",
              title: "AUDI RS 7 Sportback Performance",
              price: "11,280,000 บาท",
              link: "https://www.audi.co.th/en/models/a7/rs-7-sportback-performance/",
            },
            {
              img: "/image/img/06.png",
              title: "Mazda MX-5",
              price: "2,905,000 บาท",
              link: "https://www.mazda.co.th/th/cars/mazda-mx5",
            },
            {
              img: "/image/img/07.png",
              title: "Porsche 718 2023",
              price: "5,790,000 บาท",
              link: "https://www.porsche.com/pap/_thailand_/models/718/",
            },
          ].map(({ img, title, price, link }, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-md-4">
              <div className="card shadow-lg rounded hover-effect h-100 border-0">
                {/* ห่อรูปด้วย <a> */}
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={img}
                    alt={title}
                    className="card-img-top"
                    style={{
                      height: "220px",
                      objectFit: "cover",
                      borderRadius: "0.5rem 0.5rem 0 0",
                    }}
                  />
                </a>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{title}</h5>
                  <p className="card-text text-secondary mb-0" style={{ fontSize: "1.1rem" }}>
                    ราคา {price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section-title {
          font-weight: 700;
          font-size: 1.8rem;
          color: #fff;
          letter-spacing: 0.04em;
          position: relative;
          margin-bottom: 1.2rem;
          text-transform: none;
        }
        .section-title::after {
          content: "";
          display: block;
          width: 60px;
          height: 3px;
          background-color: #fff;
          border-radius: 2px;
          margin: 0.5rem auto 0;
        }
        .hover-effect {
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 0.35s ease;
          cursor: pointer;
        }
        .hover-effect:hover {
          transform: translateY(-10px) scale(1.07);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          z-index: 20;
        }
        .card {
          background: #fff;
          border-radius: 0.5rem;
        }
      `}</style>
    </>
  );
}

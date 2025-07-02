"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Carousel() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div
      id="carouselExample"
      className="carousel slide carousel-fade custom-carousel mt-4"
    >
      <div className="carousel-inner rounded shadow-lg overflow-hidden">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="img-wrapper">
            <Image
              src="/image/sliders/0.1.png"
              alt="Slide 1"
              fill
              className="carousel-img"
              priority
              sizes="100vw"
            />
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="img-wrapper">
            <Image
              src="/image/sliders/0.2.jpg"
              alt="Slide 2"
              fill
              className="carousel-img"
              sizes="100vw"
            />
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <div className="img-wrapper">
            <Image
              src="/image/sliders/0.3.png"
              alt="Slide 3"
              fill
              className="carousel-img"
              sizes="100vw"
            />
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

      <style jsx>{`
        .custom-carousel {
          width: 100%;
          max-width: 1400px;
          margin: 2rem auto;
        }

        .img-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 1920 / 690;
          background-color: #000; /* ป้องกันเวลาภาพยังโหลดไม่ทัน */
        }

        .carousel-img {
          object-fit: contain;
        }

        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          background-size: 60% 60%;
        }

        @media (max-width: 768px) {
          .img-wrapper {
            aspect-ratio: 16 / 9;
          }
        }
      `}</style>
    </div>
  );
}

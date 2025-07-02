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
        <div className="carousel-item active">
          <Image
            src="/image/sliders/0.1.png"
            className="d-block w-100 carousel-img"
            alt="Slide 1"
            width={1920}
            height={690}
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/image/sliders/0.2.jpg"
            className="d-block w-100 carousel-img"
            alt="Slide 2"
            width={1920}
            height={690}
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/image/sliders/0.3.png"
            className="d-block w-100 carousel-img"
            alt="Slide 3"
            width={1920}
            height={690}
          />
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
          margin-top: 2rem; /* ห่างจากด้านบน */
          width: 100%;
          max-width: 1400px; /* เพิ่มความกว้าง */
          margin-left: auto;
          margin-right: auto;
        }

        .carousel-img {
          object-fit: cover;
          height: 500px;
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
          .carousel-img {
            height: 250px;
          }
        }
      `}</style>
    </div>
  );
}

"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Carousel() {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image
            src="/image/sliders/0.1.png"
            className="d-block w-100 object-cover"
            alt="Slide 1"
            width={1920}
            height={690}
            layout="intrinsic"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/image/sliders/0.2.jpg"
            className="d-block w-100 object-cover"
            alt="Slide 2"
            width={1920}
            height={690}
            layout="intrinsic"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/image/sliders/0.3.png"
            className="d-block w-100 object-cover"
            alt="Slide 3"
            width={1920}
            height={690}
            layout="intrinsic"
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
    </div>
  );
}

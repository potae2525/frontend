"use client";
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
          <div className="video-wrapper">
            <video
              className="carousel-video"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              disablePictureInPicture
            >
              <source src="/image/video/444.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="video-wrapper">
            <video
              className="carousel-video"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              disablePictureInPicture
            >
              <source src="/image/video/555.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <div className="video-wrapper">
            <video
              className="carousel-video"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              disablePictureInPicture
            >
              <source src="/image/video/666.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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

        .video-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 1920 / 690;
          background-color: #000;
        }

        .carousel-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
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
          .video-wrapper {
            aspect-ratio: 16 / 9;
          }
        }
      `}</style>
    </div>
  );
}

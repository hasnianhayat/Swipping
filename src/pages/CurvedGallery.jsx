import React, { useState, useEffect } from "react";
import "../components/slider.css";

import image1 from "../assets/img.svg";
import image2 from "../assets/Frame 6.svg";
import image3 from "../assets/Frame 7.svg";
import image4 from "../assets/Frame 8.svg";
import image5 from "../assets/Frame 9.svg";

const images = [image1, image2, image3, image4, image5, image1, image2, image5];
const VISIBLE_COUNT = 5;

const CurvedGallery = () => {
  const [startIdx, setStartIdx] = useState(0);
  const total = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIdx((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, [total]);

  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < VISIBLE_COUNT; i++) {
      visible.push({
        src: images[(startIdx + i) % total],
        position: i,
      });
    }
    return visible;
  };

  return (
    <div
      style={{
        minHeight: "50vh",
        background: "#f8f9fa",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2 style={{ marginBottom: 40, color: "#222", fontWeight: 700 }}>
        Curved 3D Smooth Slider
      </h2>

      <div className="slider-container  " style={{ position: 'relative', width: '100%' }}>
        <button
          aria-label="Previous"
          className="hidden sm:block"
          style={{
            position: 'absolute',
            left: 25,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: 'white',
            border: '1px solid #ccc',
            borderRadius: '50%',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            padding: '10px 16px',
            cursor: 'pointer',
          }}
          onClick={() => setStartIdx((prev) => (prev - 1 + total) % total)}
        >
          &#8592;
        </button>

        <div className="slider-wrapper transition-transform duration-1000 ease-in-out" key={startIdx}>
          {getVisibleImages().map((item, idx) => (
            <div
              className={`slider-image pos-${item.position}`}
              key={idx}
            >
              <img src={item.src} alt={`gallery-img-${idx}`} />
            </div>
          ))}
        </div>

        <button
          aria-label="Next"
          className="hidden sm:block"
          style={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: 'white',
            border: '1px solid #ccc',
            borderRadius: '50%',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            padding: '10px 16px',
            cursor: 'pointer',
          }}
          onClick={() => setStartIdx((prev) => (prev + 1) % total)}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default CurvedGallery;

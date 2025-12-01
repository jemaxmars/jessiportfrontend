import React from "react";
import photo1 from "../../assets/photo1.png";
import photo2 from "../../assets/photo2.png";
import photo3 from "../../assets/photo3.png";
import photo4 from "../../assets/photo4.png";
import photo5 from "../../assets/photo5.png";
import photo6 from "../../assets/photo6.png";
import photo7 from "../../assets/photo7.png";
import "./ScrollAnimation.css";

function ScrollAnimation() {
  const images = [
    { id: 1, src: photo1, alt: "Photo of Jessi" },
    { id: 2, src: photo2, alt: "Photo of Jessi and her daughter" },
    { id: 3, src: photo3, alt: "Photo of Jessi and her son" },
    { id: 4, src: photo4, alt: "Photo of Jessi and her significant other" },
    { id: 5, src: photo5, alt: "Photo of Jessi and her two kids" },
    { id: 6, src: photo6, alt: "Photo of Jessi while fishing" },
    { id: 7, src: photo7, alt: "Photo of Jessi at the gym" },
  ];

  return (
    <div className="scroll-animation-container">
      <div className="scroll-track">
        {images.map((image) => (
          <div key={image.id} className="scroll-item">
            <img src={image.src} alt={image.alt} className="scroll-image" />
          </div>
        ))}
        {images.map((image) => (
          <div key={`${image.id}-duplicate`} className="scroll-item">
            <img src={image.src} alt={image.alt} className="scroll-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrollAnimation;

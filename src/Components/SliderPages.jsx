import React, { useState } from "react";
import { images } from "../constants";

const Slider = ({ images1 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images1.length;
    setCurrentImageIndex(newIndex);
  };

  const previousImage = () => {
    const newIndex = (currentImageIndex - 1 + images1.length) % images1.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="slider w-full h-[160px]">
      <button onClick={previousImage} className="absolute left-0 animate-pulse">
        &lt;
      </button>
      <img
        src={images1[currentImageIndex]}
        alt="slider"
        className="w-full h-64"
      />
      <button onClick={nextImage} className="absolute right-0">
        &gt;
      </button>
    </div>
  );
};

const SliderPages = () => {
  const images1 = [images.cric, images.crick, images.cricket];

  return (
    <div className="App">
      <h1>Image Slider</h1>
      <Slider images1={images1} />
    </div>
  );
};

export default SliderPages;

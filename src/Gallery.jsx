import React, { useState } from "react";
import { Image, Transformation } from "cloudinary-react";
import styled from "styled-components";

export default function Gallery() {
  const images = ["dorcas_jirah_wedding.jpg", "valentines_day.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselHeight = 450;
  const Carousel = styled.div`
    background-color: pink;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  `;

  const handlePrev = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(images.length - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentImageIndex === images.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
      <Carousel>
        <Image
          publicId={images[currentImageIndex]}
          style={{ margin: "0 auto", display: "block" }}
        >
          <Transformation height={carouselHeight} crop="scale" />
        </Image>
      </Carousel>
    </>
  );
}

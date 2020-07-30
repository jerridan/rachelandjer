import React from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import Image from "./Image";
import images from "./images";

export default function ParallaxGallery() {
  return (
    <>
      {images.map((image, index) => (
        <ParallaxLayer offset={index + 1} speed={0.5}>
          <Image image={image} />
        </ParallaxLayer>
      ))}
    </>
  );
}

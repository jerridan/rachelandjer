import React from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import Image from "./Image";
import images from "./images";

export default function ParallaxGallery() {
  return (
    <>
      {images.map((image, index) => (
        <ParallaxLayer offset={index + 1.0} speed={1.0} key={index}>
          <Image image={image} />
        </ParallaxLayer>
      ))}
    </>
  );
}

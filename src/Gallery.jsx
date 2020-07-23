import React from "react";
import { CloudinaryContext, Image } from "cloudinary-react";

export default function Gallery() {
  return (
    <div>
      <CloudinaryContext
        cloudName={process.env.CLOUDINARY_CLOUD_NAME}
        crop="fill"
        gravity="faces"
        width="400"
        height="300"
        quality="100"
      >
        <Image publicId="dorcas_jirah_wedding.jpg" />
        <Image publicId="valentines_day.jpg" />
      </CloudinaryContext>
    </div>
  );
}

import React from "react";
import { Image, Transformation } from "cloudinary-react";

export default function Gallery() {
  return (
    <div>
      <Image
        cloudName={process.env.CLOUDINARY_CLOUD_NAME}
        publicId="dorcas_jirah_wedding.jpg"
      >
        <Transformation
          crop="fill"
          gravity="faces"
          width="400"
          height="300"
          quality="auto"
          fetchFormat="auto"
        />
      </Image>
    </div>
  );
}

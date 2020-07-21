import React, { useState, useEffect } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Dropbox } from "dropbox";
import isEmpty from "lodash/isEmpty";

export default function Gallery() {
  const [thumbnails, setThumbnails] = useState([]);

  const dbx = new Dropbox({
    accessToken: process.env.DROPBOX_ACCESS_TOKEN,
  });

  useEffect(() => {
    const fetchThumbnails = async () => {
      const result = await dbx.filesGetThumbnailBatch({
        entries: [
          {
            path: "/img_20200611_205538.jpg",
            format: "jpeg",
            size: "w128h128",
          },
        ],
      });

      setThumbnails(result.entries);
    };

    fetchThumbnails();
  }, []);

  if (isEmpty(thumbnails)) return null;

  return (
    <Carousel arrows dots>
      <div>
        <img src={`data:image/jpeg;base64, ${thumbnails[0].thumbnail}`} />
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
    </Carousel>
  );
}

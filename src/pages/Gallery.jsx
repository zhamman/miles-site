import React from "react";
import "./Gallery.scss";
import data from "../images/images";
import { motion } from "framer-motion";

const Gallery = () => {
  const leftChunk = [...data].splice(0, 13);
  const rightChunk = [...data].splice(13, 28);
  return (
    <div>
      <div className="gallery-container">
        <div className="title">
          <h1>Featured Works</h1>
        </div>
        <div className="gallery">
          <div className="gallery-left">
            {leftChunk.map((img, index) => {
              return (
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  key={index}
                  src={img.src}
                  alt={img.img}
                />
              );
            })}
          </div>
          <div className="gallery-right">
            {rightChunk.map((img, index) => {
              return (
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  key={index}
                  src={img.src}
                  alt={img.img}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

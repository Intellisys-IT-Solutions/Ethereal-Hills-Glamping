import React from "react";
import "./gallary.css";

const Gallery = ({ galleryItems, stayType }) => {
  return (
    <section id="gallery" className="modern-gallery3">
      <h1>{stayType} Gallery</h1>
      <p>Explore our beautiful accommodations.</p>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div key={index} className="galleryimg">
            <img src={item.image} alt={`Gallery Item ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

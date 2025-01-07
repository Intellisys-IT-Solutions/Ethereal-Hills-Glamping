import React from "react";
import "./curve.css"; // Add custom CSS for styling

// Import images from the assets folder
import tent1 from "../assets/tent1.jpg";
import tent2 from "../assets/tent1.jpg";
import tent3 from "../assets/tent1.jpg";
import tent4 from "../assets/tent1.jpg";
import tent5 from "../assets/tent1.jpg";
import tent6 from "../assets/tent1.jpg";

const Gallery = () => {
  const images = [tent1, tent2, tent3, tent4, tent5, tent6]; // Use imported images

  return (
    <div className="gallery-container">
      {images.map((img, index) => (
        <div key={index} id={`image-${index + 1}`} className="image-card">
          <img src={img} alt={`Gallery ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;

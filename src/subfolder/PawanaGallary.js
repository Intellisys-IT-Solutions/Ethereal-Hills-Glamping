import React from "react";
import "./pawanagallary.css";
//glam stay
import img1 from "../Assets/g1.jpeg";
import img2 from '../Assets/g2.jpeg';
import img3 from '../Assets/g5.jpeg';
import img4 from '../Assets/g4.jpeg';
import img5 from '../Assets/g4.jpeg';
import img6 from '../Assets/g6.jpeg';
import img7 from '../Assets/g7.jpeg';
import img8 from '../Assets/glam.jpg';
import img9 from '../Assets/glam2.jpg';
import img10 from '../Assets/tent6.avif';
import img11 from '../Assets/tent4.jpg';
import img12 from '../Assets/tent3.jpg';
import img13 from '../Assets/tent2.jpg';
import img14 from '../Assets/tent1.jpg';










// Array of gallery items
const galleryItems = [
  { image: img1, className: "" },
  { image: img2, className: "" },
  { image: img6, className: "" },
   { image: img5, className: "" },
  { image: img3, className: "tall" },
  { image: img4, className: "wide" },
  { image: img5, className: "" },
  { image: img6, className: "tall" },
  { image: img8, className: "" },
  { image: img7, className: "" },
  { image: img9, className: "" },
  { image: img10, className: "" },
  { image: img11, className: "" },
  { image: img12, className: "wide" },
  { image: img13, className: "" },
  { image: img14, className: "" },
  
];

function Gallery() {
  return (
    <section id="gallery" className="modern-gallery">
      <h1>Gallary</h1>
      <p>Experience the beauty through our lens.</p>
      <div className="gallery-grid">
        {/* Loop through galleryItems to display images */}
        {galleryItems.map((item, index) => (
          <div key={index} className={`galleryimg ${item.className}`}>
            <img src={item.image} alt={`Gallery Item ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;

// import React, { useState, useEffect } from "react";
// import pawana1 from "../assets/pawana1.jpg"; // Replace with your actual image paths
// import pawana2 from "../assets/pawana2.jpg";
// import pawana3 from "../assets/pawana3.jpg";
// import pawana from "../assets/pawana.jpg";
// import "../component/Intro.css";
// import "./welcome.css"; // Optional: For custom styling

// export default function IntroWelcome() {
//   const images = [pawana1, pawana2, pawana3];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-slide functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change image every 3 seconds
//     return () => clearInterval(interval);
//   }, [images.length]);

//   // Function to handle dot clicks
//   const handleDotClick = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div>
//       {/* Hero Section */}
//       <div
//         className="hero-section"
//         style={{ backgroundImage: `url(${images[currentIndex]})` }}
//       >
//         <div className="hero-content">
//           <p>Welcome To</p>
//           <h1>
//             PawnA LuxurY <br /> CottagE
//           </h1>
//           <button className="call-now">Book Now</button>
//         </div>
//       </div>

//       {/* Dots for navigation */}
//       <div className="dots-container">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             className={`dot ${index === currentIndex ? "active" : ""}`}
//             onClick={() => handleDotClick(index)}
//           ></div>
//         ))}
//       </div>

//       {/* Welcome Section */}
//       <div className="welcome-page-container">
//         <header className="welcome-page-header">
//           <h1>Welcome to Camp Explorer</h1>
//         </header>

//         <div className="welcome-page-content">
//           <div className="img-container">
//             <img
//               src={pawana}
//               alt="Beautiful campsite"
//               className="welcome-page-image"
//             />
//           </div>
//           <div className="para-container">
//             <p>
//               Today everyone is working day and night to earn money, so everyone
//               is living a stressful life. So if you are looking for different
//               tourist destinations to relieve your stress, then you are on the
//               right website. Because we have specially arranged camping for you
//               at Pawna Lake near Lonavala between Pune and Mumbai. Pawna Lake
//               Camping is 120 km from Mumbai and about 65 km from Pune. You can
//               reach Pawana Camping by your own car. If you do not have a car,
//               you can reach Lonavala by train. From there we can arrange a car
//               for you at an additional cost.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default IntroWelcome;
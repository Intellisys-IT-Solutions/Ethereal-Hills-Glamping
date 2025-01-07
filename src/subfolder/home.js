// import React, { useState, useEffect } from "react";
// import './home.css';

// // Nav ------------------------------------------
// import logo from "../Assets/logo.png";
// import "../component/Nav.css";
// import { Link } from "react-router-dom";

// // Intro ---------------------------------------
// import pawana1 from "../Assets/pawana1.jpg";
// import pawana2 from "../Assets/pawana2.jpg";
// import pawana3 from "../Assets/pawana3.jpg";
// import "../component/Intro.css";

// // Welcome --------------------------------------
// import pawana from '../Assets/pawana.jpg';
// import './welcome.css';

// // AboutUs --------------------------------------
// import "./aboutUs.css";
// import aboutImage from '../Assets/aboutp.webp';

// // Offers ---------------------------------------
// import "./offers.css";
// import campimg from '../Assets/camp.jpg';
// import peaceimg from '../Assets/peace.jpg';
// import viewImg from '../Assets/view.jpg';
// import bbqimg from '../Assets/bbq.jpg';
// import toiletimg from '../Assets/toilet.jpg';
// import aroundPuneImg from '../Assets/aroundpune.jpg';

// // Package --------------------------------------
// import "./package.css";
// import img123 from "../Assets/pawana1.jpg"; // Tent Stay - Image 1
// import img456 from "../Assets/pawana2.jpg"; // Tent Stay - Image 2
// import img789 from "../Assets/pawana3.jpg"; // Tent Stay - Image 3
// import img12 from "../Assets/pac1.jpg";    // Glam Stay - Image 1
// import img45 from "../Assets/pac2.jpg";    // Glam Stay - Image 2
// import img67 from "../Assets/camp.jpg";    // Glam Stay - Image 3






// function Home() {
//     //Nav------------------------------------------------------
//     const [showmenu, setmenu] = useState(false);

//     //Intro-----------------------------------------------------

//     const images = [pawana1, pawana2, pawana3];
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

//   //Packages------------------------------
//   // State for Tent Stay images
//   const [tentImageIndex, setTentImageIndex] = useState(0);
//   const tentImages = [img123, img456, img789];

//   // State for Glam Stay images
//   const [glamImageIndex, setGlamImageIndex] = useState(0);
//   const glamImages = [img12, img45, img67];
    

//     return (
//         <>
        
//         <div>
//       <nav className="navbar">
//         <img src={logo} alt="Logo" id="logo" />

        

//         <span className="desktopmenu">
//          {/* Book Now Button */}
//         <div className="book-btn">
//         <button className="book-now-btn">
//               <Link to="/Book" className="book-now-link">
//                 Book Now
//               </Link>
//             </button>
//           </div>
          
//           {/* Navigation Links */}
//           <Link
//             activeClass="active"
//             to="intro"
//             spy={true}
//             smooth={true}
//             offset={-100}
//             duration={500}
//             className="desktopmenuListitem"
//           >
//             Home
//           </Link>
//           <Link
//             activeClass="active"
//             to="portfolio"
//             spy={true}
//             smooth={true}
//             offset={-100}
//             duration={500}
//             className="desktopmenuListitem"
//           >
//             Contact Us
//           </Link>
//           <Link
//             activeClass="active"
//             to="aboutus"
//             spy={true}
//             smooth={true}
//             offset={-100}
//             duration={500}
//             className="desktopmenuListitem"
//           >
//             Blog
//           </Link>
//           <Link
//             activeClass="active"
//             to="login"
//             spy={true}
//             smooth={true}
//             offset={-100}
//             duration={500}
//             className="desktopmenuListitem"
//           >
            
//             Login
//           </Link>
//         </span>

//         <div className="navMenu" style={{ display: showmenu ? "flex" : "none" }}>
//           <Link
//             activeClass="active"
//             to="intro"
//             spy={true}
//             smooth={true}
//             offset={-100}
//             duration={500}
//             className="desktopmenuListitem"
//             onClick={() => setmenu(false)}
//           >
//             Home
//           </Link>
//           <Link
//             activeClass="active"
//             to="services"
//             spy={true}
//             smooth={true}
//             offset={-100}
//             duration={500}
//             className="desktopmenuListitem"
//             onClick={() => setmenu(false)}
//           >
//             Services
//           </Link>
//           <Link
//             activeClass="active"
//             to="portfolio"
//             spy={true}
//             smooth={true}
//             offset={-100}
//             duration={500}
//             className="desktopmenuListitem"
//             onClick={() => setmenu(false)}
//           >
//             Portfolio
//           </Link>
//           <Link
//             activeClass="active"
//             to="aboutus"
//             spy={true}
//             smooth={true}
//             offset={-100}
//             duration={500}
//             className="desktopmenuListitem"
//             onClick={() => setmenu(false)}
//           >
//             About
//           </Link>
//         </div>
//       </nav>
//     </div>







//     <div>
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
//     </div>







//     <div className="welcome-page-container">
//       <header className="welcome-page-header">
//         <h1>Welcome to Camp Explorer</h1>
//       </header>

//       <div className="welcome-page-content">
//         <div className="img-container">
//         <img src={pawana}
        
//            // Replace with a camping-related image URL
//           alt="Beautiful campsite"
//           className="welcome-page-image"
//         />
//         </div>
//         <div className="para-container">
//         <p>
//         Today everyone is working day and night to earn money, so everyone is living a stressful life. So if you are looking for different tourist destinations to relieve your stress, then you are on the right website. Because we have specially arranged camping for you at Pawna Lake near Lonavala between Pune and Mumbai. Pawna Lake Camping is 120 km from Mumbai and about 65 km from Pune. You can reach Pawana Camping by your own car. If you do not have a car, you can reach Lonavala by train. From there we can arrange a car for you at an additional cost.
//         </p>
//         </div>
//       </div>

    
//     </div>













//     <div className="about-container">
      
//       <img
//         src={aboutImage} // Replace with the URL of your image
//         alt="Camping Adventure"
//         className="about-image"
//       />
//       <div className="about-description-container">
//         <h1 className="about-heading">About Us</h1>
//         <p className="about-description">
//         Your retreat near Lonavala, Maharashtra! Imagine escaping the daily grind to unwind at the stunning Pawna Lake, a manmade marvel formed by the Pawna Dam.

// At Nirwana Stays, we offer more than just a getaway; it’s an experience. Picture a serene lake surrounded by mountains and forts like Lohgad and Tikona – a perfect blend of nature’s beauty and modern comfort.

// Our campsite is designed for a quick recharge. Engage in thrilling activities like paragliding or simply soak in the beauty of the lake during the monsoons.

// Comfort is our priority. Stay in spacious tents or luxury cottages with top-notch amenities. Indulge in snacks, a barbecue feast, and an unlimited dinner. Wake up to a wholesome breakfast that kick-starts your day.

// For adventure enthusiasts, engage in sports activities with family and friends right at our campsite. We prioritize your comfort, ensuring clean toilets and well-maintained facilities.

// As the sun sets, groove to live guitar music by the bonfire – a perfect way to unwind. Experience the warmth of the bonfire and the joy of shared moments. The Pawna Lake camping experience at Nirwana Stays is more than a holiday; it’s a journey into nature’s lap. Join us for an adventure filled with joy, relaxation, and delightful culinary experiences. Your nirwana is just a click away – where tranquility meets adventure at Nirwana Stays!
        
//         </p>
//       </div>
//     </div>











//     <div className="app">
//       <div className="hero">
    
//         <div className="feature-container">
//         <div class="section1">
//           <div className="feature">
//             <img src={campimg} alt="Lakeside Location" className="feature-img" />
//             <p>Lakeside Location</p>
//           </div>
//           <div className="feature">
//             <img src={peaceimg} alt="Peaceful Campsite" className="feature-img" />
//             <p>Peaceful Campsite</p>
//           </div>

//           <div className="feature">
//             <img src={viewImg} alt="very close the lake" className="feature-img" />
//             <p>Very Close To Lake</p>
//           </div> 
//           </div>
//           <div class="section2">
//           <div className="feature">
//             <img src={bbqimg} alt="BBQ Included" className="feature-img" />
//             <p>BBQ Included</p>
//           </div> <br />
//           <div className="feature">
//             <img src={toiletimg} alt="Western Toilets Available" className="feature-img" />
//             <p>Western Toilets Available</p>
//           </div>
//           <div className="feature">
//             <img src={aroundPuneImg} alt="Around 50km From Pune" className="feature-img" />
//             <p>Around 50km From Pune</p>
//           </div>
//           </div>
//         </div>
//       </div>
//     </div>









//     <div className="app">
//       <h1 className="heading">Our Packages</h1>
//       <div className="card-container horizontal">
//         {/* Card for Tent Stay */}
//         <div className="card">
//           <div className="card-image-container">
//             <button
//               className="carousel-button prev"
//               onClick={() =>
//                 setTentImageIndex(
//                   (tentImageIndex - 1 + tentImages.length) % tentImages.length
//                 )
//               }
//             >
//               &#8249;
//             </button>
//             <img
//               src={tentImages[tentImageIndex]}
//               alt="Tent Stay"
//               className="card-image"
//             />
//             <button
//               className="carousel-button next"
//               onClick={() =>
//                 setTentImageIndex((tentImageIndex + 1) % tentImages.length)
//               }
//             >
//               &#8250;
//             </button>
//             <div className="carousel-dots">
//               {tentImages.map((_, index) => (
//                 <span
//                   key={index}
//                   className={`dot ${
//                     index === tentImageIndex ? "active" : ""
//                   }`}
//                   onClick={() => setTentImageIndex(index)}
//                 ></span>
//               ))}
//             </div>
//           </div>
//           <div className="card-content">
//             <h2 className="card-title">Tent Stay</h2>
//             <p className="card-price">Starting From ₹2499 Per Person</p>
//             <button className="add-to-cart">BOOK NOW</button>
//           </div>
//         </div>

//         {/* Card for Glam Stay */}
//         <div className="card">
//           <div className="card-image-container">
//             <button
//               className="carousel-button prev"
//               onClick={() =>
//                 setGlamImageIndex(
//                   (glamImageIndex - 1 + glamImages.length) % glamImages.length
//                 )
//               }
//             >
//               &#8249;
//             </button>
//             <img
//               src={glamImages[glamImageIndex]}
//               alt="Glam Stay"
//               className="card-image"
//             />
//             <button
//               className="carousel-button next"
//               onClick={() =>
//                 setGlamImageIndex((glamImageIndex + 1) % glamImages.length)
//               }
//             >
//               &#8250;
//             </button>
//             <div className="carousel-dots">
//               {glamImages.map((_, index) => (
//                 <span
//                   key={index}
//                   className={`dot ${
//                     index === glamImageIndex ? "active" : ""
//                   }`}
//                   onClick={() => setGlamImageIndex(index)}
//                 ></span>
//               ))}
//             </div>
//           </div>
//           <div className="card-content">
//             <h2 className="card-title">Glam Stay</h2>
//             <p className="card-price">Starting From ₹3499 Per Person</p>
//             <button className="add-to-cart">BOOK NOW</button>
//           </div>
//         </div>
//       </div>
//     </div>















//         </>

//  )   
// };

// export default Home;
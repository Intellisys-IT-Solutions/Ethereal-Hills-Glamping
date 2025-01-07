import React, { useEffect, useState } from "react";

import "./facility.css";
import tentImage from "../Assets/tent.jpg";
import bonfireImage from "../Assets/bonfire.jpg";
import foodImage from "../Assets/food.jpg";
import scheduleMapImage from "../Assets/schedule-map.jpg";
import featuresImage from "../Assets/features.jpg";
import review1 from "../Assets/review1.jpg";
import review2 from "../Assets/review2.jpg";
import review3 from "../Assets/review3.jpg";

const Facility = () => {
  const [counters, setCounters] = useState({
    customers: 0,
    reviews: 0,
    years: 0,
    followers: 0,
  });

  useEffect(() => {
    const totalDuration = 2000; // Total duration for the animation in milliseconds
    const updateInterval = 50; // Update the counters every 50 milliseconds
    const steps = totalDuration / updateInterval; // Total number of updates
  
    const incrementValues = {
      customers: 40000 / steps, // Increment per step for customers
      reviews: 400 / steps, // Increment per step for reviews
      years: 5 / steps, // Increment per step for years
      followers: 100000 / steps, // Increment per step for followers
    };
  
    const interval = setInterval(() => {
      setCounters((prev) => ({
        customers: Math.min(prev.customers + incrementValues.customers, 40000),
        reviews: Math.min(prev.reviews + incrementValues.reviews, 400),
        years: Math.min(prev.years + incrementValues.years, 5),
        followers: Math.min(prev.followers + incrementValues.followers, 100000),
      }));
    }, updateInterval);
  
    return () => clearInterval(interval);
  }, []);

  const facilities = [
    {
      id: 1,
      title: "Spacious Tents",
      description: "Comfortable tents with cozy bedding to enjoy a restful night.",
      image: tentImage,
    },
    {
      id: 2,
      title: "Bonfire Experience",
      description:
        "Relax by the bonfire under the starry sky, perfect for group bonding.",
      image: bonfireImage,
    },
    {
      id: 3,
      title: "Delicious Meals",
      description:
        "Savor delicious meals with a mix of local and traditional flavors.",
      image: foodImage,
    },
  ];

  return (
    <div className="facility-page">
      <section className="facility-section">
        <h1 className="section-heading">Facilities at Pawana Lake Camping</h1>
        <div className="facility-grid">
          {facilities.map((facility) => (
            <div className="facility-card" key={facility.id}>
              <img
                src={facility.image}
                alt={facility.title}
                className="facility-image"
              />
              <div className="facility-info">
                <h2 className="facility-title">{facility.title}</h2>
                <p className="facility-description">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      

      <section className="schedule-section">
        <h1 className="section-heading">Our Schedule Map</h1>
        <img
          src={scheduleMapImage}
          alt="Schedule Map"
          className="schedule-image"
        />
      </section>

      {/* <section className="features-section">
        <h1 className="section-heading">Exciting Features</h1>
        <img src={featuresImage} alt="Features" className="features-image" />
      </section> */}

      <section className="counter-section">
        <h1 className="section-heading">Our Experience</h1>
        <div className="counter-container">
          <div className="counter-card">
            <h2 className="counter-value">{counters.customers}+</h2>
            <p className="counter-label">Satisfied Customers</p>
          </div>
          <div className="counter-card">
            <h2 className="counter-value">{counters.reviews}+</h2>
            <p className="counter-label">Google Reviews</p>
          </div>
          <div className="counter-card">
            <h2 className="counter-value">{counters.years}+</h2>
            <p className="counter-label">Years of Experience</p>
          </div>
          <div className="counter-card">
            <h2 className="counter-value">{counters.followers}+</h2>
            <p className="counter-label">Followers</p>
          </div>
        </div>
      </section>

      <section className="reviews-section">
  <h1 className="section-heading">What Our Guests Say</h1>
  <div className="reviews-container">
    <div className="review-box">
      <h3 className="review-name">Incredible Experience!</h3>
      <p className="review-text">
        "Camping at Pawna Lake was a surreal experience! The calm waters,
        stunning sunsets, and the serenity of the location made it
        unforgettable. Perfect for a weekend getaway."
      </p>
      <div className="review-stars">★★★★★</div>
    </div>
    <div className="review-box">
      <h3 className="review-name">Peaceful and Relaxing</h3>
      <p className="review-text">
        "If you're looking to escape the hustle of city life, Pawna Lake is the
        place to be. The tents were clean, the food was delicious, and the
        bonfire added a cozy vibe."
      </p>
      <div className="review-stars">★★★★★</div>
    </div>
    <div className="review-box">
      <h3 className="review-name">Memorable Night Under the Stars</h3>
      <p className="review-text">
        "Sleeping under the open sky and waking up to the lake's view was
        magical. The staff was friendly, and the entire setup was
        well-organized. Highly recommend!"
      </p>
      <div className="review-stars">★★★★★</div>
    </div>
    <div className="review-box">
      <h3 className="review-name">Great for Groups</h3>
      <p className="review-text">
        "Visited with a group of friends, and we had an amazing time! From
        singing around the bonfire to kayaking in the lake, every moment was
        fun and adventurous."
      </p>
      <div className="review-stars">★★★★★</div>
    </div>
    <div className="review-box">
      <h3 className="review-name">Perfect for Nature Lovers</h3>
      <p className="review-text">
        "The location is picturesque, surrounded by lush greenery and mountains.
        It’s an ideal spot for camping, stargazing, and unwinding in nature’s
        lap."
      </p>
      <div className="review-stars">★★★★★</div>
    </div>
    <div className="review-box">
      <h3 className="review-name">Good for Families</h3>
      <p className="review-text">
        "We went with our family, and it was a safe and enjoyable experience.
        The kids loved the outdoor games, and the food was simple yet tasty.
        Would love to visit again!"
      </p>
      <div className="review-stars">★★★★★</div>
    </div>
  </div>
</section>


      {/* Footer Component */}
      {/* <Footer /> */}
    </div>
  );
};

export default Facility;

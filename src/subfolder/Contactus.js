import React, { useState } from "react";
import "./Contactus.css";
// import facebook from "../Assets/facebook.png";
// import instagram from "../Assets/instagram.png";
// import logo from "../Assets/logo.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    let errorMessage = "";

    if (id === "name" && !/^[a-zA-Z\s]*$/.test(value)) {
      errorMessage = "Name can only contain alphabets and spaces.";
    } else if (id === "email" && value && !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)) {
      errorMessage = "Invalid email address.";
    } else if (id === "message" && !/^[a-zA-Z\s]*$/.test(value)) {
      errorMessage = "Message can only contain alphabets and spaces.";
    }

    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: errorMessage });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errors).some((error) => error) || !formData.name || !formData.email || !formData.message) {
      alert("Please fix the errors before submitting the form.");
    } else {
      alert("Form submitted successfully!");
      console.log("Form Data:", formData);
    }
  };

  return (
    <div>
      <section className="hb">
        <div className="hero-section">
          <nav className="hero-nav">
            <a href="/">Home</a>
            <a href="/create-account">Sign Up</a>
          </nav>
        </div>
      </section>

      <section className="contact-info">
        <div className="info2">
          <h1>Contact Us</h1>
        </div>
        <h2>Contact Info</h2>
        <ul>
          <li><strong>Email:</strong> example@example.com</li>
          <li><strong>Contact No:</strong> +123 456 7890</li>
          <li><strong>Address:</strong> 123 Main Street, City, Country</li>
        </ul>
      </section>

      <section className="contact-form">
        <h2>Feel Free to Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>

    </div>
  );
};

export default ContactUs;
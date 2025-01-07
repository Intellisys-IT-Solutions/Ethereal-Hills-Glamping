import React, { useState } from "react";
import "./book.css";
import tentLogo from "../Assets/tent.png"; // Import your image for tent logo
import domeLogo from "../Assets/tent.png"; // Import your image for dome logo
import tentShow from "../Assets/tent-show.png";
import tent from "../Assets/tent.jpg";
import tent1 from "../Assets/tent1.jpg";
import tent2 from "../Assets/tent2.jpg";


function Book({ stayType }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [errors, setErrors] = useState({});
  const [selectedTentRange, setSelectedTentRange] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTents, setSelectedTents] = useState([]);

  const handleTentSelect = (tentNumber) => {
    setSelectedTents((prevSelectedTents) =>
      prevSelectedTents.includes(tentNumber)
        ? prevSelectedTents.filter((tent) => tent !== tentNumber)
        : [...prevSelectedTents, tentNumber]
    );
  // };
  if (tentNumber >= 1 && tentNumber <= 15) setSelectedTentRange("range1");
    else if (tentNumber >= 16 && tentNumber <= 35) setSelectedTentRange("range2");
    else if (tentNumber >= 36 && tentNumber <= 50) setSelectedTentRange("range3");
    else if (tentNumber >= 51 && tentNumber <= 65) setSelectedTentRange("range4");
    else if (tentNumber >= 66 && tentNumber <= 80) setSelectedTentRange("range5");
  };

  const validateForm = (e) => {
    e.preventDefault();
    const errorMessages = {};
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phonePattern = /^[0-9]{10}$/;

    if (!firstName) {
      errorMessages.firstName = "First Name is required.";
    }

    if (!lastName) {
      errorMessages.lastName = "Last Name is required.";
    }

    if (!email || !emailPattern.test(email)) {
      errorMessages.email = "Please enter a valid email address.";
    }

    if (!phone || !phonePattern.test(phone)) {
      errorMessages.phone = "Please enter a valid 10-digit phone number.";
    }

    if (!checkIn) {
      errorMessages.checkIn = "Check-In date is required.";
    }

    if (!checkOut) {
      errorMessages.checkOut = "Check-Out date is required.";
    }

    if (selectedTents.length === 0) {
      errorMessages.selectedSeats = "Please select at least one seat.";
    }

    setErrors(errorMessages);

    if (Object.keys(errorMessages).length === 0) {
      // Save form data to localStorage
      const formData = {
        firstName,
        lastName,
        email,
        phone,
        checkIn,
        checkOut,
        selectedSeats: selectedTents,
      };

      localStorage.setItem("bookingData", JSON.stringify(formData));

      // Show success alert
      alert("Booking Successful!");

      // Clear the form data after submission
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setCheckIn("");
      setCheckOut("");
      setSelectedSeats([]);
      setSelectedTents([]);

      // Refresh the page
      window.location.reload();
    }
  };

  const handleSeatSelect = (seatNumber) => {
    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seatNumber)
        ? prevSeats.filter((seat) => seat !== seatNumber)
        : [...prevSeats, seatNumber]
    );
  };

  // Determine the logo based on stayType
  const getLogo = () => {
    if (stayType === "Tent Glam") {
      return tentLogo; // Use the tent logo for "Tent Glam"
    } else if (stayType === "Dome") {
      return domeLogo; // Use the dome logo for "Dome"
    }
    return tentLogo; // Default to the tent logo if stayType is unknown
  };

  return (
    <div className="book-container">
      <div className="form-container">
        <form onSubmit={validateForm}>
          
          <div className="logo-image-header">

          {/* Display the logo based on the stayType */}
          <div className="logo-container">
            <img src={getLogo()} alt={`${stayType} Logo`} className="logo" />
          </div>
          <div className="logo-header">
          <h3>Book Now - {stayType}</h3>
          </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                className="form-input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && <p className="error-message">{errors.firstName}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                className="form-input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && <p className="error-message">{errors.lastName}</p>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="1234567890"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-input"
              />
              {errors.phone && <p className="error-message">{errors.phone}</p>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="checkIn" className="form-label">
                Check-In
              </label>
              <input
                type="date"
                name="checkIn"
                id="checkIn"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="form-input"
              />
              {errors.checkIn && <p className="error-message">{errors.checkIn}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="checkOut" className="form-label">
                Check-Out
              </label>
              <input
                type="date"
                name="checkOut"
                id="checkOut"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="form-input"
              />
              {errors.checkOut && <p className="error-message">{errors.checkOut}</p>}
            </div>
          </div>

          {/* Display selected seats in the form */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="seatNumber" className="form-label">
                Selected Seats
              </label>
              <input
                type="text"
                name="seatNumber"
                id="seatNumber"
                value={selectedTents.join(", ")}
                readOnly
                className="form-input"
              />
              {errors.selectedSeats && <p className="error-message">{errors.selectedSeats}</p>}
            </div>
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>

      {/* Select Seats */}
      <div className="tent-curve-container">
        <div className="tent-booking-container">
          {/* Top Semi-Circle: Seats 1–40 */}
          <div className="curve top">
            {Array.from({ length: 40 }, (_, index) => (
              <button
                key={`seat-${index + 1}`}
                className={`tent-button ${
                  selectedTents.includes(index + 1) ? "selected" : ""
                }`}
                style={{
                  "--index": index,
                  "--angle-step": `${180 / 39}deg`,
                  "--radius": "190px",
                }}
                onClick={() => handleTentSelect(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* You can uncomment the bottom curve if needed */}
         <div className="curve bottom">
            {Array.from({ length: 40 }, (_, index) => (
              <button
                key={`seat-${index + 41}`}
                className={`tent-button2 ${
                  selectedTents.includes(index + 41) ? "selected" : ""
                }`}
                style={{
                  "--index": index,
                  "--angle-step": `${370 / 79}deg`,
                  "--radius": "100px",
                }}
                onClick={() => handleTentSelect(index + 41)}
              >
                {index + 41}
              </button>
            ))}
          </div>
              {/* Tent View Section */}
        <div className="tent-view">
         {selectedTentRange === "range1" && <img src = {tent} alt="Tent View 1" />}
         {selectedTentRange === "range2" && <img src={tent1} alt="Tent View 2" />}
         {selectedTentRange === "range3" && <img src={tent2} alt="Tent View 3" />}
         {selectedTentRange === "range4" && <img src={tent} alt="Tent View 4" />}
         {selectedTentRange === "range5" && <img src={tent1} alt="Tent View 5" />}
         </div>
        </div>
      </div>
    </div>
  );
}

export default Book;

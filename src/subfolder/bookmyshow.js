import React, { useState } from "react";
import "./bookmyshow.css";

const SeatRow = ({ row, selectedSeats, onSeatSelect }) => {
  return (
    <div className="seat-row">
      <h2>
        Row {row.id} - ₹{row.price}
      </h2>
      <div className="seats">
        {Array.from({ length: row.seats }).map((_, index) => {
          const seatNumber = `${row.id}${index + 1}`;
          const isSelected = selectedSeats.includes(seatNumber);
          return (
            <button
              key={seatNumber}
              className={`seat ${isSelected ? "selected" : ""}`}
              onClick={() => onSeatSelect(seatNumber)}
            >
              {seatNumber}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const Notification = ({ selectedSeats }) => {
  return (
    <div className="notification">
      <h2>Selected Seats:</h2>
      {selectedSeats.length > 0 ? (
        <ul>
          {selectedSeats.map((seat) => (
            <li key={seat}>{seat}</li>
          ))}
        </ul>
      ) : (
        <p>No seats selected yet.</p>
      )}
    </div>
  );
};

const BookMy = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const rows = [
    { id: "L", price: 500, seats: 9 },
    { id: "K", price: 300, seats: 15 },
    { id: "J", price: 300, seats: 15 },
    { id: "F", price: 250, seats: 14 },
    { id: "B", price: 230, seats: 7 },
  ];

  const handleSeatSelect = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  return (
    <div className="app">
      <h1>Seat Selection</h1>
      {rows.map((row) => (
        <SeatRow
          key={row.id}
          row={row}
          selectedSeats={selectedSeats}
          onSeatSelect={handleSeatSelect}
        />
      ))}
      <Notification selectedSeats={selectedSeats} />
    </div>
  );
};

export default BookMy;

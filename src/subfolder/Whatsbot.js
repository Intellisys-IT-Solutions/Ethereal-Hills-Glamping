import React, { useState } from "react";
import "./ChatBot.css"; // Add your CSS file for styles
// import { useNavigate } from 'react-router-dom';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);

  const appendMessage = (text, sender) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text, sender, id: Date.now() },
    ]);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const userMessage = e.target.chatInput.value.trim();
    if (userMessage) {
      appendMessage(userMessage, "user");
      setMenuVisible(true);
      e.target.chatInput.value = "";
    }
  };

  const showMenu = () => {
    appendMessage(
      <div className="menu">
        <button onClick={showPackages}>What are the packages?</button>
        <button onClick={() => showSubMenu("How to reach the location?")}>
          How to reach the location?
        </button>
        <button onClick={() => showSubMenu("What are the available activities?")}>
          What are the available activities?
        </button>
        <button onClick={() => showSubMenu("Are pets allowed?")}>
          Are pets allowed?
        </button>
        <button onClick={() => showSubMenu("What are the safety measures?")}>
          What are the safety measures?
        </button>
      </div>,
      "bot"
    );
  };

  const showPackages = () => {
    appendMessage(
      <div className="menu">
        <button onClick={() => showPackageDetails("Camp Stay")}>
          Camp Stay
        </button>
        <button onClick={() => showPackageDetails("Glamp Stay")}>
          Glamp Stay
        </button>
        <button onClick={() => showPackageDetails("Cottage Stay")}>
          Cottage Stay
        </button>
      </div>,
      "bot"
    );
  };

  const showPackageDetails = (packageName) => {
    let details;
    if (packageName === "Camp Stay") {
      details = `
        Camp Stay: ₹999
        Description: Meal + Tent Accommodation + Sports & Activities + Boating + Kayaking
        Timing: 4 PM Check-In and Check-Out 11 AM Next Day
        Duration: 19 Hours
        Distance: 27 From Lonavala, 70 Km from Pune, 125 Km from Mumbai
        Location: Lakeside
        Tent: Dome Tent
        Specialty: Free Kayaking & Boating
        Recommended For: Bachelors & Couples
      `;
    } else if (packageName === "Glamp Stay") {
      details = `
        Glamp Stay: ₹1,800
        Description: Meal + Ac Tent Accommodation + Sports & Activities
        Timing: 3:30 PM Check-In and Check-Out 11 AM Next Day
        Duration: 18 Hours
        Distance: 13 Km From Lonavala, 65 Km from Pune, 110 Km from Mumbai
        Location: Lakeside
        Tent: Premium Swiss Ac Tent
        Specialty: Lake View Balcony, AC, Attached Washrooms
        Recommended For: Couples & Families
      `;
    } else if (packageName === "Cottage Stay") {
      details = `
        Cottage Stay: ₹2,500
        Description: Meal + Accommodation + Kayaking + Sports & Activities
        Timing: 3:30 PM Check-In and Check-Out 11:30 AM Next Day
        Duration: 20 Hours
        Distance: 25 Km From Lonavala, 65 Km from Pune, 110 Km from Mumbai
        Location: Full View of Pawna Lake
        Cottage: Delta
        Specialty: Lake View Balcony, Fan, Attached Washrooms, Hot Shower
        Recommended For: Couples & Families
      `;
    }
    appendMessage(details, "bot");
  };

  const showSubMenu = (selectedOption) => {
    appendMessage(selectedOption, "user");
    appendMessage(
      <div className="menu">
        <button>Option 1 for {selectedOption}</button>
        <button>Option 2 for {selectedOption}</button>
        <button>Option 3 for {selectedOption}</button>
      </div>,
      "bot"
    );
  };

  return (
    <div className="chat-container">
      <div id="chat-body" className="chat-body">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message ${msg.sender}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="chat-input-container">
        <input
          type="text"
          id="chat-input"
          name="chatInput"
          placeholder="Type your message..."
        />
        <button id="send-button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatBot;

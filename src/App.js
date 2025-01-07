import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './subfolder/Login';
import Nav from './subfolder/Nav';
import Navbar from './subfolder/navbar';
import ContactUs from './subfolder/Contactus';
import Signup from './subfolder/Signup';
import AboutUs from './subfolder/About';
import HomeP from './subfolder/HomeP';
import Footer from './subfolder/Footer';
import Homed from './subfolder/Homed';
// import Popup from './subfolder/Popup';
import Package2 from './subfolder/package2'; // Import Package2
import Gallery from './subfolder/glam';
import glamG from './subfolder/glamG';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {/* Conditionally render Nav or Navbar */}
      {isLoggedIn ? <Navbar /> : <Nav />}
      
      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/" element={<HomeP />} /> {/* Public Home */}
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} /> {/* Login Page */}
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/create-account" element={<Signup />} />
            <Route path="/glam" element={<Gallery />} />
            
          </>
        ) : (
          <>
            <Route path="/" element={<Homed />} /> {/* Private Home */}
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/glam" element={<Gallery />} />
            <Route path="/glamG" element={<glamG />} />
          </>
        )}

<Route path="/package-details" element={<Package2 />} /> {/* Add route for Package2 */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
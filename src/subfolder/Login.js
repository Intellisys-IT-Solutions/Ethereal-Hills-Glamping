import React, { useState, useEffect } from 'react'; // Ensure useState and useEffect are imported
import { useNavigate } from 'react-router-dom'; // Ensure useNavigate is imported
import './Login.css';
import img1 from '../Assets/camping.jpg'; // Import your images correctly
import img2 from '../Assets/camping2.jpg';
import img3 from '../Assets/night.jpg';

const Login = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0); // Ensure currentIndex is declared
  const navigate = useNavigate(); // Ensure navigate is declared

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      if (storedUser.email === formData.email && storedUser.password === formData.password) {
        alert('Login successful!');
        setIsLoggedIn(true); // Update logged-in state
        navigate('/'); // Redirect to home
      } else {
        alert('Invalid email or password');
      }
    } else {
      alert('User does not exist. Please sign up.');
    }
  };

  const images = [img1, img2, img3]; // Ensure images are declared properly

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="login-container">
      <div className="login-image">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={index === currentIndex ? 'active' : 'inactive'}
          />
        ))}
      </div>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <h2>Log In</h2>
          <div className="form-group">
            <label htmlFor="email">Contact/Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="Enter your password"
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <div className="links">
            <a href="/forgot-password">Forgot password?</a>
            <a onClick={() => navigate('/create-account')} className="create-account-link">Create account</a>
          </div>
          <button type="submit" className="login-button">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

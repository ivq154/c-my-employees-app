import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactUs({ isLoggedIn }) {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Error checking
    const formErrors = {};
    const username = event.target.username.value.trim();
    const password = event.target.password.value.trim();
    const email = event.target.email.value.trim();

    if (!username) {
      formErrors.username = "Username is required.";
    }
    if (!password) {
      formErrors.password = "Password is required.";
    }
    if (!email) {
      formErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formErrors.email = "Please enter a valid email address.";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setSubmitted(true);
      if (isLoggedIn) {
        setTimeout(() => {
          navigate('/dashboard'); // Redirect to dashboard
        }, 2000); // Delay for user to see the message
      }
    }
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us at contact@shopies.com.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
          {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {submitted && !isLoggedIn && (
        <p>Thank you for contacting us. Only logged-in users can access the dashboard.</p>
      )}
      {submitted && isLoggedIn && (
        <p>Great! Now you can access our dashboard.</p>
      )}
    </div>
  );
}

export default ContactUs;

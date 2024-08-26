import React, { useState } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import logo from './logo.jpg';
import './App.css';
import Login from './login';
import Dashboard from './dashboard';
import ContactUs from './contact';
import CopyWrite from './CopyWrite';
import PrivacyPolicy from './PrivacyPolicy';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';

function App() {
  const [infoVisible, setInfoVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('adminAuthToken', 'some-auth-token');
    navigate('/AdminDashboard');
  };

  const toggleInfo = () => {
    setInfoVisible(!infoVisible);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Shopies logo" />
        <h1>Welcome to our Shopies Website</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/AdminDashboard">Admin Dashboard</Link></li>
            <li><Link to="/CopyWrite">CopyWrite</Link></li>
            <li><Link to="/PrivacyPolicy">Privacy Policy</Link></li>
          </ul>
        </nav>

        <div>
          <input
            type="text"
            placeholder="Search..."
          />
        </div>
      </header>

      <h1>Welcome to the Shopies Company</h1>

      <button onClick={toggleInfo}>
        {infoVisible ? 'Hide Information' : 'Show Information'}
      </button>

      {infoVisible && (
        <p>
          The name of our company is Shopies Company. Our company aims to deliver goods at the minimum price. Our company was established in 2024. The mission of our company is to provide all the goods to all the people and make our website also accessible to visually impaired people. The future vision of our company is to work with AI to give the best facilities to almost all the people.
          Our company was established in 2024 to give the best online shopping experience to the people. 
          The mission of our company is to provide all the facilities to all the people ranging from price rates to accessibility. 
          The future vision of our company is to provide AI facilities and to make the work of the people easier. The future vision is to take our shopping website to the top 5 level in the world.
        </p>
      )}

      <main>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/CopyWrite" element={<CopyWrite />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
      </main>

      <footer> 
        <nav>
          <a href="#">© 2024 Shopies company</a>
        </nav>
      </footer> 
    </div>
  );
}

export default App;

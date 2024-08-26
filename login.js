import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [emailID, setEmailID] = useState('');
  const [password, setPassword] = useState('');
  const [showEmailID, setShowEmailID] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const emailIDRef = useRef(null);
  const passwordRef = useRef(null);
  const loginButtonRef = useRef(null);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setShowEmailID(e.target.value.trim() !== '');
    setShowPassword(e.target.value.trim() !== '' && emailID.trim() !== '');
  };

  const handleEmailIDChange = (e) => {
    setEmailID(e.target.value);
    setShowPassword(e.target.value.trim() !== '');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you might want to add validation logic
    console.log(`Logging in:\nUsername: ${username}\nEmail ID: ${emailID}\nPassword: ${password}`);
    navigate('/dashboard');
  };

  const handleKeyDown = (e, nextField, prevField) => {
    if (e.key === 'Enter') {
      nextField ? nextField.focus() : e.target.blur();
    } else if (e.key === 'ArrowDown' && nextField) {
      nextField.focus();
    } else if (e.key === 'ArrowUp' && prevField) {
      prevField.focus();
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            onKeyDown={(e) => handleKeyDown(e, emailIDRef.current, null)}
            aria-label="Username"
            required
          />
        </div>
        {showEmailID && (
          <div>
            <label htmlFor="emailID">Email ID:</label>
            <input
              type="email"
              id="emailID"
              value={emailID}
              onChange={handleEmailIDChange}
              onKeyDown={(e) => handleKeyDown(e, passwordRef.current, document.getElementById('username'))}
              aria-label="Email ID"
              ref={emailIDRef}
              required
            />
          </div>
        )}
        {showPassword && (
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              onKeyDown={(e) => handleKeyDown(e, loginButtonRef.current, emailIDRef.current)}
              aria-label="Password"
              ref={passwordRef}
              required
            />
          </div>
        )}
        <button type="submit" ref={loginButtonRef}>Login</button>
      </form>
      {/* Display entered information */}
      <div>
        <p><strong>Username:</strong> {username}</p>
        <p><strong>Email ID:</strong> {emailID}</p>
        <p><strong>Password:</strong> {password}</p>
      </div>
    </div>
  );
};

export default Login;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

ReactDOM.render(
  <Router> {/* Wrap App with Router */}
    <App />
  </Router>,
  document.getElementById('root')
);

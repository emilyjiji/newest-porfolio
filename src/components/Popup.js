import React from 'react';
import './Popup.css';

const Popup = ({ title, description, onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;

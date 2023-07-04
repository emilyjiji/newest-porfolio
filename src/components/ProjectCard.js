import React, { useState, useEffect } from 'react';
import './ProjectCard.css';
import Popup from './Popup';


export default function ProjectCard({ title, description }) {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <div className="project-card bg-white rounded-md shadow-md p-4 mr-4" onClick={togglePopup}>
      <h3 className="text-lg font-semibold mb-2 text-blue-900">{title}</h3>
      <p className="text-gray-700">
        {description}
        {isPopupOpen && (
        <Popup title={title} description={description} onClose={togglePopup} />
      )}
      </p>
    </div>
  );
}






import React, { useState, useEffect } from 'react';
import './ProjectCard.css';
import Popup from './Popup';

export default function ProjectCard({ title, description, interests, technology, image, links }) {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  // Dummy image URL
  const dummyImage = 'https://via.placeholder.com/300';

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg project-card">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={image || dummyImage} alt={title} />
        <div className="absolute bottom-0 left-0 bg-white p-2">{title}</div>
      </div>
      <div className="px-6 py-4">
        <p className="text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {interests.map((interest, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
            #{interest}
          </span>
        ))}
      </div>
      <div className="px-6 pb-2">
        {technology.map((tech, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-blue-500">
            #{tech}
          </span>
        ))}
      </div>
      <div className="px-6 pt-2 pb-4">
        {links.map((link, index) => (
          <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-blue-500">
            Link {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
}







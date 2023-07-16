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
    <div className="relative w-full">
      <img className="w-full h-48 object-cover rounded-t" src={image || dummyImage} alt={title} />
      <div className="font-bold mb-1 px-6 bt-3 pt-2 text-left" style={{ color: 'rgb(25, 42, 86)', paddingLeft: '24px' }}>{title}</div>
    </div>
    <div className="px-6 py-4 text-left" style={{ opacity: 0.8, color: 'rgb(25, 42, 86)' }} >
      <p className="text-sm" >{description}</p>
    </div>
      <div className="px-6 pt-4 pb-2">
        {interests.map((interest, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2" style={{color: 'rgb(25, 42, 86)'}}>
            #{interest}
          </span>
        ))}
      </div>
      <div className="px-6 pb-2">
        {technology.map((tech, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2" style={{color: 'rgb(25, 42, 86)'}}>
            #{tech}
          </span>
        ))}
      </div>
      {/* <div className="px-6 pt-2 pb-4">
        {links.map((link, index) => (
          <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2" style={{color: 'rgb(25, 42, 86)'}}>
            Link {index + 1}
          </a>
        ))}
      </div> */}
    </div>
  );
}







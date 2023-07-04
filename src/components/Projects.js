import React, { useState, useEffect } from 'react';
import './Projects.css';
import DottedRectangularLine from './DottedRectangularLine';

export default function Projects() {
  const [selectedCircles, setSelectedCircles] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleCircleClick = (text) => {
    // Check if the clicked circle is already selected
    if (selectedCircles.includes(text)) {
      setSelectedCircles(selectedCircles.filter((circle) => circle !== text));
    } else {
      setSelectedCircles([...selectedCircles, text]);
    }
  };


  const renderCircles = (count, texts) => {
    const circles = [];
    for (let i = 0; i < count; i++) {
      const text = texts[i];
      const isSelected = selectedCircles.includes(text);
  
      circles.push(
        <div
          className={`circle${isSelected ? ' selected' : ''}`}
          onClick={() => handleCircleClick(text)}
          key={i}
        >
          <div className="circle-text">{text}</div>
        </div>
      );
    }
    return circles;
  };
  
  

  const interestTexts = ['Sustainability', 'Finance', 'Design'];
  const technologyTextsRow1 = ['Python', 'Angular', 'ML/AI', 'React', 'HTML/CSS'];
  const technologyTextsRow2 = ['C++', 'Java', 'TypeScript'];

  return (
    <div className="projectPage">
      <div className="interests">
        <div className="title">
          <h3>Interests</h3>
          <div className="circles">
            <br />
            <br />
            {renderCircles(3, interestTexts)}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="technology">
        <div className="title">
          <h3>Technology</h3>
          <div className="circles">
            <div className="row">
              {renderCircles(5, technologyTextsRow1)}
            </div>
            <div className="row">
              {renderCircles(3, technologyTextsRow2)}
            </div>
          </div>
          <div className="line-wrap">
          <div className="line-wrap">
  <DottedRectangularLine selectedCircles={selectedCircles} />
</div>
          </div>
        </div>
      </div>
    </div>
  );
}

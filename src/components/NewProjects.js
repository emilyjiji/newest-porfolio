import React, { useState, useEffect } from 'react';
import './NewProjects.css';
import DottedRectangularLine from './DottedRectangularLine';

export default function NewProjects() {
    const [selectedCircles, setSelectedCircles] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    const interestTexts = ['Sustainability', 'Finance', 'Design'];
    const technologyTextsRow1 = ['Python', 'Angular', 'ML/AI', 'React', 'HTML/CSS'];
    const technologyTextsRow2 = ['C++', 'Java', 'TypeScript'];

    const renderCircles = (count, texts) => {
        const circles = [];
        for (let i = 0; i < count; i++) {
            const text = texts[i];
            const isSelected = selectedCircles.includes(text);

            circles.push(
                <div
                    className={`circle${isSelected ? ' selected' : ''}`}
                    // onClick={() => handleCircleClick(text)}
                    key={i}
                >
                    <div className="circle-text">{text}</div>
                </div>
            );
        }
        return circles;
    };

    return (
        <div className="allProjects">
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
        </div>
    );
}
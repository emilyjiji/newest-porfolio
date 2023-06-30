import DottedRectangularLine from './DottedRectangularLine';
import './Projects.css';
import React from 'react';


export default function Projects() {
  // Define your projects data or fetch it from an API

  const renderCircles = (count, texts) => {
    const circles = [];
    for (let i = 0; i < count; i++) {
      circles.push(
        <div className="circle" key={i}>
          <div className="circle-text">{texts[i]}</div>
        </div>
      );
    }
    return circles;
  };

  const interestTexts = ['Interest 1', 'Interest 2', 'Interest 3'];
  const technologyTextsRow1 = ['Technology 1', 'Technology 2', 'Technology 3', 'Technology 4', 'Technology 5'];
  const technologyTextsRow2 = ['Technology 6', 'Technology 7', 'Technology 8'];

  return (
    <div>
      <div className='interests'>
        <div className='title'>
          <h3>Interests</h3>
          <div className="circles">
            {renderCircles(3, interestTexts)}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='technology'>
        <div className='title'>
          <h3>Technology</h3>
          <div className="circles">
            <div className="row">
              {renderCircles(5, technologyTextsRow1)}
            </div>
            <div className="row">
              {renderCircles(3, technologyTextsRow2)}
            </div>
          </div>
          <div className='line-wrap'>
            {/* <div className="line"></div> Add the line element here */}
            <DottedRectangularLine />
            {/* <div className="vertical-line left"></div>
            <div className="vertical-line right"></div> */}
          </div>
        </div>
      </div>

    </div>
  );
}


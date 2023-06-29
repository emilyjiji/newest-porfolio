import './Projects.css';
import React from 'react';

export default function Projects() {
  // Define your projects data or fetch it from an API

  const renderCircles = (count) => {
    const circles = [];
    for (let i = 0; i < count; i++) {
      circles.push(
        <div className="circle" key={i}></div>
      );
    }
    return circles;
  };

  return (
    <div>
      <div className='interests'>
        <div className='title'>
          <h3>Interests</h3>
          <div className="circles">
            {renderCircles(3)}
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
      <br />
      <br />
      <br />
      <br />
      <div className='technology'>
        <div className='title'>
          <h3>Technology</h3>
          <div className="circles">
            <div className="row">
              {renderCircles(5)}
            </div>
            <div className="row">
              {renderCircles(3)}
            </div>
          </div>
        </div>
</div>


    </div>
  );
}

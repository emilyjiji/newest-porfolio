import React from 'react';
import './Home.css';

export default function Home() {
    return (
        <div className='content'>
            <div className='home-body'>
                <div>
                    <p>Hello! I’m Emily Jiji, a passionate computer science student
                        at the University of Florida. <br />

                        My mission is to leverage technology to solve real-world problems and make a positive impact. <br /><br />

                        I have a keen interest in the following areas:</p>
                </div>
            </div>
            <div className="circles">
                <div className="circle">
                    <div className='txt'>
                        Sustainability
                        <br />
                        <br />
                        <br />
                        <br />
                        I believe in creating a greener future by
                        developing innovative solutions that address environmental challenges.
                    </div>
                </div>
                <div className="circle">
                    <div className='txt'>
                        Finance
                        <br />
                        <br />
                        <br />
                        <br />
                        I’m fascinated by the intersection of technology and finance, and how it can revolutionize the way we manage and optimize financial systems.
                    </div> 
                </div>
                <div className="circle">
                    <div className='txt'>
                        Design
                        <br />
                        <br />
                        <br />
                        <br />
                        I have a strong appreciation for user-centric design and strive to create intuitive and visually appealing experiences.
                    </div>
                </div>
            </div>
        </div>

    );

}

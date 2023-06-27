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
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>

    );

}

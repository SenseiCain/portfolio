import React, { useEffect } from 'react';
import Typed from 'typed.js';

const Mission = () => {
    useEffect(() => {
        const options = {
            strings: ['Front End development', 'creating APIs', 'Back End development', 'deployment', 'serverless applications', 'wireframing', 'scripting', 'database management', 'MVC'],
            typeSpeed: 80,
            backSpeed: 60,
            delay: 20,
            cursorChar: '',
            loop: true,
            loopCount: Infinity
        };
        
        new Typed('#typed', options);
    }, [])

    return (
        <div id="mission" className="wrapper-inside">
            <p>
                Creative young professional with a knack for tinkering and solving problems.
                I am a <span>Flatiron School</span> graduate with a strong focus in   
                <div id='typed'></div>
            </p>
        </div>
    )
}

export default Mission;
import React, { Component } from 'react';
import profile from '../images/profile.jpeg';

class AboutContainer extends Component {
    render() {
        return (

            <section id="about" className="wrapper-inside">
                <div className="page-inner">
                    <h1>Christian Cain</h1>
                    <div id="about-content">
                        <img src={profile} alt="" />
                        <div>
                            <p>
                                I'm an innately curious person,
                                who's always been fascinated by whats possible with software & a little imagination.
                                I chose to pursue career in software engineering because it
                                combines my interest of analytical thinking & creativity in a meaningful way.
                            </p>
                            <p>
                                When I'm not buried in front of a computer
                                I'm either hiking trails, skateboarding, or cooking new recipes.
                            </p>
                            <ul>
                                <li>
                                    <a className="clickable" href="https://github.com/SenseiCain" target="_blank" rel="noopener noreferrer">
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a className="clickable" href="https://www.linkedin.com/in/christian-cain-805796155/" target="_blank" rel="noopener noreferrer">
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a className="clickable" href="https://learn.co/christiancain/resume" target="_blank" rel="noopener noreferrer">
                                        Resume
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutContainer;
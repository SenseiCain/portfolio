import React, { Component } from 'react';
import profile from '../images/profile.jpeg';

class Bio extends Component {
    render() {
        return (
            <div>
                <div id="bio-container">
                    <div id="bio-left">
                        <h1>Christian Cain</h1>
                        <p>
                            I'm an innately curious person,
                            who's always been fascinated with the boundlessness of software.
                            When I'm not buried in front of a computer,
                            I'm either hiking trails, skateboarding, or cooking new recipes.
                            Feel free to reach out if you find my experience to be a fit.
                            Thanks!
                        </p>
                        <ul>
                            <li>
                                <a href="https://github.com/SenseiCain" target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/christian-cain-805796155/" target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/SenseiCain" target="_blank" rel="noopener noreferrer">
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="bio-right">
                        <div id="bio-image">
                            <img src={profile} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bio;
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
                            Adventurous young professional with innate curiousity.
                            When I'm not buried in front of a computer,
                            I enjoy hiking trails, skateboarding, and trying new recipes.
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
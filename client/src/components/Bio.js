import React, { Component } from 'react';

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
                            I'm currently seeking a new challenge in the field of Software Engineering.
                        </p>
                        <ul>
                            <li>
                                <a href="https://github.com/SenseiCain" target="_blank">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/christian-cain-805796155/" target="_blank">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank">
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="bio-right">
                        <div id="bio-image">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bio;
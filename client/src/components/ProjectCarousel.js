import React, { Component } from 'react';
import ProjectInfo from './ProjectInfo';
import { ReactComponent as MacSVG } from '../images/mac.svg';
import { ReactComponent as LeftArrow } from '../images/left-arrow.svg';
import { ReactComponent as RightArrow } from '../images/right-arrow.svg';

class ProjectCarousel extends Component {
    constructor() {
        super();
        this.state = {
            active: 1,
            project: {
                title: "Clickyz",
                description: "Interactive mechanical keyboard editor. This was a personal project of mine portraying my appreciation of handmade things. It was a deep dive into the fundamentals of Sinatra, and a long rabbit hole into the wonders of JS.",
                img: '',
                tech: ["Sinatra", "WEBGL", "p5.js"],
                links: {
                    heroku: "https://www.youtube.com",
                    github: "https://github.com/SenseiCain/clickyz"
                }
            }
        }
    }

    handleClick = () => {
        if (this.state.active === 1) {
            this.setState({
                active: 2,
                project: {
                    title: "HearthStone Deck Builder",
                    description: "This is a project that I made yada yada yada....",
                    img: '',
                    tech: ["Rails", "API", "SPA"],
                    links: {
                        heroku: "https://www.youtube.com",
                        github: "https://github.com/SenseiCain/hearthstone-deck-builder"
                    }
                }
            })
        } else {
            this.setState({
                active: 1,
                project: {
                    title: "Clickyz",
                    description: "Interactive mechanical keyboard editor. This was a personal project of mine portraying my appreciation of handmade things. It was a deep dive into the fundamentals of Sinatra, and a long rabbit hole into the wonders of JS.",
                    img: '',
                    tech: ["Sinatra", "WEBGL", "p5.js"],
                    links: {
                        heroku: "https://www.youtube.com",
                        github: "https://github.com/SenseiCain/clickyz"
                    }
                }
            })
        }
    }

    render() {
        return (
            <div id="carousel-container">
                <div id="arrow-left">
                    <LeftArrow 
                        className="svg-arrow"
                        onClick={this.handleClick}
                    />
                </div>
                <div id="carousel-main">
                    <div id="carousel-inside">
                        <div id="carousel-computer">
                            <MacSVG className="svg-mac" />
                        </div>
                        <ProjectInfo project={this.state.project} />
                    </div>
                </div>
                <div id="arrow-right" >
                    <RightArrow 
                        className="svg-arrow"
                        onClick={this.handleClick}
                    />
                </div>
            </div>

        )
    }
}

export default ProjectCarousel;
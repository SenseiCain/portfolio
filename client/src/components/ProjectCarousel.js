import React, { Component } from 'react';
import ProjectInfo from './ProjectInfo';
import { ReactComponent as MacSVG } from '../images/mac.svg';
import { ReactComponent as LeftArrow } from '../images/left-arrow.svg';
import { ReactComponent as RightArrow } from '../images/right-arrow.svg';

class ProjectCarousel extends Component {
    handleNext = () => {
        this.props.nextProject();
    }

    handlePrevious = () => {
        this.props.prevProject();
    }

    render() {
        return (
            <div id="carousel-container">
                <div id="arrow-left">
                    <LeftArrow 
                        className="svg-arrow"
                        onClick={this.handlePrevious}
                    />
                </div>
                <div id="carousel-main">
                    <div id="carousel-inside">
                        <div id="carousel-computer">
                            <MacSVG className="svg-mac" />
                        </div>
                        <ProjectInfo project={this.props.projects[this.props.activeIndex]} />
                    </div>
                </div>
                <div id="arrow-right" >
                    <RightArrow 
                        className="svg-arrow"
                        onClick={this.handleNext}
                    />
                </div>
            </div>

        )
    }
}

export default ProjectCarousel;
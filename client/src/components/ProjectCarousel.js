import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ProjectInfo from './ProjectInfo';
import Mac from './Mac';
import { ReactComponent as LeftArrow } from '../images/left-arrow.svg';
import { ReactComponent as RightArrow } from '../images/right-arrow.svg';

class ProjectCarousel extends Component {
    constructor() {
        super();
        this.state = {
            direction: "right"
        }
    }

    handleNext = () => {
        this.setState({ direction: "right" });
        this.props.nextProject();
    }

    handlePrevious = () => {
        this.setState({ direction: "left" });
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
                            <Mac 
                                src={this.props.project.img} 
                                activeIndex={this.props.activeIndex}
                                direction={this.state.direction} />
                        </div>
                        <TransitionGroup 
                            id="carousel-info">
                            <CSSTransition
                                classNames="fadeDrop"
                                key={this.props.activeIndex} 
                                timeout={400}>
                                <ProjectInfo project={this.props.project} />
                            </CSSTransition>
                        </TransitionGroup>
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
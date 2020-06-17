import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Mac = props => {
    return (
        <svg className="svg-mac" viewBox="0 0 100 83" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve">
            <path id="monitor" d="M99.981,2.312C99.884,1.021 98.816,0 97.5,0L2.5,0C1.184,0 0.116,1.021 0.019,2.312L0,66.5C0,67.881 1.119,69 2.5,69L97.5,69C98.881,69 100,67.881 100,66.5L99.981,2.312ZM96,57L4,57L4,4L96,4L96,57Z"/>
            <path id="base" d="M66,81C62,80 61,77 61,73L61,72L39,72L39,73C39,77 38,80 34,81C33.03,81.242 33,83 34,83L66,83C67,83 66.97,81.242 66,81Z"/>
            <foreignObject id="screen" x="4" y="4" width="92" height="53" >
                <TransitionGroup>
                    <CSSTransition
                        classNames={props.direction}
                        timeout={400}
                        key={props.activeIndex}>
                            <img src={props.src} alt="" />
                        </CSSTransition>
                </TransitionGroup>
                
            </foreignObject>
        </svg>
    )
}

export default Mac;
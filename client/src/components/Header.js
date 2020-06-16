import React, { Component } from 'react';
import { ReactComponent as PersonSVG } from '../images/person-at-computer-v2.svg';
import { ReactComponent as LampSVG} from '../images/lamp.svg';
import { ReactComponent as SkateboardSVG } from '../images/skateboard.svg';

class Header extends Component {

    componentDidMount() {
        // Normalize SVG to match color theme
        // For dev purposes
        const accentEls = [
            ...document.querySelectorAll(".mug-item"),
            document.querySelectorAll(".skateboard-item")[0]
        ];
        accentEls.forEach(el => el.style.fill = "var(--accent-color)");
    
        const primaryEls = [ ...document.querySelectorAll(".shirt-item") ];
        primaryEls.forEach(el => {
            el.style.fill = "var(--primary-color)"
            el.style.stroke = "var(--primary-color)"
        });
    
        const seoncdaryEls = [ 
            ...document.querySelectorAll(".laptop-item"),
            document.querySelectorAll(".skateboard-item")[1],
            ...document.querySelectorAll(".light-item"),
            document.querySelector(".chair-item")
        ];
        seoncdaryEls.forEach(el => el.style.fill = "var(--secondary-color)");
    
        const lightEls = [
            ...document.querySelectorAll(".lamp-arm-item"),
            ...document.querySelectorAll(".face-item"),
            document.querySelector(".desk-item")
        ];

        lightEls.forEach(el => {
            el.style.fill = "var(--light-color)";
            el.style.stroke = "var(--light-color)";
        })
    }

    render() {
        return (
            <div className="wrapper">
                <div className="header-container">
                    <SkateboardSVG className="svg-skateboard-1" />
                    <SkateboardSVG className="svg-skateboard-2" />
                    <PersonSVG className="svg-person" />
                    <LampSVG className="svg-lamp" />
                </div>
            </div>
        )
    }
}

export default Header;
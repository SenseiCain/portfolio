import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    componentDidMount() {
        const navbar = document.getElementById("navbar");
        const sticky = navbar.offsetTop;

        window.onscroll = () => {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky");

                if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                    document.body.style.marginTop = `${(navbar.clientHeight)}px`;
                }
                
            } else {
                navbar.classList.remove("sticky");

                if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                    document.body.style.marginTop = "0px";
                }
            }
        };
    }

    render() {
        return (
            <nav id="navbar">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                    </ul>
            </nav>
        )
    } 
}

export default NavBar;
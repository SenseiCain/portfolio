import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    componentDidMount() {
        const navbar = document.getElementById("navbar");
        const sticky = navbar.offsetTop;

        window.onscroll = () => {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
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
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
            </nav>
        )
    } 
}

export default NavBar;
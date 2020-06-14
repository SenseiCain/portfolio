import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    componentDidMount() {
        const navbar = document.getElementById("nav-container");
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
            <div id="nav-container" className="nav-container">
                <nav className="wrapper">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="Blog">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Contact">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    } 
}

export default NavBar;
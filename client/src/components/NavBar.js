import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}

export default NavBar;
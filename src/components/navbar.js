import React from 'react';
import {Nav, NavLink,  NavMenu} from './NavbarStyle';
import "../index.css";
const Navbar = () => {
    return (
        <React.Fragment>
            <h1 class="Kadal">UMovieNation Kadal</h1>
            <Nav>  

                <NavMenu>
                <NavLink to="/home" >
                   <span>Home</span> 
                </NavLink>
                <NavLink to="/favorite">
                    <span>Top Rated Movie</span>
                </NavLink>
                <NavLink to="/watchList">
                    <span>Your WatchList</span>
                </NavLink>
                <NavLink to="/about" >
                    <span>About Us</span> 
                </NavLink>
                </NavMenu>
            </Nav>
        </React.Fragment>
    );
};

export default Navbar;
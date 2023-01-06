import React from 'react';
import "./Header.css";
import img from "../../images/favicon.ico"

const Header = () => {
    return (
        <div className='nav-container'>
            <nav className='header'>
                <img src={img} alt="" />
                <div className='nav-link'>
                    <a href="abc">shop</a>
                    <a href="abc">cart</a>
                    <a href="abc">about</a>
                    <a href="abc">contact</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;
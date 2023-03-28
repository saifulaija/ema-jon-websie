

import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header'>
            <img src= {logo} alt="" />
            <div>
                <a style={{textDecoration:'none', color:'white',}} href="#shop">Shop</a>
                <a style={{textDecoration:'none', color:'white', marginLeft:'20px'}}   href="#order">Order</a>
                <a style={{textDecoration:'none', color:'white', marginLeft:'20px'}}  href="#inventory">Inventory</a>
                <a style={{textDecoration:'none', color:'white', marginLeft:'20px'}}   href="#login">Login</a>
            </div>
        </nav>
    );
};

export default Header;
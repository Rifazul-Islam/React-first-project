import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <div className='text-style'>
                <h1> New Brand </h1>

            </div>

            <nav className='navber'>
                <a href="/home">Home</a>
                <a href="/foods">Foods</a>
                <a href="/component">Component</a>
                <a href="/about"> About</a>
            </nav>

        </div>
    );
};

export default Header;
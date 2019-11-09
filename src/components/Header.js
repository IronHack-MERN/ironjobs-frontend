import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import '../css/Header.scss';

const Header = () => {
    return (
        <div>
            <header>
                <Link className='headr' to='/' style={{ textDecoration: 'none' }}>
                    <img src={logo} alt='iron-beer-logo' />
                </Link>
                <h1>Iron Jobs</h1>
                <h3>Find the offer that fits your profile</h3>
            </header>
        </div>
    );
};

export default Header;
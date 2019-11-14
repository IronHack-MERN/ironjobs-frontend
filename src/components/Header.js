import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import '../css/Header.scss';

const Header = () => {
    return (
        <Router>
            <header>
                <Link className='header' to='/' style={{ textDecoration: 'none' }}>
                    <img src={logo} alt='iron-beer-logo' />
                </Link>
                {/* Welcome {username} */}
                <h1>Iron Jobs</h1>
                <h3>Find the job that makes you happy</h3>
            </header>
        </Router>
    );
};

export default Header;
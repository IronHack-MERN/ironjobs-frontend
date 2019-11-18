import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from '../img/logo.png';
import '../css/Header.scss';

const Header = (props) => {
    console.log('las props desde header: ', props)
    return (
        <Router>
            <div className='header'>
                <Link className='header' to='/' style={{ textDecoration: 'none' }}>
                    {/* <img src={logo} alt='iron-beer-logo' /> */}
                    <h1 className='header'> <span></span>Iron Jobs</h1>
                    <h3>Find the job that makes you happy</h3>
                </Link>
                <div className='header-right'>
                    <a className="active" href="#home">Home</a>
                    {/* Welcome {username} */}

                    <Link to={"/register"}> Register</Link>
                        {
                            props.isLoggedin
                                ? <Link to='/logout' style={{ textDecoration: 'none' }}> Logout</Link>
                                : <Link to='/login' style={{ textDecoration: 'none' }}> Login</Link>
                        }
                </div>

            </div>

        </Router>
    );
};

export default Header;
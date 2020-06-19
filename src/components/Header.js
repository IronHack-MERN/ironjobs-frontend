import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from '../img/logo.png';
import NavBar from './NavBar';

const Header = props => {
  return (
    <Router>
      <div className="header">
        <Link className="header" to="/" style={{ textDecoration: 'none' }}>
          {/* <img src={logo} alt='iron-jobs-logo' /> */}
          <h1 className="header">
            {' '}
            <span></span>Iron Jobs
          </h1>
          <h3>Find the job that makes you happy</h3>
        </Link>

        {/* Welcome {username} */}

        <NavBar />
      </div>
    </Router>
  );
};

export default Header;

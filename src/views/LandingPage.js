import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ListJobs from '../components/ListJobs';
import Login from '../views/auth/Login';
import '../css/Login.scss';
import '../css/LandingPage.css';
import { withAuth } from '../Context/AuthContext';

const LandingPage = (props) => {
    return (
      <div className='wrapper'>
        <div className='content'>
          <div className='list-jobs'>
            <ListJobs />
          </div>

          <div className='landing-buttons'>
            <div className='center'>
            <Link to={"/register"}> Register</Link>
          {
              props.isLoggedin
              ? <Link to='/logout' style={{ textDecoration: 'none' }}> Logout</Link>
              : <Link to='/login' style={{ textDecoration: 'none' }}> Login</Link>
          }

            </div>
          </div>
        </div>
      </div>
    )
  }

export default withAuth(LandingPage);
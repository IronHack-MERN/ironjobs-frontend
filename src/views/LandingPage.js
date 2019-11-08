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
          <h1>IRON JOBS</h1>
          <div className='list-jobs'>
            <ListJobs />
          </div>

          <div className='landing-buttons'>
            <div className='center'>
            <Button link='/login'>
                Login
              </Button>

              <Button link='/login'>
                Register
              </Button>

          {
              props.isLoggedin
              ? <h1><Link to='/logout' style={{ textDecoration: 'none' }}> Logout</Link></h1>
              : <h1><Link to='/login' style={{ textDecoration: 'none' }}> Login</Link></h1>
          }


            </div>
          </div>
        </div>
      </div>
    )
  }

export default withAuth(LandingPage);
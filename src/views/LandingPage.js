import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../Context/AuthContext';
import ListJobs from '../components/ListJobs';
import '../css/Login.scss';
import '../css/LandingPage.css';

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
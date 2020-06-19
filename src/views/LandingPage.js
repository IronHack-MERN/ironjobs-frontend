import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../Context/AuthContext';
import ListJobs from '../components/ListJobs';

const LandingPage = (props) => {
  return (
    <div className='wrapper'>
      <div className='content'>
        <div className='landing-buttons'>
        
          <div className='center button'>
            {
              props.isLoggedin
                ? <Link to='/' style={{ textDecoration: 'none' }}> Homes</Link>
                : <Link to='/register' style={{ textDecoration: 'none' }}> Register</Link>
            }
            {
              props.isLoggedin
                ? <Link to='/logout' style={{ textDecoration: 'none' }}> Logout</Link>
                : <Link to='/login' style={{ textDecoration: 'none' }}> Login</Link>
            }
          </div>
        </div>
        <div className='list-jobs'>
          <ListJobs />
        </div>
      </div>
    </div>
  )
}

export default withAuth(LandingPage);


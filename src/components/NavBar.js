import React from 'react';
import '../css/NavBar.css';

const NavBar = () => {
  return (
    <div className=''>
      <div className="navBar" id="mainNavBar">
      <a href="/login">My profile</a>
      <a href="/private/applies">My applies</a>
      <a href="/private/jobs">Jobs</a>
      <a href="/private/job/post">Post a job</a>
      <a href="/login">Mensajes</a>
    </div>
    </div>
  );
};

export default NavBar;

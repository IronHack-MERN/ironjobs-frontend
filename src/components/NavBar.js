import React from 'react';
import '../css/Header.scss';

const NavBar = () => {
  return (
    <div>
      <section className="wrapper">
        <nav className='nav-bar'>
          <ul>
            <li><a href="/login">My profile</a></li>
            <li><a href="#">My applies</a></li>
            <li><a href="/private/jobs">Jobs</a></li>
            <li><a href="#">Documents</a></li>
            <li><a href="#">Mensajes</a></li>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default NavBar;
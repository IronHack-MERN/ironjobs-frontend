import React from 'react';
import '../css/NavBar.scss';

const NavBar = () => {
  return (
    <header className = 'nav-bar-header'>
      <section className="wrapper-nav-bar">
        <nav className='fix-nav-bar'>
          <ul>
            <li><a href="/login">My profile</a></li>
            <li><a href="/private/applies">My applies</a></li>
            <li><a href="/private/jobs">Jobs</a></li>
            <li><a href="/private/job/post">Post a job</a></li>
            <li><a href="/login">Mensajes</a></li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default NavBar;
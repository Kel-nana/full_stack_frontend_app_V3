import React from 'react';
import classes from  './navbar.module.css';
import logoImg from '../assets/logo_sample.jpeg';

export const Navbar = () => {
  return (
    <div>
        <nav className="navbar bg-body-tertiary">
  <div className={`container ${classes.logo_img}`}>
    <a className="navbar-brand" href="#">
      <img src={logoImg} alt="logo" width="50" height="44" />
    </a>
    <button type="button" className="btn btn-outline-secondary">Add User</button>
  </div>
</nav>
    </div>
  )
}


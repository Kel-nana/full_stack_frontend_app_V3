import React from 'react';
import {Link} from 'react-router-dom'
import classes from  './navbar.module.css';
import logoImg from '../assets/logo_sample.jpeg';

export const Navbar = () => {
  return (
    <div>
        <nav className="navbar bg-body-tertiary">
  <div className={`container ${classes.logo_img}`}>
  <Link to="/" className="navbar-brand">
            <img src={logoImg} alt="logo" width="50" height="44" />
          </Link>
    <Link type="button" className="btn btn-outline-secondary" to="/AddUser">Add User</Link>
  </div>
</nav>
    </div>
  )
}


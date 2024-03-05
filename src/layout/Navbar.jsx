import React from 'react';
import {Link} from 'react-router-dom'
import classes from  './navbar.module.css';
import logoImg from '../assets/logo_sample.jpeg';

export const Navbar = ({nav_mode, setDataNav}) => {
 const navDataFunction = ()=> {
  setDataNav(null);
 }
  return (
    <div>
        <nav className={` navbar bg-body-tertiary ${nav_mode ? 'nav_toggle' : ''}`}>
  <div className={`container ${classes.logo_img}`}>
  <Link to="/" className="navbar-brand" onClick={navDataFunction}>
            <img src={logoImg} alt="logo" width="50" height="44" />
          </Link>
    <Link type="button" className="btn btn-outline-secondary" to="/addUser">Add User</Link>
  </div>
</nav>
    </div>
  )
}


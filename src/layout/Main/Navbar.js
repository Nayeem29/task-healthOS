import React from 'react';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <i> <FaBars /></i>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl">HealthOS</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link></li>
          <li><Link to='/dashboard'>Dashboard</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='/login'>login</Link>
      </div>
      <div className="navbar-end">
        <Link to='/signup'>Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/" className="w-[70%]">
        <h1 className="nav-title">Plane B</h1>
      </Link>
    </div>
  );
}

export default NavBar
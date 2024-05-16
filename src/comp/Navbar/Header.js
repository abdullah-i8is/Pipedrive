import React from 'react';
import './Header.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Emails / Emails Inbox</div>
      <div className="search-bar">
        <input style={{
          border: "1px solid #1d1f273d",
          padding: "10px",
          outline: "none",
          borderRadius:"100px"
        }} type="text" placeholder="Search..." />
      </div>
    </nav>
  );
};

export default NavBar;
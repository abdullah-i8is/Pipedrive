import React from 'react';
import logo from '../../assets/logo.png';
import './Header.css';
import AccountMenu from '../Menu';

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* <div className="logo"> */}
      {/* <img width={40} src={"https://i8is.com/wp-content/uploads/2023/09/FavIcon-new-min.png"} /> */}
      <img width={250} src={logo} />
      {/* <h1 style={{ color: "#19355F", marginLeft: 5 }}>INFINITI SUITE</h1> */}
      {/* </div> */}
      <div className="search-bar">
        <input style={{
          border: "1px solid #1d1f273d",
          padding: "10px",
          outline: "none",
          borderRadius: "100px"
        }} type="text" placeholder="Search..." />
      </div>
      <AccountMenu />
    </nav>
  );
};

export default NavBar;
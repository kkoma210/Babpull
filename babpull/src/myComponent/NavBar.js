import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () =>
  <div className="navbar">
    <Link to="/">
      Home
    </Link>
    {/* <Link to="/counter">
      Counter
    </Link>
    <Link to="/todo">
      Todo List
    </Link>
    <Link to="/dogs">
      Dogs
    </Link> */}
  </div>

export default NavBar;

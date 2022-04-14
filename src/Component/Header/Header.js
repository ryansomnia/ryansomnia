import React, { Component } from "react";
import "./Header.css";
import Logo from "../../img/logoryansomnia.png";
// import { withRouter } from "react-router";
class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="logo" src={Logo} />
        <nav>
          <ul className="navLink">
            <li><a href="/#">Home</a></li>
            <li><a href="/#">Our Service</a></li>
            <li><a href="/#">Our Project</a></li>
            <li><a href="/#">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;

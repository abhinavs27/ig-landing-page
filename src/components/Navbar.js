import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./main.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light navbar-expand-lg " >
        <Link to="/" className="logo " >
          <img src={`${process.env.PUBLIC_URL}/igLogo.png`} alt="Innovation garage logo" className="navbar-brand" width="210" height="170" />

        </Link>

        <div className=" navbar-collapse mr-4 responsiveNav">
          <ul className="navbar-nav ml-auto" id="nav">
            <li className="nav-item font-weight-bold" >

              <Link to="/" className="nav-link homeNav" >
                Home
              </Link>
            </li>
            <li className="nav-item font-weight-bold">
              <Link to="/innovations" className="nav-link">
                Current Events
              </Link>
            </li>
            <li className="nav-item font-weight-bold">
              <Link to="#images" className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item font-weight-bold">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item font-weight-bold">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          {/* <img src={logo} alt="" /> */}

        </div>
      </nav>
    );
  }
}

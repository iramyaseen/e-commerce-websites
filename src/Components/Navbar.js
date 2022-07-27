import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={props.image} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink
                  className="nav-link"
                  to="/"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#3a8bcd" : "black",
                    };
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/products"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#3a8bcd" : "black",
                    };
                  }}
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/about-us"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#3a8bcd" : "black",
                    };
                  }}
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contact-us"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#3a8bcd" : "black",
                    };
                  }}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

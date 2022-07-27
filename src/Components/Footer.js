import React from "react";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer({ image }) {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="logo">
                <img src={image} alt="" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">How It Works ?</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12">
              <div className="social-icons">
                <ul>
                  <li>
                    <a href="https://twitter.com/home" target="blank">
                      <BsTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="blank">
                      <i className="fa fa-twitter">
                        <FaInstagram />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin">
                        <FaLinkedin />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-rss">
                        <BsFacebook />
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

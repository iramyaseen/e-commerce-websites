import React, { useState } from "react";
import { BsEyeSlash, BsEyeFill } from "react-icons/bs";
import axios from "axios";
const Contact = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toggleBtn = (e) => {
    e.preventDefault();
    setShowPassword((passwords) => !passwords);
  };

  const LoginForm = async (e) => {
    e.preventDefault();
    const data = {
      password,
      username,
    };
    await axios
      .post("https://fakestoreapi.com/auth/login", data)
      .then((res) => localStorage.setItem("token", res.data.token));
  };
  return (
    <>
      <div className="contact-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <div className="line-dec"></div>
                <h1>Contact Us</h1>
              </div>
            </div>
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <div className="right-content">
                <div className="container">
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <fieldset>
                          <input
                            name="email"
                            type="text"
                            className="form-control"
                            placeholder="Your email..."
                            required={require}
                            autoComplete="off"
                            onChange={(e) => setUsername(e.target.value)}
                            defaultValue="email"
                          />
                        </fieldset>
                      </div>
                      <div className="col-md-6">
                        <fieldset
                          className="field-set"
                          style={{ display: "flex" }}
                        >
                          <input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            className="form-control styel-control"
                            placeholder="Your password..."
                            required=""
                            autoComplete="off"
                            onChange={(e) => setPassword(e.target.value)}
                            defaultValue="password"
                          />
                          <span
                            onClick={toggleBtn}
                            style={{ paddingTop: "5px", fontSize: "20px" }}
                          >
                            {showPassword ? <BsEyeFill /> : <BsEyeSlash />}
                          </span>
                        </fieldset>
                      </div>
                      <div className="col-md-12">
                        <fieldset>
                          <button
                            type="submit"
                            className="button"
                            onClick={LoginForm}
                          >
                            Send Message
                          </button>
                        </fieldset>
                      </div>
                      <div className="col-md-12">
                        <div className="share">
                          <h6>
                            You can also keep in touch on:{" "}
                            <span>
                              <a href="#">
                                <i className="fa fa-facebook"></i>
                              </a>
                              <a href="#">
                                <i className="fa fa-linkedin"></i>
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter"></i>
                              </a>
                            </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

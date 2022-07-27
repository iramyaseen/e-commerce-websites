import React, { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Banner from "./Banner";
import Navbar from "./Navbar";
import LogoImage from "../assets/images/header-logo.png";
import { Circles } from "react-loading-icons";
export default function SingleProduct() {
  const pram = useParams();
  console.log(pram);
  const [users2, setUsers2] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getApiProduct2 = async () => {
    try {
      await axios.get("https://fakestoreapi.com/products").then((res) => {
        setUsers2(res.data);
      });
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  };
  const getOrder = async (e) => {
    e.preventDefault();
    console.log("Your order is placed");
    const main = localStorage.getItem("token");
    if (main) {
      alert("Your order is get");
    } else {
      alert("You are not login. Please login your page");
      navigate("/contact-us");
    }
  };
  useEffect(() => {
    getApiProduct2();
  }, []);
  return (
    <>
      {loading ? (
        <>
          <Banner />
          <Navbar image={LogoImage} />
          <div className="single-product">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-heading">
                    <div className="line-dec"></div>
                    <h1>Single product</h1>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product-slider">
                    <div id="carousel" className="flexslider">
                      <img src={users2[pram.id]?.image} />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-content">
                    <h4>{console.log(users2[pram.id]?.title)}</h4>
                    <h6>{users2[pram.id]?.price + "$"}</h6>
                    <p>{users2[pram.id]?.description}</p>
                    <span>7 left on stock</span>
                    <form>
                      <label>Quantity:</label>
                      <input
                        name="quantity"
                        type="quantity"
                        className="quantity-text"
                        defaultValue={1}
                      />
                      <input
                        type="submit"
                        className="button"
                        defaultValue={"Get Order"}
                        onClick={getOrder}
                      />
                    </form>
                    <div className="down-content">
                      <div className="categories">
                        <h6>
                          Category:{" "}
                          <span>
                            <a href="#">{users2[pram.id]?.category}</a>
                          </span>
                        </h6>
                      </div>
                      <div className="share">
                        <h6>
                          Share:{" "}
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
                </div>
              </div>
            </div>
          </div>

          <div className="featured-items">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-heading">
                    <div className="line-dec"></div>
                    <h1>You May Also Like</h1>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="owl-carousel owl-theme">
                    <NavLink
                      to={`/products/single-product/${pram.id}`}
                      style={{ display: "flex", flexWrap: "wrap" }}
                    >
                      {users2.map((product) => {
                        return (
                          <div className="featured-item" key={product.id}>
                            <div className="list-item">
                              <img src={product.image} alt="Item 1" />
                              <h4>{product.title}</h4>
                              <h6>{product.price}</h6>
                            </div>
                          </div>
                        );
                      })}
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="loader">
          <Circles fill="#000" />
        </div>
      )}
    </>
  );
}

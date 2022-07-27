import { NavLink, parsePath } from "react-router-dom";
import React, { useState, useEffect, useReducer } from "react";
import Dropdown from "./Dropdown";
import axios from "axios";
import { useParams } from "react-router-dom";
const Product = () => {
  const [users, setUsers] = useState([]);
  const [selected, setselected] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setcategories] = useState([]);

  let param = useParams();
  useEffect(() => {
    const getApiProduct = async () => {
      try {
        await axios.get("https://fakestoreapi.com/products").then((res) => {
          setUsers(res.data);
        });
        setLoading(true);
      } catch (e) {
        console.log(e);
      }
    };
    getApiProduct();
    const categoriesOptions = async () => {
      try {
        await axios
          .get(
            `https://fakestoreapi.com/products/category/${encodeURIComponent(
              param.category
            )}`
          )
          .then((res) => {
            setcategories(res.data);
          });
        setLoading(true);
      } catch (e) {
        console.log(e);
      }
    };
    categoriesOptions();
  }, [param]);
  console.log(param);
  return (
    <>
      <div className="featured-items">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <div className="line-dec"></div>
                <div className="nav_bar">
                  <h1>Featured Items</h1>
                  <div
                    style={{
                      display: "flex",
                      fontSize: "19px",
                      fontWeight: "bold",
                    }}
                  >
                    <NavLink
                      to="/products"
                      style={({ isActive }) => {
                        return {
                          color: isActive ? "#3a8bcd" : "black",
                        };
                      }}
                    >
                      All product
                    </NavLink>
                    <Dropdown
                      selected={selected}
                      setselected={setselected}
                      style={({ isActive }) => {
                        return {
                          color: isActive ? "#3a8bcd" : "black",
                        };
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="" style={{ display: "flex", flexWrap: "wrap" }}>
                {loading ? (
                  window.location.pathname ===
                  `/products/${encodeURIComponent(param.category)}` ? (
                    categories.map((cate) => {
                      return (
                        <div className="featured-item" key={cate.id}>
                          <div className="featured-item-image">
                            <img src={cate.image} alt="Item 1" />
                            <h4>{cate.title}</h4>
                            <h6>Price : {cate.price}</h6>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    users.map((produt) => {
                      return (
                        <NavLink
                          to={`/products/single-product/${produt.id}`}
                          key={produt.id}
                        >
                          {console.log(produt.id)}
                          <div className="featured-item" key={produt.id}>
                            <div
                              className="featured-item-image"
                              key={produt.id}
                            >
                              <img src={produt.image} alt="Item 1" />
                              <h4>{produt.title}</h4>
                              <h6>Price : {produt.price}</h6>
                            </div>
                          </div>
                        </NavLink>
                      );
                    })
                  )
                ) : (
                  <h1>Loading...</h1>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;

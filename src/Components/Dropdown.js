import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
const Dropdown = ({ setselected }) => {
  const [isActive, setIsActive] = useState(false);
  const [options, setOption] = useState([]);
  useEffect(() => {
    const catOptions = async () => {
      const options = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      setOption(await options.json());
    };
    catOptions();
  }, []);
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
        All categories
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => {
            return (
              <div
                onClick={(e) => {
                  setselected(option);
                  setIsActive(false);
                }}
                key={option}
              >
                <div className="dropdown-item">
                  <NavLink
                    to={`/products/${option}`}
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#3a8bcd" : "black",
                      };
                    }}
                  >
                    {option}
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

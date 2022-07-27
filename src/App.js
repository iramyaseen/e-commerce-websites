import "./App.css";
import React from "react";
import Index from "./Pages/Index";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactUsPage from "./Pages/ContactUsPage";
import SingleProduct from "./Components/SingleProduct";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:category" element={<ProductPage />} />
        <Route
          path="/products/single-product/:id"
          element={<SingleProduct />}
        />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
    </div>
  );
}

export default App;

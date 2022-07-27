import React from "react";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import Product from "../Components/Products";
import LogoImage from "../assets/images/header-logo.png";
import Subscribe from "../Components/Subscribe";
import Footer from "../Components/Footer";
import CopyWrite from "../Components/CopyWrite";
export default function ProductPage() {
  return (
    <>
      <Banner />
      <Navbar image={LogoImage} />
      <Product />
      <Subscribe />
      <Footer image={LogoImage} />
      <CopyWrite />
    </>
  );
}

import React from "react";
import bannerImage from "../assets/images/banner-bg.jpg";
import LogoImage from "../assets/images/header-logo.png";
import Navbar from "../Components/Navbar";
import Products from "../Components/Products";
import Subscribe from "../Components/Subscribe";
import Footer from "../Components/Footer";
import CopyWrite from "../Components/CopyWrite";
import Template from "../Components/Template";
import Banner from "../Components/Banner";
export default function Index() {
  return (
    <>
      {/* <!-- Pre Header --> */}
      <Banner />
      <Navbar image={LogoImage} />
      <Template image={bannerImage} />
      <Products />
      <Subscribe />
      <Footer image = {LogoImage} />

      <CopyWrite />
    </>
  );
}

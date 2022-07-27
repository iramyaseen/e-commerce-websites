import React from "react";
import aboutUsimage from "../assets/images/about-us.jpg";
import AboutUs from "../Components/AboutUs";
import Banner from "../Components/Banner";
import CopyWrite from "../Components/CopyWrite";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Subscribe from "../Components/Subscribe";
import LogoImage from "../assets/images/header-logo.png";

export default function AboutUsPage() {
  return (
    <div>
      <Banner />
      <Navbar image={LogoImage} />
      <AboutUs image={aboutUsimage} />
      <Subscribe />
      <Footer />
      <CopyWrite />
    </div>
  );
}

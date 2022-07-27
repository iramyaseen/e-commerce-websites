import React from "react";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import LogoImage from "../assets/images/header-logo.png";
import Contact from "../Components/Contact";
import Subscribe from "../Components/Subscribe";
import Footer from "../Components/Footer";
import CopyWrite from "../Components/CopyWrite";

const ContactUsPage = () => {
  return (
    <div>
      <Banner />
      <Navbar image={LogoImage} />
      <Contact />
      <Subscribe />
      <Footer />
      <CopyWrite />
    </div>
  );
};

export default ContactUsPage;

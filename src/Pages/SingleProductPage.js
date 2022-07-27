import React from "react";
import Banner from "../Components/Banner";
import CopyWrite from "../Components/CopyWrite";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import SingleProduct from "../Components/SingleProduct";
import Subscribe from "../Components/Subscribe";

export default function SingleProductPage() {
  return (
    <div>
      <Banner />
      <Navbar />
      <SingleProduct />
      <Subscribe />
      <Footer />
      <CopyWrite />
    </div>
  );
}

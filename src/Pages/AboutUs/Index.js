import React from "react";
import Navbar from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import HappyCustomers from "../Home/HappyCustomers";
import FeaturesListing from "../Home/FeaturesListing";
import About from "./About";

export default function AboutUsIndex() {
  return (
    <>
      <Navbar />
      <About />
      <FeaturesListing />
      <HappyCustomers />
      <Footer />
    </>
  );
}

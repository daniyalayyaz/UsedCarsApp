import React from "react";
import Navbar from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import HappyCustomers from "../Home/HappyCustomers";
import FeaturesListing from "../Home/FeaturesListing";
import About from "./About";
import GetStartedToday from "../Home/GetStartedToday";

export default function AboutUsIndex() {
  return (
    <>
      <Navbar />
      <About />
      <GetStartedToday />
      <FeaturesListing />
      {/* <HappyCustomers /> */}
      <Footer />
    </>
  );
}

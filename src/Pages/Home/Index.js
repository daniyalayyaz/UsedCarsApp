import React from "react";
import Navbar from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import FindCars from "./FindCars";
import FeaturedCars from "./FeaturedCars";
import LeadingCars from "./LeadingCars";
import GetStartedToday from "./GetStartedToday";
import FeaturesListing from "./FeaturesListing";
import HappyCustomers from "./HappyCustomers";

export default function HomePageIndex() {
  return (
    <>
      <Navbar />
      <FindCars />
      <FeaturedCars />
      <LeadingCars />
      <GetStartedToday />
      <FeaturesListing />
      <HappyCustomers />
      <Footer />
    </>
  );
}

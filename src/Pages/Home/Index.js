import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import FindCars from "../SearchResults/FindCars";
import FeaturedCars from "./FeaturedCars";
import LeadingCars from "./LeadingCars";
import GetStartedToday from "./GetStartedToday";
import FeaturesListing from "./FeaturesListing";
import HappyCustomers from "./HappyCustomers";
import { GET } from "../../api/axios";
import ExploreCars from "./ExploreCars";
import ContactInfo from "./ContactInfo";

export default function HomePageIndex() {
  const [carsData, setCarsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    GET("/cars/allcars")
      .then((result) => {
        setCarsData(result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: "white" }}>
      <Navbar />

      <ExploreCars />
      <LeadingCars />
      <GetStartedToday />
      <FeaturesListing />
      <FeaturedCars {...{ carsData, isLoading }} />
      <ContactInfo />
      {/* <HappyCustomers /> */}
      <Footer />
    </div>
  );
}

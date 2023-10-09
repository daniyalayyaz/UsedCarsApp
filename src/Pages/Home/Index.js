import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import FindCars from "./FindCars";
import FeaturedCars from "./FeaturedCars";
import LeadingCars from "./LeadingCars";
import GetStartedToday from "./GetStartedToday";
import FeaturesListing from "./FeaturesListing";
import HappyCustomers from "./HappyCustomers";
import { GET } from "../../api/axios";

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
  console.log(carsData);
  return (
    <>
      <Navbar />
      <FindCars {...{ carsData, setCarsData }} />
      <FeaturedCars {...{ carsData, isLoading }} />
      <LeadingCars />
      <GetStartedToday />
      <FeaturesListing />
      <HappyCustomers />
      <Footer />
    </>
  );
}

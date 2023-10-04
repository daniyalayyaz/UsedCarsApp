import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import ListingHeader from "./ListingHeader";
import ListingSidebar from "./ListingSidebar";
import CarsList from "./CarsList";
import { Container, Grid } from "@mui/material";
import { useIsMobile } from "../../contexts/isMobile";
import { useParams } from "react-router-dom";
import { GET } from "../../api/axios";

export default function CarsListingsIndex() {
  const isMobile = useIsMobile();
  const heading = useParams();
  const [carsData, setCarsData] = useState([]);
  const [list, setList] = useState([]);

  const fetchData = async () => {
    GET("/cars/allcars").then((result) => {
      setCarsData(result);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (carsData) {
      console.log(heading, "hhh");
      const filteredData = carsData.filter(
        (item) => item.country === heading.name
      );
      console.log(filteredData, "data");
      setList(filteredData);
    }
  }, [heading.name]);

  return (
    <>
      <Navbar />
      <ListingHeader {...{ heading }} />
      <Container>
        <Grid container my={2} spacing={2}>
          <Grid item md={2.5} xs={12}>
            <ListingSidebar />
          </Grid>
          <Grid item md={9} ml={isMobile ? 1 : 4} xs={12}>
            <CarsList {...{ list }} />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}

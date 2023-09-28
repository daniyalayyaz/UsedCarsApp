import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import DetailHeader from "./DetailHeader";
import PriceCard from "./PriceCard";
import { Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import CarDetails from "./CarDetails";
import ContactSeller from "./ContactSeller";
import { CarData } from "../CarsListings/CarDataUtils";

export default function CarDetailIndex() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (id) {
      const carData = CarData.filter((item) => item.id === id);
      setData(carData[0]);
    }
  }, [id]);

  return (
    <div>
      <Navbar />
      {data ? (
        <>
          <DetailHeader name={data.name} />
          <Container>
            <Grid container my={4}>
              <Grid item md={8}>
                <CarDetails data={data} />
              </Grid>
              <Grid item md={4}>
                <PriceCard price={data.price} country={data.country} />
                <ContactSeller />
              </Grid>
            </Grid>
          </Container>
        </>
      ) : (
        <>
          <Typography>No Data Found</Typography>
        </>
      )}
      <Footer />
    </div>
  );
}

import React, { useState } from "react";
import Navbar from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import ListingHeader from "./ListingHeader";
import ListingSidebar from "./ListingSidebar";
import CarsList from "./CarsList";
import { Container, Grid } from "@mui/material";

export default function CarsListingsIndex() {
  const [heading, setHeading] = useState("");

  return (
    <>
      <Navbar {...{ heading, setHeading }} />
      <ListingHeader {...{ heading }} />
      <Container>
        <Grid container my={2} spacing={2}>
          <Grid item md={2.5}>
            <ListingSidebar />
          </Grid>
          <Grid item md={9} ml={4}>
            <CarsList {...{ heading }} />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}

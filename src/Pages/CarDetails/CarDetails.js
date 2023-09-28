import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import InspectionCard from "./InspectionCard";
import ImageSlider from "./ImageSlider";

export default function CarDetails({ data }) {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        backgroundColor: "white",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        my: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          my: "2rem",
        }}
      >
        <ImageSlider />
        <Grid container my={5}>
          <Typography variant="h5" fontWeight="bold">
            About this Car
          </Typography>
          <Grid container m={1} spacing={2}>
            <Grid item md={3}>
              Make
            </Grid>
            <Grid item md={3}>
              {data.make}
            </Grid>
            <Grid item md={3}>
              Model
            </Grid>
            <Grid item md={3}>
              {data.model}
            </Grid>
            <Grid item md={3}>
              BodyType
            </Grid>
            <Grid item md={3}>
              {data.bodytype}
            </Grid>
            <Grid item md={3}>
              Color
            </Grid>
            <Grid item md={3}>
              {data.color}
            </Grid>
            <Grid item md={3}>
              Fuel
            </Grid>
            <Grid item md={3}>
              {data.fuel}
            </Grid>
            <Grid item md={3}>
              Mileage
            </Grid>
            <Grid item md={3}>
              {data.mileage}
            </Grid>
            <Grid item md={3}>
              Year
            </Grid>
            <Grid item md={3}>
              {data.year}
            </Grid>
            <Grid item md={3}>
              CC
            </Grid>
            <Grid item md={3}>
              {data.cc}
            </Grid>
            <Grid item md={3}>
              Transmission
            </Grid>
            <Grid item md={3}>
              {data.transmission}
            </Grid>
            <Grid item md={3}>
              Country
            </Grid>
            <Grid item md={3}>
              {data.country}
            </Grid>
            <Grid item md={3}>
              Steering
            </Grid>
            <Grid item md={3}>
              {data.steering}
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h5" fontWeight="bold" my={2}>
              Seller Comments
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              eaque quos, ipsa molestiae ullam sequi fugiat recusandae quae
              voluptatum eum, molestias soluta repudiandae voluptas? Libero
              impedit consectetur illum earum quidem.
            </Typography>
          </Grid>
        </Grid>
        <InspectionCard />
      </Box>
    </Stack>
  );
}

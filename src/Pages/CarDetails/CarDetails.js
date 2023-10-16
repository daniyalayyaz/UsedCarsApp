import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import InspectionCard from "./InspectionCard";
import ImageSlider from "./ImageSlider";

export default function CarDetails({ data, imagesArray }) {
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
        <ImageSlider
          data={data.multipleimages}
          MultiImages={imagesArray}
          coverImage={data.coverImage}
        />
        <Grid container my={5}>
          <Typography variant="h5" fontWeight="bold">
            About this Car
          </Typography>
          <Grid container my={2} spacing={2}>
            <Grid item md={3} xs={3} fontWeight="bold">
              Make
            </Grid>
            <Grid item md={3} xs={3}>
              {data.make}
            </Grid>
            <Grid item md={3} xs={3} fontWeight="bold">
              Model
            </Grid>
            <Grid item md={3} xs={3}>
              {data.model}
            </Grid>
            <Grid item md={3} xs={3} fontWeight="bold">
              BodyType
            </Grid>
            <Grid item md={3} xs={3}>
              {data.bodytype}
            </Grid>
            <Grid item md={3} xs={3} fontWeight="bold">
              Color
            </Grid>
            <Grid item md={3} xs={3}>
              {data.color}
            </Grid>
            <Grid item md={3} xs={3} fontWeight="bold">
              Fuel
            </Grid>
            <Grid item md={3} xs={3}>
              {data.fuel}
            </Grid>
            <Grid item md={3} xs={3} fontWeight="bold">
              Mileage
            </Grid>
            <Grid item md={3} xs={3}>
              {data.mileage}
            </Grid>
            <Grid item md={3} xs={3} fontWeight="bold">
              Year
            </Grid>
            <Grid item md={3} xs={3}>
              {data.year}
            </Grid>
            <Grid item md={3} xs={3} fontWeight="bold">
              CC
            </Grid>
            <Grid item md={3} xs={3}>
              {data.cc}
            </Grid>
            <Grid item md={3} xs={3} overflow="clip" fontWeight="bold">
              Transmission
            </Grid>
            <Grid item md={3} xs={3}>
              {data.transmission}
            </Grid>
            <Grid item md={3} xs={3} fontWeight="bold">
              Country
            </Grid>
            <Grid item md={3} xs={3}>
              {data.country}
            </Grid>
            <Grid item md={3} xs={3} fontWeight="bold">
              Steering
            </Grid>
            <Grid item md={3} xs={6}>
              {data.steering}
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h5" fontWeight="bold" my={2}>
              Description
            </Typography>
            <Typography>{data.description}</Typography>
          </Grid>
        </Grid>
        <InspectionCard />
      </Box>
    </Stack>
  );
}

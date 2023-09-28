import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import avatar from "../../assets/avatar.png";
import car from "../../assets/car.png";
import sell from "../../assets/sell-icon.png";

export default function FeaturesListing() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        backgroundColor: "white",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "300px",
        mb: "4rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          width: "100%",
          mt: "4rem",
          mx: "2rem",
        }}
      >
        <Grid container spacing={2}>
          <Grid item md={4}>
            <img src={avatar} alt="" />
            <Typography variant="h5">Create a Free Account</Typography>
            <Typography variant="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidid ut labore et dolore magna aliqua.
            </Typography>
          </Grid>
          <Grid item md={4}>
            <img src={car} alt="" />
            <Typography variant="h5">Post Your Free Car</Typography>
            <Typography variant="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidid ut labore et dolore magna aliqua.
            </Typography>
          </Grid>
          <Grid item md={4}>
            <img src={sell} alt="" />
            <Typography variant="h5">Sold or Buy</Typography>
            <Typography variant="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidid ut labore et dolore magna aliqua.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}

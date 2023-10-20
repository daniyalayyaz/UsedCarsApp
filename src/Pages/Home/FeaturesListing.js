import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

export default function FeaturesListing() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        backgroundSize: "cover",
        backgroundColor: "white",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          width: "100%",
          m: "2rem",
          mb: "4rem",
        }}
      >
        <Grid container spacing={2}>
          <Grid item md={4}>
            <img src={require(`../../assets/detail.png`)} alt="" width={40} />
            <Typography variant="h5" my={2}>
              Personalized Customer Experience
            </Typography>
            <Typography variant="body">
              Bavi Motors offers a highly personalized customer experience,
              where you work directly with the owners to find the perfect
              vehicle.This sets them apart from larger dealerships and ensures
              individualized attention.
            </Typography>
          </Grid>
          <Grid item md={4}>
            <img src={require(`../../assets/buy.png`)} alt="" width={50} />
            <Typography variant="h5" mt={1} mb={2}>
              Competitive Pricing
            </Typography>
            <Typography variant="body">
              As a small, family-run business, Bavi Motors can provide
              competitive prices without engaging in high-pressure sales
              tactics. This allows customers to make informed decisions without
              feeling pushed into overpriced or unsuitable vehicles.
            </Typography>
          </Grid>
          <Grid item md={4}>
            <img src={require(`../../assets/privacy.png`)} alt="" width={40} />
            <Typography variant="h5" my={2}>
              Fast Decisions and Flexibility
            </Typography>
            <Typography variant="body">
              Bavi Motors' independence grants them the ability to make fast
              decisions and be flexible in meeting customer needs. Whether it's
              sourcing a vehicle from Japan quickly or fulfilling unique
              requests, they can accommodate without bureaucratic delays.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}

import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

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
        height: "100%",
        mb: "4rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          width: "100%",
          m: "2rem",
        }}
      >
        <Grid container spacing={2}>
          <Grid item md={4}>
            <img src={require(`../../assets/detail.png`)} alt="" width={40} />
            <Typography variant="h5" mt={2}>
              Detailed Listings
            </Typography>
            <Typography variant="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidid ut labore et dolore magna aliqua.
            </Typography>
          </Grid>
          <Grid item md={4}>
            <img src={require(`../../assets/buy.png`)} alt="" width={50} />
            <Typography variant="h5" mt={1}>
              {" "}
              Buy
            </Typography>
            <Typography variant="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidid ut labore et dolore magna aliqua.
            </Typography>
          </Grid>
          <Grid item md={4}>
            <img src={require(`../../assets/privacy.png`)} alt="" width={40} />
            <Typography variant="h5" mt={2}>
              Privacy Policy and Terms
            </Typography>
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

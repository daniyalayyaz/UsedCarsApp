import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function GetStartedToday() {
  const navigate = useNavigate();
  const handleJapenseCar = (name) => {
    navigate(`/carlistings/${name}`);
  };
  const handleUKCar = (name) => {
    navigate(`/carlistings/${name}`);
  };
  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        backgroundColor: "#000000",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          width: "70%",
          my: "2rem",
          color: "white",
        }}
      >
        <Typography variant="h4">Get Started Today</Typography>
        <Typography mt={2}>
          Enjoy a personalized, cost-effective, and hassle-free car-buying
          experience with Bavi Motors, your trusted small, family-owned business
        </Typography>
        <Grid container mt={2} spacing={2} justifyContent="center">
          <Grid item md={6} xs={12}>
            <Button
              size="large"
              variant="contained"
              sx={{
                background: "#D0AC4C",

                borderRadius: "0.5rem",
                color: "white",
                fontFamily: "Semibold",
                "&:hover ": {
                  color: "#D0AC4C",
                },
              }}
              onClick={() => handleJapenseCar("Japan")}
            >
              Do you want to buy a Japense Car?
            </Button>
          </Grid>
          <Grid item md={6} xs={12}>
            <Button
              size="large"
              variant="contained"
              sx={{
                background: "#D0AC4C",

                borderRadius: "0.5rem",
                color: "white",
                fontFamily: "Semibold",
                "&:hover ": {
                  color: "#D0AC4C",
                },
              }}
              onClick={() => handleUKCar("UK")}
            >
              Do you want to buy a UK Car?
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}

import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import DropdownMake from "../../Components/DropdownMake";
import DropdownModel from "../../Components/DropdownModel";
import DropdownBodyType from "../../Components/DropdownBodyType";
import DropdownColor from "../../Components/DropdownColor";
import DropdownTransmission from "../../Components/DropdownTransmission";
import DropdownYear from "../../Components/DropdownYear";
import DropdownMileage from "../../Components/DropdownMileage";
import DropdownCC from "../../Components/DropdowmCC";
import DropdownSteering from "../../Components/DropdownSteering";
import DropdownFuel from "../../Components/DropdownFuel";
import DropdownPrice from "../../Components/DropdownPriceRange";
import { SolidButton } from "../../Components/SolidButton";

export default function ListingSidebar() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        backgroundColor: "primary.main",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
        borderRadius: "8px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          my: "1rem",
        }}
      >
        <Grid container spacing={1}>
          <Grid item md={12} xs={6}>
            <Typography variant="body" fontWeight="bold">
              Make
            </Typography>
            <DropdownMake />
          </Grid>
          <Grid item md={12} xs={6}>
            <Typography variant="body" fontWeight="bold" mt={2}>
              Model
            </Typography>
            <DropdownModel />
          </Grid>
          <Grid item md={12} xs={6}>
            <Typography variant="body" fontWeight="bold" mt={2}>
              Body Type
            </Typography>
            <DropdownBodyType />
          </Grid>

          <Grid item md={12} xs={6}>
            <Typography variant="body" fontWeight="bold" mt={2}>
              Color
            </Typography>
            <DropdownColor />
          </Grid>

          <Grid item md={12} xs={6}>
            <Typography variant="body" fontWeight="bold" mt={2}>
              Transmission
            </Typography>
            <DropdownTransmission />
          </Grid>

          <Grid item md={12} xs={6}>
            <Typography variant="body" fontWeight="bold" mt={2}>
              Price Range
            </Typography>
            <DropdownPrice />
          </Grid>

          <Grid item md={12} xs={6}>
            <Typography variant="body" fontWeight="bold" mt={2}>
              Year
            </Typography>
            <DropdownYear />
          </Grid>

          <Grid item md={12} xs={6}>
            <Typography variant="body" fontWeight="bold" mt={2}>
              Mileage Range
            </Typography>
            <DropdownMileage />
          </Grid>

          <Grid item md={12} xs={6}>
            <Typography variant="body" fontWeight="bold" mt={2}>
              CC Range
            </Typography>
            <DropdownCC />
          </Grid>

          <Grid item md={12} xs={6}>
            <Typography variant="body" fontWeight="bold" mt={2}>
              Steering
            </Typography>
            <DropdownSteering />
          </Grid>

          <Grid item md={12} xs={6}>
            <Typography variant="body" fontWeight="bold" mt={2}>
              Fuel
            </Typography>
            <DropdownFuel />
          </Grid>

          <Grid item md={12} xs={12} textAlign="center" mt="1rem">
            <SolidButton label="Search " onClick={handleSearch} />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}

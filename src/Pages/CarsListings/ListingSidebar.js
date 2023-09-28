import { Box, Stack, Typography } from "@mui/material";
import React from "react";
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
        <Typography variant="body" fontWeight="bold">
          Make
        </Typography>
        <DropdownMake />
        <Typography variant="body" fontWeight="bold" mt={2}>
          Model
        </Typography>
        <DropdownModel />
        <Typography variant="body" fontWeight="bold" mt={2}>
          Body Type
        </Typography>
        <DropdownBodyType />
        <Typography variant="body" fontWeight="bold" mt={2}>
          Color
        </Typography>
        <DropdownColor />
        <Typography variant="body" fontWeight="bold" mt={2}>
          Transmission
        </Typography>
        <DropdownTransmission />
        <Typography variant="body" fontWeight="bold" mt={2}>
          Price Range
        </Typography>
        <DropdownPrice />
        <Typography variant="body" fontWeight="bold" mt={2}>
          Year
        </Typography>
        <DropdownYear />
        <Typography variant="body" fontWeight="bold" mt={2}>
          Mileage Range
        </Typography>
        <DropdownMileage />
        <Typography variant="body" fontWeight="bold" mt={2}>
          CC Range
        </Typography>
        <DropdownCC />
        <Typography variant="body" fontWeight="bold" mt={2}>
          Steering
        </Typography>
        <DropdownSteering />
        <Typography variant="body" fontWeight="bold" mt={2}>
          Fuel
        </Typography>
        <DropdownFuel />
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <SolidButton label="Search " />
        </div>
      </Box>
    </Stack>
  );
}

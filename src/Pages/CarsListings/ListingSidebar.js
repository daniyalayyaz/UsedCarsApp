import { Box, Button, Grid, Stack, Typography } from "@mui/material";
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
import DropdownPrice from "../../Components/DropdownPrice";
import { SolidButton } from "../../Components/SolidButton";
import {
  CCRangeConverter,
  mileageRangeConverter,
  priceRangeConverter,
  yearRangeConverter,
} from "../../Functions/functions";

export default function ListingSidebar({ list, setList }) {
  const [form, setForm] = useState({
    make: "",
    model: "",
    bodytype: "",
    color: "",
    transmission: "",
    price: "",
    year: "",
    mileage: "",
    steering: "",
    fuel: "",
    cc: "",
  });

  const handleSearch = () => {
    const { minPrice, maxPrice } = priceRangeConverter(form.price);
    const { minYear, maxYear } = yearRangeConverter(form.year);
    const { minMileage, maxMileage } = mileageRangeConverter(form.mileage);
    const { minCC, maxCC } = CCRangeConverter(form.cc);

    const filteredData = list.filter((item) => {
      const makeMatch = item.make === form.make;
      const modelMatch = item.model === form.model;
      const ccMatch =
        parseInt(item?.cc) >= minCC && parseInt(item?.cc) <= maxCC;
      const transmissionMatch = item.transmission === form.transmission;
      const bodyTypeMatch = item.bodytype === form.bodytype;
      const colorMatch = item.color === form.color;
      const priceMatch =
        parseInt(item?.price) >= minPrice && parseInt(item?.price) <= maxPrice;
      const yearMatch =
        parseInt(item?.year) >= minYear && parseInt(item?.year) <= maxYear;
      const mileageMatch =
        parseInt(item?.mileage) >= minMileage &&
        parseInt(item?.mileage) <= maxMileage;
      const steeringMatch = item.steering === form.steering;
      const fuelMatch = item.fuel === form.fuel;

      return (
        makeMatch ||
        modelMatch ||
        ccMatch ||
        transmissionMatch ||
        bodyTypeMatch ||
        colorMatch ||
        priceMatch ||
        yearMatch ||
        mileageMatch ||
        steeringMatch ||
        fuelMatch
      );
    });

    setList(filteredData);
    console.log(filteredData, "filter");
    setForm({
      make: "",
      model: "",
      bodytype: "",
      color: "",
      transmission: "",
      price: "",
      year: "",
      mileage: "",
      steering: "",
      fuel: "",
      cc: "",
    });
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
        <Grid container spacing={1} color="white">
          <Grid item md={12} xs={6}>
            <Typography variant="body" fontWeight="bold">
              Make
            </Typography>
            <DropdownMake {...{ form, setForm }} />
          </Grid>
          <Grid item md={12} xs={6}>
            <Typography variant="body" fontWeight="bold" mt={2}>
              Model
            </Typography>
            <DropdownModel {...{ form, setForm }} />
          </Grid>
          <Grid item md={12} xs={6}>
            <Typography variant="body" fontWeight="bold" mt={2}>
              Body Type
            </Typography>
            <DropdownBodyType {...{ form, setForm }} />
          </Grid>

          <Grid item md={12} xs={6}>
            <Typography variant="body" fontWeight="bold" mt={2}>
              Color
            </Typography>
            <DropdownColor {...{ form, setForm }} />
          </Grid>

          <Grid item md={12} xs={6}>
            <Typography variant="body" fontWeight="bold" mt={2}>
              Transmission
            </Typography>
            <DropdownTransmission {...{ form, setForm }} />
          </Grid>

          <Grid item md={12} xs={6}>
            <Typography variant="body" fontWeight="bold" mt={2}>
              Price Range
            </Typography>
            <DropdownPrice {...{ form, setForm }} />
          </Grid>

          <Grid item md={12} xs={6}>
            <Typography variant="body" fontWeight="bold" mt={2}>
              Year
            </Typography>
            <DropdownYear {...{ form, setForm }} />
          </Grid>

          <Grid item md={12} xs={6}>
            <Typography variant="body" fontWeight="bold" mt={2}>
              Mileage Range
            </Typography>
            <DropdownMileage {...{ form, setForm }} />
          </Grid>

          <Grid item md={12} xs={6}>
            <Typography variant="body" fontWeight="bold" mt={2}>
              CC Range
            </Typography>
            <DropdownCC {...{ form, setForm }} />
          </Grid>

          <Grid item md={12} xs={6}>
            <Typography variant="body" fontWeight="bold" mt={2}>
              Steering
            </Typography>
            <DropdownSteering {...{ form, setForm }} />
          </Grid>

          <Grid item md={12} xs={6}>
            <Typography variant="body" fontWeight="bold" mt={2}>
              Fuel
            </Typography>
            <DropdownFuel {...{ form, setForm }} />
          </Grid>

          <Grid item md={12} xs={12} textAlign="center" mt="1rem">
            <Button
              size="medium"
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
              onClick={handleSearch}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}

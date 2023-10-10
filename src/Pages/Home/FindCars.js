import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import bg from "../../assets/img.avif";
import DropdownCountry from "../../Components/DropdownCountry";
import DropdownPrice from "../../Components/DropdownPrice";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function FindCars({ carsData, setCarsData }) {
  const bgImg = `url(${bg})`;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [form, setForm] = useState({
    country: "",
    price: "",
  });
  const [searchText, setSearchText] = useState("");

  const handleSearchText = (e) => {
    console.log("handleSearchText called");
    setSearchText(e.target.value);
    const text = e.target.value.trim().toLowerCase(); // Convert search text to lowercase
    const filteredCars = carsData.filter((item) =>
      item.name.toLowerCase().includes(text)
    );
    setCarsData(filteredCars);
    console.log(filteredCars);
  };

  const handleSearch = (e) => {
    const lowerCaseCountry = form.country.toLowerCase();

    const filteredData = carsData.filter((item) => {
      const countryMatch = item.country.toLowerCase() === lowerCaseCountry;
      const priceMatch = item.price === form.price;

      return countryMatch || priceMatch;
    });
    console.log(filteredData, "flterdata");

    setCarsData(filteredData);
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        background: bgImg,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "400px",
        mb: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          width: "100%",
        }}
      >
        <Typography
          variant="h6"
          color="white"
          sx={{ marginBottom: "5px", fontWeight: "bolder", fontSize: "40px" }}
        >
          Find Used Cars
        </Typography>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            width: "50%",
            height: "80px",
          }}
        >
          <Grid container spacing={1} justifyContent="center" my={1}>
            <Grid item xs={10} md={3}>
              <TextField
                variant="outlined"
                label="Search"
                placeholder="Search..."
                value={searchText}
                onChange={handleSearchText}
                sx={{ background: "white", borderRadius: "8px" }}
              />
            </Grid>
            <Grid item md={2} xs={10}>
              <DropdownPrice {...{ form, setForm }} ml={3} />
            </Grid>

            <Grid item xs={10} md={2} ml={6}>
              <DropdownCountry {...{ form, setForm }} />
            </Grid>
            <Grid item md={3} xs={10} textAlign={!matches && "center"} ml={6}>
              <Button
                size="small"
                variant="contained"
                sx={{
                  background: "primary.main",
                  height: "56px",
                  width: "8rem",
                  borderRadius: "0.5rem",
                  color: "white",
                  fontFamily: "Semibold",
                }}
                onClick={handleSearch}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Stack>
  );
}

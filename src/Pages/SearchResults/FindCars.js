import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import bg from "../../assets/image.png";
import DropdownCountry from "../../Components/DropdownCountry";
import DropdownPrice from "../../Components/DropdownPrice";
import { useIsMobile } from "../../contexts/isMobile";
import { priceRangeConverter } from "../../Functions/functions";
import { toast } from "react-toastify";
import SearchedResults from "./SearchResults";
import { GET } from "../../api/axios";

export default function FindCars() {
  const [carsData, setCarsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const bgImg = `url(${bg})`;
  const matches = useIsMobile();
  const fetchData = async () => {
    GET("/cars/allcars")
      .then((result) => {
        setCarsData(result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  const [form, setForm] = useState({
    country: "",
    price: "",
  });
  const [searchText, setSearchText] = useState("");

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
    const text = e.target.value.trim().toLowerCase();
    const filteredCars = carsData.filter((item) =>
      item.name.toLowerCase().includes(text)
    );
    setFilteredData(filteredCars);
  };

  const handleSearch = (e) => {
    const lowerCaseCountry = form.country.toLowerCase();

    const { minPrice, maxPrice } = priceRangeConverter(form.price);

    const data = carsData.filter((item) => {
      const countryMatch = item.country.toLowerCase() === lowerCaseCountry;
      const priceMatch =
        parseInt(item?.price) >= minPrice && parseInt(item?.price) <= maxPrice;

      return countryMatch || priceMatch;
    });
    setFilteredData(data);
    setForm({ country: "", price: "" });
  };

  return (
    <>
      {" "}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          background: bgImg,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          height: "400px",
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
            height: matches ? "17rem" : "80px",
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
            <Grid item md={2} xs={10} mb={2}>
              <DropdownPrice {...{ form, setForm }} ml={3} />
            </Grid>

            <Grid item xs={10} md={2} ml={!matches && 6}>
              <DropdownCountry {...{ form, setForm }} />
            </Grid>
            <Grid item md={3} xs={10} textAlign={"center"} ml={!matches && 6}>
              <Button
                size="small"
                variant="contained"
                sx={{
                  background: "#D0AC4C",
                  height: "56px",
                  width: "8rem",
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
      </Box>
      <SearchedResults {...{ filteredData, isLoading }} />
    </>
  );
}

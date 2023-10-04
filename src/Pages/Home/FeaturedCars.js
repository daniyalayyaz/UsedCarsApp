import { Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CarCard from "../../Components/CarCard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GET } from "../../api/axios";

const CustomPrevArrow = (props) => {
  return (
    <ArrowBackIosNewIcon
      className="slick-prev"
      sx={{
        zIndex: 1,
        marginLeft: "1.5rem",
        color: "white",
        padding: "5px",
        height: "32px",
        width: "32px",
        background: "#4c545c",
        borderRadius: "100%",
        "&:hover": {
          cursor: "pointer", // Change cursor on hover
          background: "black", // Change color on hover
          color: "white",
        },
      }}
      onClick={props.onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  return (
    <ArrowForwardIosIcon
      className="slick-next"
      sx={{
        marginRight: " 1.5rem",
        color: "white",
        padding: "5px",
        height: "32px",
        width: "32px",
        background: "#4c545c",
        borderRadius: "100%",
        "&:hover": {
          cursor: "pointer", // Change cursor on hover
          background: "black", // Change color on hover
          color: "white",
        },
      }}
      onClick={props.onClick}
    />
  );
};

export default function FeaturedCars() {
  const [carsData, setCarsData] = useState([]);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const fetchData = async () => {
    GET("/cars/allcars")
      .then((result) => {
        setCarsData(result);
      })
      .catch((error) => {
        console.error("Axios error:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Container sx={{ marginTop: "4rem" }}>
        <Stack direction="row" justifyContent="center">
          <Typography
            variant="h4"
            fontWeight="bold"
            marginTop={8}
            marginBottom={6}
          >
            Featured Used Cars
          </Typography>
        </Stack>
        <Slider {...settings}>
          {carsData.map((item, index) => (
            <Grid item key={index}>
              <CarCard
                name={item.name}
                price={item.price}
                country={item.country}
                id={item._id}
              />
            </Grid>
          ))}
        </Slider>
      </Container>
    </>
  );
}

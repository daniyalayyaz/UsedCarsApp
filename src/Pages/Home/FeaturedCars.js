import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CarCard from "../../Components/CarCard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "../../Components/Loader";

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

export default function FeaturedCars({ isLoading, carsData }) {
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

  if (isLoading) return <Loader />;
  console.log(carsData);
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
        {carsData.length > 0 ? (
          <Slider {...settings}>
            {carsData.map((item, index) => (
              <Grid item key={index}>
                <CarCard data={item} />
              </Grid>
            ))}
          </Slider>
        ) : (
          <Typography
            variant="h6"
            alignItems="center"
            justifyContent="center"
            fontWeight="bold"
            mb={4}
          >
            No Cars Found
          </Typography>
        )}
      </Container>
    </>
  );
}

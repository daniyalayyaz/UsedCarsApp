import { Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { useIsMobile } from "../../contexts/isMobile";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SpeedIcon from "@mui/icons-material/Speed";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import Loader from "../../Components/Loader";

export default function CarsList({ list, isLoading }) {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const handleDetail = (name, id) => {
    navigate(`/carlistings/${name}/${id}`);
  };

  if (isLoading) return <Loader />;
  return (
    <>
      {list.map((item, index) => (
        <Card
          key={index}
          elevation={2}
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            marginBottom: 3,
          }}
        >
          <Grid container spacing={2} m={2} alignItems="cnter">
            <Grid item md={2} xs={10} justifyContent="center">
              {item.coverImage ? (
                <img
                  src={`http://localhost:5000/upload${item.coverImage}`}
                  alt="Logo"
                  style={{
                    width: isMobile ? "100%" : 130,
                    height: "100%",
                  }}
                />
              ) : (
                <img
                  src={require(`../../assets/noImage.jpeg`)}
                  alt="Logo"
                  style={{
                    width: isMobile ? 120 : 130,
                    height: 120,
                  }}
                />
              )}
            </Grid>
            <Grid item md={6} xs={6} justifyContent="center">
              <Typography variant="h6" fontWeight="bold">
                {item.name}
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <CalendarMonthIcon sx={{ height: "15px" }} /> {item.year}
                </Grid>
                <Grid item xs={4}>
                  <SpeedIcon sx={{ height: "15px" }} />
                  {item.mileage}
                </Grid>
                <Grid item xs={4}>
                  <LocationOnIcon sx={{ height: "15px" }} />
                  {item.country}
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  {item.fuel}
                </Grid>
                <Grid item xs={4}>
                  {item.cc}
                </Grid>
                <Grid item xs={4}>
                  {item.transmission}
                </Grid>
              </Grid>
              <Typography>
                Last Updated: {moment(item.createdAt).format("MMMM Do YYYY")}
              </Typography>
            </Grid>
            <Grid
              item
              md={4}
              xs={6}
              textAlign="right"
              pr={isMobile ? 5 : 6}
              alignItems="center"
              mt={2}
            >
              <Typography variant="h6" fontWeight="bold" mb={1}>
                {item.price}
              </Typography>
              <Button
                size="small"
                variant="contained"
                sx={{
                  background: "primary.main",
                  borderRadius: "0.5rem",
                  color: "white",
                  fontFamily: "Semibold",
                }}
                onClick={() => handleDetail(item.country, item._id)}
              >
                View Details
              </Button>
            </Grid>
          </Grid>
        </Card>
      ))}
    </>
  );
}

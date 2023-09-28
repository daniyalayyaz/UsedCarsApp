import { Button, Card, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useIsMobile } from "../../contexts/isMobile";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SpeedIcon from "@mui/icons-material/Speed";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { CarData } from "./CarDataUtils";
import { useNavigate } from "react-router-dom";

export default function CarsList({ heading }) {
  const [list, setList] = useState([]);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const handleDetail = (id) => {
    navigate(`/carlistings/${id}`);
  };

  useEffect(() => {
    if (CarData) {
      const filteredData = CarData.filter((item) => item.country === heading);
      setList(filteredData);
    }
  }, [heading]);
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
          <Grid container m={2}>
            <Grid md={2} xs={12}>
              <img
                src={require(`../../assets/list.jpg`)}
                alt="Logo"
                style={{
                  width: 160,
                  alignItems: "center",
                  marginLeft: isMobile ? "2rem" : 0,
                }}
              />
            </Grid>
            <Grid item md={6} xs={12} pl={4}>
              <Typography variant="h6" fontWeight="bold">
                {item.name}
              </Typography>
              <Grid container spacing={2}>
                <Grid item>
                  <CalendarMonthIcon sx={{ height: "15px" }} /> {item.year}
                </Grid>
                <Grid item>
                  <SpeedIcon sx={{ height: "15px" }} />
                  {item.mileage}
                </Grid>
                <Grid item>
                  <LocationOnIcon sx={{ height: "15px" }} />
                  {item.country}
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item>{item.fuel} </Grid>
                <Grid item>{item.cc}</Grid>
                <Grid item>{item.transmission}</Grid>
              </Grid>
              <Typography>Last Updated: {item.date}</Typography>
            </Grid>
            <Grid item md={4} xs={12} textAlign="right" pr={6} mt={2}>
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
                onClick={() => handleDetail(item.id)}
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

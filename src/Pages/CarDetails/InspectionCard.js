import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import car from "../../assets/car-inspection.jpg";
import { useIsMobile } from "../../contexts/isMobile";

export default function InspectionCard() {
  const isMobile = useIsMobile();
  return (
    <Card
      elevation={6}
      sx={{
        marginTop: 2,
        display: "flex",
        flexDirection: "column",
        marginBottom: 3,
      }}
    >
      <Typography variant="h6" fontWeight="bold" m={2}>
        Car Inspection is Important Before buy a Used Car
      </Typography>
      <Grid container spacing={2} m={1} mb={3}>
        <Grid item md={7} width={isMobile ? "90%" : "100%"}>
          <Typography>
            Before you drive away with that dream used car, don't forget the
            crucial pit stop – a thorough car inspection. Your peace of mind
            starts here! Ensure you're making a smart investment by getting the
            experts to give it a once-over. Our meticulous inspections reveal
            hidden secrets and save you from unwanted surprises down the road.
            Trust us, a little inspection today can protect your joy of driving
            tomorrow.
          </Typography>
        </Grid>
        <Grid item md={5}>
          <img src={car} width={250} alt="" />
        </Grid>
      </Grid>
    </Card>
  );
}

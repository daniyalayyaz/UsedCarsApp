import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import car from "../../assets/car-inspection.jpg";

export default function InspectionCard() {
  return (
    <Card
      elevation={2}
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
      <Grid container spacing={2} m={2}>
        <Grid item md={6}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt
            fugiat iste aperiam numquam similique? Architecto facilis voluptates
            distinctio aut, ut praesentium saepe iusto impedit repellendus iure
            porro, dicta exercitationem?
          </Typography>
        </Grid>
        <Grid item md={6}>
          <img src={car} width={310} />
        </Grid>
      </Grid>
    </Card>
  );
}

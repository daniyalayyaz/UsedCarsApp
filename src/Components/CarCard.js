import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import img from "../assets/img.png";

export default function CarCard({ car, price, location }) {
  return (
    <Card sx={{ margin: "1rem", maxWidth: "100%", maxHeight: "100%" }}>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography gutterBottom variant="h5">
          {car}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {location}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="200"
        src={img}
        alt="Image Alt Text"
        // onClick={() => handleRedirect()}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Button
          size="small"
          variant="contained"
          sx={{
            background: "primary.main",

            borderRadius: "0.5rem",
            color: "white",
            marginRight: "10px",
            fontFamily: "Semibold",
          }}
          onClick={""}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}

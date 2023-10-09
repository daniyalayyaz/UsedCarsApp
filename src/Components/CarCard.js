import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function CarCard({ data }) {
  const navigate = useNavigate();

  const handleClick = (name, id) => {
    navigate(`/carlistings/${name}/${id}`);
  };
  return (
    <Card sx={{ margin: "1rem", maxWidth: "100%", maxHeight: "100%" }}>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography gutterBottom variant="h5">
          {data.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {data.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.country}
        </Typography>
      </CardContent>
      {data.coverImage ? (
        <CardMedia
          component="img"
          height="200"
          src={`http://localhost:5000/upload${data.coverImage}`}
          alt="Image Alt Text"
        />
      ) : (
        <CardMedia
          component="img"
          height="200"
          src={require("../assets/noImage.jpeg")}
          alt="Image Alt Text"
        />
      )}
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
          onClick={() => handleClick(data.country, data._id)}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}

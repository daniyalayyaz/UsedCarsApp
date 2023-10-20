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
          src={`https://red-jolly-tortoise.cyclic.app/upload${data.coverImage}`}
          alt="Image Alt Text"
          sx={{ objectFit: "cover" }}
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
            background: "#D0AC4C",
            borderRadius: "0.5rem",
            color: "white",
            marginRight: "10px",
            fontFamily: "Semibold",
            "&:hover ": {
              color: "#D0AC4C",
            },
          }}
          onClick={() => handleClick(data.country, data._id)}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}

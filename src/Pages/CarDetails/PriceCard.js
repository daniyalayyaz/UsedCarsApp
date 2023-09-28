import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function PriceCard({ price, country }) {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        backgroundColor: "primary.main",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          my: "1rem",
          color: "white",
        }}
      >
        <Typography>Price</Typography>
        <Typography variant="h6" fontWeight="bold">
          {price}
        </Typography>
        <Typography>
          <LocationOnIcon sx={{ height: "16px", ml: -1 }} />
          {country}
        </Typography>
      </Box>
    </Stack>
  );
}

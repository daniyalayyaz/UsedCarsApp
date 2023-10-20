import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import bg from "../../assets/image.png";
import { useIsMobile } from "../../contexts/isMobile";
import { useNavigate } from "react-router-dom";

export default function ExploreCars() {
  const bgImg = `url(${bg})`;
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/results");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        width: "100%",
        background: bgImg,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        height: "400px",
        mb: "4rem",
      }}
    >
      <div
        style={{ marginLeft: "2rem", marginTop: !isMobile ? "6rem" : "2rem" }}
      >
        <Typography
          variant="h6"
          color="white"
          sx={{
            width: !isMobile ? "35%" : "60%",
            fontWeight: "bold",
            fontSize: isMobile ? "24px" : "36px",
          }}
        >
          Your Ideal Ride Awaits at Bavi Motors
        </Typography>
        <Typography
          variant="body1"
          color="white"
          sx={{ fontSize: "20px", mb: 3 }}
        >
          Let us help you get your next car
        </Typography>
        <Grid item md={12} xs={10}>
          <Button
            size="small"
            variant="contained"
            sx={{
              background: "#D0AC4C",
              height: "56px",
              borderRadius: "0.5rem",
              color: "white",
              fontFamily: "Semibold",
              "&:hover ": {
                color: "#D0AC4C",
              },
            }}
            onClick={handleSearch}
          >
            {isMobile ? "Explore" : "Find Your Perfect Wheels"}
          </Button>
        </Grid>
      </div>
    </Box>
  );
}

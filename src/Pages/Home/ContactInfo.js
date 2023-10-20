import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ContactInfo() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/contact`);
  };
  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        backgroundColor: "white",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          width: "70%",
          my: "4rem",
          color: "black",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Get in Touch
        </Typography>
        <Typography my={2}>
          We can help.Our team is available to answer your questions.
        </Typography>
        <Grid item md={6} xs={12}>
          <Button
            size="large"
            variant="contained"
            sx={{
              background: "#D0AC4C",
              borderRadius: "0.5rem",
              color: "white",
              fontFamily: "Semibold",
              "&:hover ": {
                color: "#D0AC4C",
              },
            }}
            onClick={handleClick}
          >
            Contact Us
          </Button>
        </Grid>
      </Box>
    </Stack>
  );
}

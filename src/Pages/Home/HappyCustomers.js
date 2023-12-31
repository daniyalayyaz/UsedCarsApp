import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CustomerReviewCard from "../../Components/CustomerReviewCard";

export default function HappyCustomers() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        backgroundColor: "#fff8e5",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          width: "80%",
          my: "2rem",
        }}
      >
        <Typography variant="h4">Happy Customers</Typography>
        <Typography variant="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius,
          orci id facilisis egestas, neque purus sagittis arcu, nec maximus quam
          odio nec elit Pellentesque eget ipsum mattis.
        </Typography>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <CustomerReviewCard />
          </Grid>
          <Grid item md={4}>
            <CustomerReviewCard />
          </Grid>
          <Grid item md={4}>
            <CustomerReviewCard />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}

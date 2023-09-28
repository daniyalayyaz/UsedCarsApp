import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";

export default function CustomerReviewCard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        width: "100%",
        my: "2rem",
        mx: "2rem",
        border: "4px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item md={4}>
          <Card sx={{ width: "20rem" }}>
            <div
              style={{
                marginTop: "2rem",
                marginBottom: "2rem",
                margin: "2rem",
              }}
            >
              <Typography variant="h5"> David Jackson</Typography>
              <Typography variant="body"> London,UK</Typography>

              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                varius, orci id facilisis egestas, neque purus sagittis arcu,
                nec maximus quam odio nec elit Pellentesque eget ipsum mattis.
              </Typography>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

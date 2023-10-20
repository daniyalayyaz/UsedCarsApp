import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import img from "../../assets//leadingimg.png";
import { useIsMobile } from "../../contexts/isMobile";

export default function About() {
  const isMobile = useIsMobile();
  return (
    <Paper elevation={3} sx={{ mt: 2, bgcolor: "white" }}>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item md={7} xs={12}>
          <Box px={{ xs: 2, md: 8 }} py={5} lineHeight={1.5}>
            <Typography variant="h3">Our Perfect Platform</Typography>

            <Typography variant="body1" mt={2}>
              While we are still small in the UK, being an independent,
              family-run business gives us key advantages over larger rivals.
              Our small size allows us to offer a highly personalized customer
              experience. You will work directly with our owners to find the
              perfect vehicle, rather than getting lost in the system at a large
              dealership.
            </Typography>

            <Typography variant="body1" mt={2}>
              As a scrappy startup, we don't have the overhead of big operations
              so we can pass the savings directly onto you. You will find our
              prices are very competitive compared to large used car chains. We
              also don't engage in high-pressure sales tactics. Our friendly
              team is here to help you make the right decision for your needs,
              not push you into an overpriced or unsuitable vehicle.
            </Typography>

            <Typography variant="body1" mt={2}>
              Our independence means fast decisions and flexibility. If you need
              a vehicle sourced from Japan quickly, or have a unique request, we
              have the autonomy to make it happen for you. You won't get bogged
              down in bureaucracy like at some bigger competitors.
            </Typography>
            <Typography variant="body1" mt={2}>
              At Bavi Motors, we take pride in our personalized customer care
              and evaluating each person's requirements individually. Come
              experience the benefits of choosing a small, family-owned business
              for your used Japanese car.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={5} xs={12} mt={8}>
          <img
            src={img}
            style={{ width: isMobile ? "100%" : "90%", height: "30rem" }}
            alt=""
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

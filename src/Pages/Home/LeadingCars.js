import { Grid, Typography } from "@mui/material";
import React from "react";
import img from "../../assets/leadingimg.png";

export default function LeadingCars() {
  return (
    <>
      <Grid container justifyContent="center" mb={4}>
        <Grid item md={6} xs={12}>
          <img src={img} style={{ width: "40rem", height: "30rem" }} alt="" />
        </Grid>
        <Grid item md={6} xs={12} bgcolor="aliceblue">
          <div style={{ marginLeft: "4rem", marginTop: "2rem" }}>
            <Typography variant="h6">WORLD'S LEADING USED CARS</Typography>
            <Typography variant="h4" color="primary" mb={2}>
              WELCOME TO AUTO CAR
            </Typography>
            <Typography variant="body1" pr={"8rem"} lineHeight={1.5}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              sapien metus, consectetur et efficitur ut, mattis et nisl. Etiam
              aliquet erat lorem, sed rhoncus justo hendrerit ac. Donec vel
              lacus tincidunt, sagittis lorem sed, ultricies magna. Suspendisse
              gravida massa sit amet urna faucibus, fermentum fringilla tellus
              congue. Integer lacinia iaculis dolor, in convallis metus laoreet
              quis. Vestibulum pulvinar, felis sit amet dignissim feugiat, est
              urna congue orci, nec mattis felis nunc sed nulla.
            </Typography>

            <Typography variant="body1" mt={2}>
              Nam rutrum tortor eget lorem mattis mattis.
            </Typography>
            <Typography variant="body1" mt={1}>
              Nam rutrum tortor eget lorem mattis mattis.
            </Typography>
            <Typography variant="body1" mt={1}>
              Nam rutrum tortor eget lorem mattis mattis.
            </Typography>
            <Typography variant="body1" mt={1}>
              Nam rutrum tortor eget lorem mattis mattis.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

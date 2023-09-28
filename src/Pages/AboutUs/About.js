import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import img from "../../assets//leadingimg.png";

export default function About() {
  return (
    <Paper elevation={3} sx={{ mt: 2, bgcolor: "aliceblue" }}>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item md={7} xs={12}>
          <Box px={{ xs: 2, md: 8 }} py={5} lineHeight={1.5}>
            <Typography variant="h3">Our Perfect Platform</Typography>

            <Typography variant="body1" mt={2}>
              Doctus omnesque duo ne, cu vel offendit erroribus. Laudem
              hendrerit pro ex, cum postea delectus ad. Te pro feugiat perpetua
              tractatos. Nam movet omnes id, usu te meis corpora. Augue doming
              quaestio vix at. Sumo duis ea sed, ut vix euismod lobortis
              prodesset, everti necessitatibus mei cu.
            </Typography>

            <Typography variant="body1" mt={2}>
              Doctus omnesque duo ne, cu vel offendit erroribus. Laudem
              hendrerit pro ex, cum postea delectus ad. Te pro feugiat perpetua
              tractatos. Nam movet omnes id, usu te meis corpora. Augue doming
              quaestio vix at. Sumo duis ea sed, ut vix euismod lobortis
              prodesset, everti necessitatibus mei cu.
            </Typography>

            <Typography variant="body1" mt={2}>
              Doctus omnesque duo ne, cu vel offendit erroribus. Laudem
              hendrerit pro ex, cum postea delectus ad. Te pro feugiat perpetua
              tractatos. Nam movet omnes id, usu te meis corpora. Augue doming
              quaestio vix at. Sumo duis ea sed, ut vix euismod lobortis
              prodesset, everti necessitatibus mei cu.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={5} xs={12}>
          <img src={img} style={{ width: "90%", height: "20rem" }} alt="" />
        </Grid>
      </Grid>
    </Paper>
  );
}

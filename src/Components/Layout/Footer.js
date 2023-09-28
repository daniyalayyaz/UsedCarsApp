import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        p: 6,
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              varius, orci id facilisis egestas, neque purus sagittis arcu, nec
              maximus quam odio nec elit Pellentesque eget ipsum mattis.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              123 Main Street, Anytown, UK
            </Typography>
            <Typography variant="body2">Email: info@example.com</Typography>
            <Typography variant="body2">Phone: +1 234 567 8901</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Link
              href="https://www.facebook.com/"
              style={{ marginRight: "1.5rem", color: "white" }}
            >
              <FacebookIcon />
            </Link>
            <Link
              href="https://www.instagram.com/"
              style={{ marginRight: "1.5rem", color: "white" }}
            >
              <InstagramIcon />
            </Link>
            <Link href="https://www.twitter.com/" style={{ color: "white" }}>
              <TwitterIcon />
            </Link>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Typography variant="body2" align="center">
            {"Copyright © "}
            <Link color="inherit" href="/" style={{ color: "white" }}>
              Used Car App
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

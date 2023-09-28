import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { SolidButton } from "../../Components/SolidButton";

export default function ContactSeller() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        backgroundColor: "primary.main",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        my: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          my: "2rem",
          color: "white",
        }}
      >
        <Typography variant="h5">Contact Form</Typography>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <TextField
              margin="normal"
              fullWidth
              label="Your Name"
              name="fullname"
              sx={{ background: "white", borderRadius: 2 }}
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              margin="normal"
              fullWidth
              label="Your Email"
              name="email"
              sx={{ background: "white", borderRadius: 2 }}
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              margin="normal"
              fullWidth
              label="PhoneNumber"
              name="phone"
              sx={{ background: "white", borderRadius: 2 }}
            />
          </Grid>

          <Grid item md={12}>
            <TextField
              margin="normal"
              fullWidth
              label="Subject"
              name="subject"
              sx={{ background: "white", borderRadius: 2 }}
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              margin="normal"
              fullWidth
              rows={4}
              multiline
              label="Messsage"
              name="message"
              sx={{ background: "white", borderRadius: 2 }}
            />
          </Grid>
          <Grid item md={12} textAlign="center">
            <SolidButton label="Submit Now" />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}

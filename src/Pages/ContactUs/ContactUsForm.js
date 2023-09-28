import { Button, Card, Grid, TextField } from "@mui/material";
import React from "react";

export default function ContactUsForm() {
  return (
    <Card sx={{ width: "100%", height: "100%" }}>
      <div
        style={{
          marginTop: "2rem",
          marginBottom: "2rem",
          margin: "2rem",
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          <Grid item md={6} xs={12}>
            <TextField
              margin="normal"
              fullWidth
              label="FullName"
              name="fullname"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              margin="normal"
              fullWidth
              label="PhoneNumber"
              name="phone"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField margin="normal" fullWidth label="Email" name="email" />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              margin="normal"
              fullWidth
              label="Address"
              name="address"
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              margin="normal"
              fullWidth
              rows={4}
              multiline
              label="Details"
              name="details"
              sx={{}}
            />
          </Grid>
        </Grid>
        <Grid item md={12} mt={2} xs={12} textAlign="center">
          <Button
            size="small"
            variant="contained"
            sx={{
              background: "primary.main",

              borderRadius: "0.5rem",
              color: "white",
              marginRight: "10px",
              fontFamily: "Semibold",
            }}
            onClick={""}
          >
            Submit Now
          </Button>
        </Grid>
      </div>
    </Card>
  );
}

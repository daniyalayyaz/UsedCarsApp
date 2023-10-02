import { Button, Card, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

export default function ContactUsForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const handleChange = (e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
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
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              margin="normal"
              fullWidth
              label="PhoneNumber"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              margin="normal"
              fullWidth
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              margin="normal"
              fullWidth
              label="Address"
              name="address"
              value={form.address}
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              margin="normal"
              fullWidth
              rows={4}
              multiline
              label="Details"
              name="message"
              value={form.message}
              onChange={handleChange}
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
            onClick={handleSubmit}
          >
            Submit Now
          </Button>
        </Grid>
      </div>
    </Card>
  );
}

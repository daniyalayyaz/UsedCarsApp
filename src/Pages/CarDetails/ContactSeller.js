import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { SolidButton } from "../../Components/SolidButton";
import { toast } from "react-toastify";
import { POST } from "../../api/axios";

export default function ContactSeller() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    type: "Inquiry",
  });
  const handleChange = (e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      fullname: form.fullname,
      email: form.email,
      phone: form.phone,
      subject: form.subject,
      message: form.message,
      type: form.type,
    };
    setForm({
      fullname: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      type: "Inquiry",
    });
    try {
      const response = await POST("/contact", formData);

      if (response) {
        toast.success("Form Submitted Successfully");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

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
          <Grid item md={12} xs={12}>
            <TextField
              margin="normal"
              fullWidth
              onChange={handleChange}
              label="Your Name"
              name="fullname"
              value={form.fullname}
              sx={{ background: "white", borderRadius: 2 }}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              margin="normal"
              fullWidth
              label="Your Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              sx={{ background: "white", borderRadius: 2 }}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              margin="normal"
              fullWidth
              label="PhoneNumber"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              sx={{ background: "white", borderRadius: 2 }}
            />
          </Grid>

          <Grid item md={12} xs={12}>
            <TextField
              margin="normal"
              fullWidth
              label="Subject"
              name="subject"
              onChange={handleChange}
              value={form.subject}
              sx={{ background: "white", borderRadius: 2 }}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              margin="normal"
              fullWidth
              rows={4}
              multiline
              label="Messsage"
              name="message"
              onChange={handleChange}
              value={form.message}
              sx={{ background: "white", borderRadius: 2 }}
            />
          </Grid>
          <Grid item md={12} xs={12} textAlign="center">
            <SolidButton label="Submit Now" onClick={handleSubmit} />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}

import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import ContactUsForm from "./ContactUsForm";

export default function ContactCardDetail() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        backgroundColor: "white",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          my: "4rem",
        }}
      >
        <Grid container spacing={2} textAlign="center" justifyContent="center">
          <Grid item>
            <Card
              elevation={4}
              sx={{
                width: "20rem",
                height: "11rem",
                backgroundColor: "#000000",
              }}
            >
              <div
                style={{
                  marginTop: "2rem",
                  marginBottom: "2rem",
                  margin: "2rem",
                  color: "white",
                }}
              >
                <HomeIcon sx={{ color: "white" }} />
                <Typography variant="h6" fontWeight="bold">
                  {" "}
                  ADDRESS:
                </Typography>
                <Typography variant="body">
                  {" "}
                  49 the Fitzgerald, Sheffield , S3 8PQ
                </Typography>
              </div>
            </Card>
          </Grid>
          <Grid item>
            <Card
              elevation={4}
              sx={{
                width: "20rem",
                height: "11rem",
                backgroundColor: "#000000",
              }}
            >
              <div
                style={{
                  marginTop: "2rem",
                  marginBottom: "2rem",
                  margin: "2rem",
                  color: "white",
                }}
              >
                <MailIcon />
                <Typography variant="h6" fontWeight="bold">
                  {" "}
                  EMAIL ADDRESS:
                </Typography>
                <Typography variant="body">
                  Hamza.iqbal@bavimotors.com
                </Typography>
              </div>
            </Card>
          </Grid>
          <Grid item>
            <Card
              elevation={4}
              sx={{
                width: "20rem",
                height: "11rem",
                backgroundColor: "#000000",
              }}
            >
              <div
                style={{
                  marginTop: "2rem",
                  marginBottom: "2rem",
                  margin: "2rem",
                  color: "white",
                }}
              >
                <PhoneIcon />
                <Typography variant="h6" fontWeight="bold">
                  PHONE NO:
                </Typography>
                <Typography variant="body">07466242984</Typography>
              </div>
            </Card>
          </Grid>
        </Grid>
        <Grid container mt={4}>
          <ContactUsForm />
        </Grid>
      </Box>
    </Stack>
  );
}

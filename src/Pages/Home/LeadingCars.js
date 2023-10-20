import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import img from "../../assets/leadingimg.png";
import { useIsMobile } from "../../contexts/isMobile";

export default function LeadingCars() {
  const isMobile = useIsMobile();
  return (
    <>
      <Grid container justifyContent="center" mb={4}>
        <Grid item md={5} xs={12}>
          <img
            src={img}
            style={{ width: isMobile ? "100%" : "40rem", height: "32rem" }}
            alt=""
          />
        </Grid>
        <Grid item md={7} xs={12} bgcolor="white">
          <Container
            style={{
              marginLeft: "2rem",
              marginTop: "1rem",
              marginBottom: "2rem",
              width: isMobile ? "80%" : "94%",
            }}
          >
            <Typography variant="h6">WORLD'S LEADING USED CARS</Typography>
            <Typography variant="h4" color="primary" mb={2}>
              WELCOME TO BAVI MOTORS
            </Typography>
            <Typography variant="body1" pr={"2rem"} lineHeight={1.5}>
              Bavi Motors, a UK-based independent family-run business, excels in
              the used car market by offering personalized customer service,
              competitive pricing, and unparalleled flexibility. By directly
              engaging with owners, customers enjoy a non-impersonal experience.
              Bavi Motors, as a scrappy startup, avoids high-pressure sales
              tactics, ensuring cost savings. Their autonomy results in swift
              decision-making and adaptability, making them an ideal choice for
              sourcing vehicles or handling unique requests. Experience a
              customer-centric approach with Bavi Motors, where individual
              requirements for used Japanese cars are meticulously assessed.
            </Typography>

            <ul>
              <li>
                <Typography variant="body1" mt={1}>
                  Competitive Pricing Without High-Pressure Sales
                </Typography>
              </li>
              <li>
                <Typography variant="body1" mt={1}>
                  Autonomy to Source Vehicles and Provide Fast Service
                </Typography>
              </li>
              <li>
                <Typography variant="body1" mt={1}>
                  Independence for Fast Decision-Making and Unique Requests
                </Typography>
              </li>
              <li>
                <Typography variant="body1" mt={2}>
                  Small, Family-Run Business for Personalized Customer
                  Experience
                </Typography>
              </li>
            </ul>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { SolidButton } from "../SolidButton";
import { useIsMobile } from "../../contexts/isMobile";
import DropdownButton from "./DropdownButton";

export default function Navbar() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const handleHome = () => {
    navigate("/");
  };
  const handleAbout = () => {
    navigate("/about");
  };
  const handleContact = () => {
    navigate("/contact");
  };
  const handleFaqs = () => {
    navigate("/faqs");
  };
  const handleJapenseCars = (name) => {
    navigate(`/carlistings/${name}`);
  };
  const handleUKCars = (name) => {
    navigate(`/carlistings/${name}`);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "primary" }}>
        <Toolbar>
          {/* Left side */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: 40, marginRight: 30, borderRadius: "50px" }}
            />
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <Typography variant="h6" color="white">
                USED CAR APP
              </Typography>
            </Link>
          </div>

          {/* Right side */}

          {isMobile ? (
            <div div style={{ marginLeft: "auto" }}>
              <DropdownButton />
            </div>
          ) : (
            <div style={{ marginLeft: "auto" }}>
              <Grid container>
                <>
                  <Grid>
                    <SolidButton label="Home" onClick={handleHome} />
                  </Grid>
                  <Grid>
                    <SolidButton
                      label="About Us"
                      onClick={() => handleAbout()}
                    />
                  </Grid>
                  <Grid>
                    <SolidButton
                      label="Japense Cars"
                      onClick={() => handleJapenseCars("Japan")}
                    />
                  </Grid>
                  <Grid>
                    <SolidButton
                      label="UK Cars"
                      onClick={() => handleUKCars("UK")}
                    />
                  </Grid>
                  <Grid>
                    <SolidButton label="FAQs" onClick={handleFaqs} />
                  </Grid>
                  <Grid>
                    <SolidButton label="Contact Us" onClick={handleContact} />
                  </Grid>
                </>
              </Grid>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

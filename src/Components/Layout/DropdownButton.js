import React, { useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { IconButton, Menu } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";

function DropdownButton({ setHeading }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleJapenseCars = (name) => {
    navigate(`/carlistings/${name}`);
  };
  const handleUKCars = (name) => {
    navigate(`/carlistings/${name}`);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleOpenMenu}>
        <ArrowDropDownCircleOutlinedIcon sx={{ color: "white" }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <Box
          sx={{
            minWidth: 160,
            backgroundColor: "white",
            borderRadius: "8px",
            marginBottom: "10px",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <MenuItem>Home</MenuItem>
          </Link>

          <Link
            to="/about"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem> About Us</MenuItem>
          </Link>
          <div
            onClick={() => handleJapenseCars("Japan")}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem> Japense Cars</MenuItem>
          </div>

          <div
            onClick={() => handleUKCars("UK")}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem> UK Cars</MenuItem>
          </div>
          <Link to="/faqs" style={{ textDecoration: "none", color: "inherit" }}>
            <MenuItem>FAQS </MenuItem>
          </Link>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem>Contact Us </MenuItem>
          </Link>
        </Box>
      </Menu>
    </>
  );
}
export default DropdownButton;

import React from "react";
import { Button } from "@mui/material";

export function SolidButton({ onClick, label, btnwidth }) {
  return (
    <Button
      size="small"
      variant="contained"
      sx={{
        background: "primary.main",
        borderRadius: "0.5rem",
        width: btnwidth,
        height: "35px",
        color: "white",
        marginRight: "10px",
        fontFamily: "Semibold",
        "&:hover ": {
          color: "#D0AC4C",
        },
      }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}

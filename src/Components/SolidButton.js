import React from "react";
import { Button } from "@mui/material";

export function SolidButton({ onClick, label, btnwidth }) {
  return (
    <Button
      size="small"
      variant="contained"
      sx={{
        background: "white",
        borderRadius: "0.5rem",
        width: btnwidth,
        height: "35px",
        color: "primary.main",
        marginRight: "10px",
        fontFamily: "Semibold",
      }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}

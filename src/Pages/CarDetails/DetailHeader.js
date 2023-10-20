import { Stack, Typography } from "@mui/material";
import React from "react";

export default function DetailHeader({ name }) {
  return (
    <Stack
      direction="row"
      sx={{
        backgroundColor: "white",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Typography variant="h4" fontWeight="bold" m={1.5}>
        {name}
      </Typography>
    </Stack>
  );
}

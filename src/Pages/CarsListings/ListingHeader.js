import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export default function ListingHeader({ heading }) {
  const modifyheading =
    heading.name &&
    `${
      heading.name === "Japan"
        ? `Japanese Cars Listing`
        : `${heading.name} Cars Listing`
    } `;
  return (
    <>
      {heading.name && (
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
              mt: "1rem",
            }}
          >
            <Typography variant="h4" fontWeight="bold" textAlign="center">
              {modifyheading}
            </Typography>
          </Box>
        </Stack>
      )}
    </>
  );
}

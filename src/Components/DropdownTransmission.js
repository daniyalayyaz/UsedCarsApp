import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const TransmissionData = [
  { _id: 1, title: "Automatic" },
  { _id: 2, title: "Manual" },
];

function DropdownTransmission() {
  const [transmission, setTransmission] = useState();

  const handleChange = (e) => {
    setTransmission(e.target.value);
  };

  return (
    <Box
      sx={{
        minWidth: 140,
        backgroundColor: "white",
        borderRadius: "8px",
        height: 40,
      }}
    >
      <FormControl fullWidth>
        <InputLabel htmlFor="demo-simple-select">Select </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="transmission"
          value={transmission}
          label="Transmission"
          onChange={handleChange}
          sx={{ height: 40 }}
        >
          {TransmissionData.map((values) => (
            <MenuItem key={values._id} value={values.title}>
              {values.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
export default DropdownTransmission;

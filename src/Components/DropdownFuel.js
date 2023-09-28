import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const FuelData = [
  { _id: 1, title: "Diesel" },
  { _id: 2, title: "LPG" },
  { _id: 3, title: "Gasoline" },
  { _id: 4, title: "Petrol" },
  { _id: 5, title: "Hybrid" },
  { _id: 6, title: "Electric" },
];

function DropdownFuel() {
  const [fuel, setFuel] = useState();

  const handleChange = (e) => {
    setFuel(e.target.value);
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
          name="fuel"
          value={fuel}
          label="Fuel"
          onChange={handleChange}
          sx={{ height: 40 }}
        >
          {FuelData.map((values) => (
            <MenuItem key={values._id} value={values.title}>
              {values.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
export default DropdownFuel;

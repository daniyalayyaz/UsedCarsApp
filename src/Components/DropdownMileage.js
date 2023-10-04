import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const MileageData = [
  { _id: 1, title: "0-5000" },
  { _id: 2, title: "5000-10,000" },
  { _id: 3, title: "10,000-15,000" },
  { _id: 4, title: "15,000-20,000" },
  { _id: 5, title: "20,000+" },
];

function DropdownMileage() {
  const [mileage, setMileage] = useState("");

  const handleChange = (e) => {
    setMileage(e.target.value);
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
          name="mileage"
          value={mileage}
          label="Mileage"
          onChange={handleChange}
          sx={{ height: 40 }}
        >
          {MileageData.map((values) => (
            <MenuItem key={values._id} value={values.title}>
              {values.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
export default DropdownMileage;

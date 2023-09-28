import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const BodyTypeData = [
  { _id: 1, title: "Convertible" },
  { _id: 2, title: "Sedan" },
  { _id: 3, title: "Van" },
  { _id: 4, title: "Truck" },
  { _id: 5, title: "Wagon" },
  { _id: 6, title: "Coupe" },
];

function DropdownBodyType() {
  const [bodytype, setBodyType] = useState();

  const handleChange = (e) => {
    setBodyType(e.target.value);
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
          name="bodytype"
          value={bodytype}
          label="BodyType"
          onChange={handleChange}
          sx={{ height: 40 }}
        >
          {BodyTypeData.map((values) => (
            <MenuItem key={values._id} value={values.title}>
              {values.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
export default DropdownBodyType;

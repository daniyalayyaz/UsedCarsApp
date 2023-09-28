import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const PriceData = [
  { _id: 1, title: "Under $1000" },
  { _id: 2, title: "Under $2000" },
  { _id: 3, title: "Under $3000" },
  { _id: 4, title: "Under $4000" },
  { _id: 5, title: "Under $5000" },
  { _id: 6, title: "Over $6000" },
];

function DropdownPrice() {
  const [price, setPrice] = useState();

  const handleChange = (e) => {
    setPrice(e.target.value);
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
          name="price"
          value={price}
          label="Price"
          onChange={handleChange}
          sx={{ height: 40 }}
        >
          {PriceData.map((values) => (
            <MenuItem key={values._id} value={values.title}>
              {values.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
export default DropdownPrice;

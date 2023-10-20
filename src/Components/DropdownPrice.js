import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const PriceData = [
  { _id: 1, title: "5000-10000" },
  { _id: 2, title: "10000-15000" },
  { _id: 3, title: "15000-20000" },
  { _id: 4, title: "25000-30000" },
  { _id: 5, title: "30000-35000" },
  { _id: 6, title: "Over $35000" },
];

function DropdownPrice({ form, setForm }) {
  const handleChange = (e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  };

  return (
    <Box
      sx={{
        minWidth: 150,
        backgroundColor: "white",
        borderRadius: "8px",
        height: 40,
      }}
    >
      <FormControl fullWidth>
        <InputLabel htmlFor="demo-simple-select">Select Price </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="price"
          value={form.price}
          label="Price"
          onChange={handleChange}
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

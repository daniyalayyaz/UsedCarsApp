import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CCData = [
  { _id: 1, title: "650-1000" },
  { _id: 2, title: "1000-1500" },
  { _id: 3, title: "1500-2000" },
  { _id: 4, title: "2000-2500" },
  { _id: 5, title: "2500-3000" },
  { _id: 6, title: "3000-3500" },
  { _id: 7, title: "over 3500" },
];

function DropdownCC({ form, setForm }) {
  const handleChange = (e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
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
        <InputLabel htmlFor="demo-simple-select">Select CC</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="cc"
          value={form.cc}
          label="Select CC"
          onChange={handleChange}
          sx={{ height: 40 }}
        >
          {CCData.map((values) => (
            <MenuItem key={values._id} value={values.title}>
              {values.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
export default DropdownCC;

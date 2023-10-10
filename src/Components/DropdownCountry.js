import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CountryData = [
  { _id: 1, title: "UK" },
  { _id: 2, title: "Japan" },
];

function DropdownCountry({ form, setForm }) {
  const { country } = form;

  const handleChange = (e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  };

  return (
    <Box
      sx={{
        minWidth: 150,
        backgroundColor: "white",
        borderRadius: "8px",
      }}
    >
      <FormControl fullWidth>
        <InputLabel htmlFor="demo-simple-select"> Select Country </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="country"
          value={country}
          label="Country"
          onChange={handleChange}
        >
          {CountryData.map((values) => (
            <MenuItem key={values._id} value={values.title}>
              {values.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
export default DropdownCountry;

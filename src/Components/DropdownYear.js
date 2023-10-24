import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const YearData = [
  { _id: 1, title: "2000-2003" },
  { _id: 2, title: "2003-2006" },
  { _id: 3, title: "2006-2009" },
  { _id: 4, title: "2009-2012" },
  { _id: 5, title: "2012-2015" },
  { _id: 6, title: "2015-2018" },
  { _id: 7, title: "2018-2021" },
  { _id: 8, title: "2021 onwards" },
];

function DropdownYear({ form, setForm }) {
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
        <InputLabel htmlFor="demo-simple-select">Select Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="year"
          value={form.year}
          label="Select Year"
          onChange={handleChange}
          sx={{ height: 40 }}
        >
          {YearData.map((values) => (
            <MenuItem key={values._id} value={values.title}>
              {values.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
export default DropdownYear;

import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const YearData = [
  { _id: 1, title: "2000-2002" },
  { _id: 2, title: "2002-2004" },
  { _id: 3, title: "2004-2006" },
  { _id: 4, title: "2006-2008" },
  { _id: 5, title: "2008-2010" },
  { _id: 6, title: "2010-2012" },
  { _id: 7, title: "2012-2014" },
  { _id: 8, title: "2014-2016" },
  { _id: 9, title: "2016-2018" },
  { _id: 10, title: "2018-2020" },
  { _id: 11, title: "2020-2022" },
];

function DropdownYear() {
  const [year, setYear] = useState();

  const handleChange = (e) => {
    setYear(e.target.value);
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
          name="year"
          value={year}
          label="Year"
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

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { GET } from "../api/axios";

function DropdownMake({ form, setForm }) {
  const [Make, setMake] = useState([]);
  const fetchData = () => {
    GET("/dropdown/make").then((result) => {
      setMake(result);
    });
  };

  const handleChange = (e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        <InputLabel htmlFor="demo-simple-select">Select Make</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="make"
          value={form.make}
          label="Select Make"
          onChange={handleChange}
          sx={{ height: 40 }}
        >
          {Make.map((values) => (
            <MenuItem key={values._id} value={values.title}>
              {values.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
export default DropdownMake;

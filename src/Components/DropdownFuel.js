import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { GET } from "../api/axios";

function DropdownFuel({ form, setForm }) {
  const [Fuel, setFuel] = useState([]);
  const fetchData = () => {
    GET("/dropdown/fuel").then((result) => {
      setFuel(result);
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
        <InputLabel htmlFor="demo-simple-select">Select Fuel Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="fuel"
          value={form.fuel}
          label="Select Fuel Type"
          onChange={handleChange}
          sx={{ height: 40 }}
        >
          {Fuel.map((values) => (
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

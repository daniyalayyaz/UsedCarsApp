import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { GET } from "../api/axios";

function DropdownColor({ form, setForm }) {
  const [Color, setColor] = useState([]);
  const fetchData = () => {
    GET("/dropdown/color").then((result) => {
      setColor(result);
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
        <InputLabel htmlFor="demo-simple-select">Select Color</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="color"
          value={form.color}
          label="Select Color"
          onChange={handleChange}
          sx={{ height: 40 }}
        >
          {Color.map((values) => (
            <MenuItem key={values._id} value={values.title}>
              {values.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
export default DropdownColor;

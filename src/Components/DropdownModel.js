import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { GET } from "../api/axios";

function DropdownModel({ form, setForm }) {
  const [ModelData, setModelData] = useState([]);
  const fetchData = () => {
    GET("/dropdown/model").then((result) => {
      setModelData(result);
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
        <InputLabel htmlFor="demo-simple-select">Select Model</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="model"
          value={form.model}
          label="Select Model"
          onChange={handleChange}
          sx={{ height: 40 }}
        >
          {ModelData.map((values) => (
            <MenuItem key={values._id} value={values.title}>
              {values.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
export default DropdownModel;

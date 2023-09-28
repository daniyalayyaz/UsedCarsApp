import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ModelData = [
  { _id: 1, title: "Corola AXIO" },
  { _id: 2, title: "Yaris" },
  { _id: 2, title: "Yaris Hybrid" },
  { _id: 2, title: "Yaris Cross" },
  { _id: 2, title: "VITZ" },
  { _id: 2, title: "VITZ Hybrid" },
];

function DropdownModel() {
  const [model, setModel] = useState();

  const handleChange = (e) => {
    setModel(e.target.value);
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
          name="model"
          value={model}
          label="Model"
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

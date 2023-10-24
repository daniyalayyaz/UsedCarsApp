import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SteeringData = [
  { _id: 1, title: "Right Hand Drive" },
  { _id: 2, title: "Left Hand Drive" },
];

function DropdownSteering({ form, setForm }) {
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
        <InputLabel htmlFor="demo-simple-select">Select Steering</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="steering"
          value={form.steering}
          label="Select Steering"
          onChange={handleChange}
          sx={{ height: 40 }}
        >
          {SteeringData.map((values) => (
            <MenuItem key={values._id} value={values.title}>
              {values.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
export default DropdownSteering;

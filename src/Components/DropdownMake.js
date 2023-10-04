import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const MakeData = [
  { _id: 1, title: "Toyota" },
  { _id: 2, title: "Honda" },
  { _id: 3, title: "Suzuki" },
  { _id: 4, title: "Nissan" },
  { _id: 5, title: "Mazda" },
  { _id: 6, title: "Audi" },
  { _id: 7, title: "Mitsubishi" },
  { _id: 8, title: "Subaru" },
  { _id: 9, title: "Lexus" },
  { _id: 10, title: "Daihastu" },
  { _id: 11, title: "BMW" },
  { _id: 12, title: "Chevrolet" },
  { _id: 13, title: "Ford" },
  { _id: 14, title: "Jaguar" },
  { _id: 15, title: "Merceedes-Benz" },
  { _id: 16, title: "Volkwagen" },
  { _id: 17, title: "Peugeot" },
  { _id: 18, title: "Volvo" },
  { _id: 19, title: "Hyundai" },
  { _id: 20, title: "Kia" },
  { _id: 21, title: "Ssangyong" },
];

function DropdownMake() {
  const [make, setMake] = useState("");

  const handleChange = (e) => {
    setMake(e.target.value);
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
          name="make"
          value={make}
          label="Make"
          onChange={handleChange}
          sx={{ height: 40 }}
        >
          {MakeData.map((values) => (
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

import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { FormHelperText } from "@mui/material";

export default function GenderSelector({ id, name, value, onChange, error, helperText }) {
  return (
    <FormControl error={error}>
      <FormLabel id={id}>Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby={id}
        name={name}
        value={value}
        onChange={onChange}
        defaultValue="o"
      >
        <FormControlLabel value="f" control={<Radio />} label="Female" />
        <FormControlLabel value="m" control={<Radio />} label="Male" />
        <FormControlLabel value="o" control={<Radio />} label="Other" />
      </RadioGroup>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}

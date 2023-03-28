import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { TextField } from "@mui/material";

export default function DestktopDatePicker(props) {
  const [value, setValue] = React.useState(dayjs("2005-06-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label={props.label}
        inputFormat="MM/DD/YYYY"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

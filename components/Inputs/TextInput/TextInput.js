"use client";
import * as React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";

export default function TextInput({ name, formik, label, placeholder }) {
  const [touched, setTouched] = useState(false);
  let inputErrors = formik.errors[name];
  const handleFocus = () => {
    setTouched(true);
  };
  return (
    <TextField
      sx={{ m: 3, fontSize: { xs: "8px", md: "16px" }, width: { lg: "42ch" } }}
      id={name}
      name={name}
      label={label}
      placeholder={placeholder}
      onChange={formik.handleChange}
      onFocus={handleFocus}
      error={Boolean(inputErrors) && touched}
      helperText={touched && inputErrors}
    />
  );
}

"use client";
import * as React from "react";
import { TextField } from "@mui/material";

export default function TextInput({ id, name, value, onChange, error, helperText }) {
  return (
    <TextField
      id="firstLastnameInput"
      name="firstLastname"
      label="First Lastname"
      placeholder="New user First Lastname"
      sx={{ m: 3, fontSize: { xs: "8px", md: "16px" }, width: { lg: "42ch" } }}
    />
  );
}

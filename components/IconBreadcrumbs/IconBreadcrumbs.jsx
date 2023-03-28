import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import Link from "next/link";

function handleClick(event) {
  event.preventDefault();
}

export default function IconBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/users"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Users
        </Link>
        <Typography sx={{ display: "flex", alignItems: "center" }} color="text.primary">
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          New User
        </Typography>
      </Breadcrumbs>
    </div>
  );
}

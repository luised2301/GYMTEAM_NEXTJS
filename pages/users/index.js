import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";

export default function Users() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Usuarios
        </Typography>
        <Link href="/users/newUser" color="secondary">
          Agregar nuevo usuario
        </Link>
      </Box>
    </Container>
  );
}

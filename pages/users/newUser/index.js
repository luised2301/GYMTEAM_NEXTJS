import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";
import IconBreadcrumbs from "../../../components/IconBreadcrumbs/IconBreadcrumbs";
import NewUserForm from "../../../components/Forms/NewUserForm/NewUserForm";
export default function NewUserPage() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Aqui Agrega un usuario
        </Typography>
        <IconBreadcrumbs />
      </Box>
      <Box>
        <NewUserForm />
      </Box>
    </Container>
  );
}

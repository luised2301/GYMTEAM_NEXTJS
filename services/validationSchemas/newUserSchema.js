import * as yup from "yup";

export const newUserSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "El nombre debe de tener al menos 3 caracteres")
    .max(25, "El nombre no debe de ser mayor a 25 caracteres")
    .required("Requerido"),
  firstLastname: yup
    .string()
    .min(3, "El apellido debe de tener al menos 3 caracteres")
    .max(25, "El apellido no debe de ser mayor a 25 caracteres")
    .required("Requerido"),
  secondLastname: yup
    .string()
    .min(3, "El apellido debe de tener al menos 3 caracteres")
    .max(25, "El apellido no debe de ser mayor a 25 caracteres")
    .required("Requerido"),
  email: yup.string().email("Por favor ingresa un email valido").required("Requerido"),
  gender: yup.string().oneOf(["f", "m", "o"], "Selecciona un genero"),
  birthDate: yup.date().required("Requerido"),
  phoneNumber: yup
    .string()
    .min(10, "El telefono debe de tener al menos 10 caracteres")
    .required("Requerido"),
});

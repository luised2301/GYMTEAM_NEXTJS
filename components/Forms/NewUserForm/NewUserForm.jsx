import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { newUserSchema } from "../../../services/validationSchemas/newUserSchema";
import styles from "./NewUserForm.module.css";
import { TextField } from "@mui/material";
import GenderSelector from "../../Inputs/GenderSelector/GenderSelector";
import DesktopDatePicker from "../../Inputs/DesktopDatePicker/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MuiTelInput } from "mui-tel-input";

const steps = ["Informacion Personal", "Informacion de contacto", "Revisar y Crear"];

export default function NewUserForm() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {},
    validationSchema: newUserSchema,
    onSubmit: () => {
      router.push(`/collection/${formik.values.nameInput}`);
    },
  });
  const handleDateChange = (newValue) => {
    setDateValue(newValue.$d);

    formik.values.birthDate = dateValue;
  };
  const handlePhoneChange = (newPhone) => {
    setPhone(newPhone);
    formik.values.phoneNumber = newPhone;
  };
  const [phoneNumber, setPhone] = React.useState("");
  const [dateValue, setDateValue] = React.useState(dayjs(""));
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === null;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    console.log(formik.values);
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <form className={styles.newUserForm} onSubmit={formik.handleSubmit}>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {activeStep === 0 && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextField
                  id="nameInput"
                  name="name"
                  label="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.errors.name && Boolean(formik.errors.name)}
                  placeholder="New user Name"
                  sx={{ m: 3, fontSize: { xs: "8px", md: "16px" }, width: { lg: "42ch" } }}
                  helperText={Boolean(formik.errors.name) && formik.errors.name}
                />
                <TextField
                  id="firstLastnameInput"
                  name="firstLastname"
                  label="First Lastname"
                  value={formik.values.firstLastname}
                  onChange={formik.handleChange}
                  error={formik.errors.firstLastname && Boolean(formik.errors.firstLastname)}
                  placeholder="New user First Lastname"
                  sx={{ m: 3, fontSize: { xs: "8px", md: "16px" }, width: { lg: "42ch" } }}
                  helperText={Boolean(formik.errors.firstLastname) && formik.errors.firstLastname}
                />
                <TextField
                  id="secondLastnameInput"
                  name="secondLastname"
                  label="Second Lastname"
                  value={formik.values.secondLastname}
                  onChange={formik.handleChange}
                  error={formik.errors.secondLastname && Boolean(formik.errors.secondLastname)}
                  placeholder="New user Second Lastname"
                  sx={{ m: 3, fontSize: { xs: "8px", md: "16px" }, width: { lg: "42ch" } }}
                  helperText={Boolean(formik.errors.secondLastname) && formik.errors.secondLastname}
                />
                <GenderSelector
                  id="genderInput"
                  name="gender"
                  label="Gender"
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  error={formik.errors.gender && Boolean(formik.errors.gender)}
                  helperText={Boolean(formik.errors.gender) && formik.errors.gender}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs} className="birthDate-picker">
                  <DesktopDatePicker
                    id="birthDate"
                    name="birthDate"
                    label="Año de nacimiento"
                    inputFormat="DD/MM/YYYY"
                    value={formik.values.birthDate}
                    onChange={handleDateChange}
                    error={formik.touched.birthDate && Boolean(formik.errors.birthDate)}
                    helperText={formik.touched.birthDate && formik.errors.birthDate}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Box>
            )}
            {activeStep === 1 && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextField
                  sx={{ m: 3, fontSize: { xs: "8px", md: "16px" }, width: { lg: "42ch" } }}
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="New user Email"
                  error={formik.errors.email && Boolean(formik.errors.email)}
                  helperText={formik.errors.email && formik.errors.email}
                />
                <MuiTelInput
                  sx={{ m: 3, fontSize: { xs: "8px", md: "16px" }, width: { lg: "42ch" } }}
                  label="Telefono"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                  helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                />
              </Box>
            )}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}

              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </form>
    </Box>
  );
}

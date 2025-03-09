import { Button, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router";


const initialValues = {
  email: "",
  password: "",
};
export const LoginForm = () => {
  const handleSubmit = () => {};
  const navigate = useNavigate();

  return (
    <div>
      <Typography variant="h5" className="text-center">
        Login
      </Typography>

      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
            as={TextField}
            fullWidth
            placeholder=""
            name="email"
            label="email"
            variant="outlined"
            margin="normal"
            // error={!ErrorMessage("province")}
          />

          <Field
            as={TextField}
            fullWidth
            placeholder=""
            name="password"
            label="password"
            variant="outlined"
            margin="normal"
            // error={!ErrorMessage("province")}
          />

          <Button sx={{mt:2, padding:"1rem"}} fullWidth type="submit" variant="contained">

          </Button>
        </Form>
      </Formik>
      <Typography variant="body2" align="center" sx={{mt:3}}> 
        Don't have an account..? 

        <Button onClick= {() =>{navigate("/account/register")}} size="small">
          Register
        </Button>

      </Typography>
      
    </div>
  );
};

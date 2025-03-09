import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  role: "ROLE_CUSTOMER",
};

export const RegisterForm = () => {
  const handleSubmit = (values) => {
    console.log("Form submitted", values);
  };
  const navigate = useNavigate();

  return (
    <div>
      <Typography variant="h5" className="text-center">
        Register
      </Typography>

      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
            as={TextField}
            fullWidth
            placeholder=""
            name="fullName"
            label="fullName"
            variant="outlined"
            margin="normal"
            // error={!ErrorMessage("province")}
          />
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
            type="password"
            // error={!ErrorMessage("province")}
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
            
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="role"
              // onChange={handleChange}
            >
              <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
              <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
              
            </Select>
          </FormControl>

          <Button
            sx={{ mt: 2, padding: "1rem" }}
            fullWidth
            type="submit"
            variant="contained"
          ></Button>
        </Form>
      </Formik>
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        Already have an account..?
        <Button
          onClick={() => {
            navigate("/account/login");
          }}
          size="small"
        >
          LOGIN
        </Button>
      </Typography>
    </div>
  );
};

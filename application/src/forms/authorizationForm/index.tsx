import React from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, TextField } from "material-ui-core";
import Box from "@mui/material/Box";
import { AddUserData, AddUserInput, ADD_USER } from "../../hooks/users/useAddUser";
import {
  intialValuesAuthorizationForm,
  ValuesAuthorizationForm,
} from "./types";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Email должен быть валидный")
    .required("Обязательное поле"),
  password: yup
    .string()
    .min(4, "Пароль минимум 4-е символа")
    .required("Обязательное поле"),
});

const AuthorizationForm: React.FC = () => {

  const navigate = useNavigate();
 
  const [addUserMutation, { data, loading, error }] = useMutation<AddUserData, AddUserInput>(ADD_USER);
  
  const formik = useFormik<intialValuesAuthorizationForm>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: ValuesAuthorizationForm) => {

      navigate('/users');

      addUserMutation({ variables: {
          name: values.email, 
          age: values.password
        } 
      });
    }
  });

  console.log('data -> addUserMutation: ', data);

  return (
    <Box
      sx={{
        maxWidth: "500px"
      }}
      margin="auto"
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          margin="normal"
          variant="outlined"
          fullWidth
          id="password"
          name="password"
          label="Пароль"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Box mt={3}>
          <Button color="primary" variant="contained" fullWidth type="submit">
            Войти
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AuthorizationForm;

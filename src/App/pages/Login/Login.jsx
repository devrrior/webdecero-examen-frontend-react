import { Container, FormContainer, MainContainer, Title } from "./Login.styles";
import { TextField } from "../../components/TextField/TextField";
import * as yup from "yup";
import { useFormik } from "formik";
import { Button } from "../../components/Button/Button";

const Login = () => {
  const intialLoginValues = {
    username: "",
    password: "",
  };

  const loginSchema = yup.object().shape({
    username: yup
      .string("Debe ingresar texto")
      .min(3, "Debe tener al menos 3 caracteres.")
      .required("El usuario es requerido."),
    password: yup
      .string("Debe ingresar texto")
      .required("La contraseña es requerida."),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: intialLoginValues,
    validationSchema: loginSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Container>
      <MainContainer>
        <Title>Iniciar sesión</Title>
        <FormContainer>
          <TextField
            placeholder={"Usuario"}
            name={"username"}
            value={formik.values.username}
            error={formik.errors.username}
            width={"100%"}
            touched={formik.touched.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <TextField
            placeholder={"Contraseña"}
            name={"password"}
            value={formik.values.password}
            error={formik.errors.password}
            width={"100%"}
            touched={formik.touched.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Button
            text={"Ingresar"}
            onClick={formik.handleSubmit}
          />
        </FormContainer>
      </MainContainer>
    </Container>
  );
};

export default Login;

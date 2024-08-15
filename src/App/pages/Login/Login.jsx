import { Container, FormContainer, MainContainer, Title } from "./Login.styles";
import { TextField } from "../../components/TextField/TextField";
import * as yup from "yup";
import { useFormik } from "formik";
import { Button } from "../../components/Button/Button";
import { login } from "../../api/authServices";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { routeMappings } from "../../consts/routeMappings";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const { authState, authenticate } = useAuth();
  const navigate = useNavigate();

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

  const handleSubmit = async (values) => {
    const { username, password } = values;

    const response = await login(username, password);

    if (response.success) {
      const { accessToken, refreshToken } = response.data;

      authenticate(accessToken, refreshToken);

      alert(response.message);

      navigate(routeMappings.profile);
    }

    if (!response.success) {
      alert(response.message);
    }
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
            type={"text"}
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
            type={"password"}
            placeholder={"Contraseña"}
            name={"password"}
            value={formik.values.password}
            error={formik.errors.password}
            width={"100%"}
            touched={formik.touched.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Button text={"Ingresar"} onClick={formik.handleSubmit} />
        </FormContainer>
      </MainContainer>
    </Container>
  );
};
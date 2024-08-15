import { NavLink } from "react-router-dom";
import { Container } from "./NotFound.styles";
import { routeMappings } from "../../consts/routeMappings";

export const NotFound = () => {
  return (
      <Container>
        <h1>404</h1>
        <p>Lo sentimos, la página que estás buscando no existe.</p>
       <NavLink to={routeMappings.profile}>Volver a mi perfil.</NavLink>
      </Container>
  );
};

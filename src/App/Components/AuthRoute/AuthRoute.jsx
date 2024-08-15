import { Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { routeMappings } from "../../consts/routeMappings";

export const AuthRoute = () => {
  const { authState } = useAuth();

  return authState.isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={routeMappings.login} />
  );
};

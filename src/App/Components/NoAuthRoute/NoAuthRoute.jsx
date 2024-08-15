import { Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { routeMappings } from "../../consts/routeMappings";

export const NoAuthRoute = () => {
  const { authState } = useAuth();

  return authState.isAuthenticated === false ? (
    <Outlet />
  ) : (
    <Navigate to={routeMappings.profile} />
  );
};

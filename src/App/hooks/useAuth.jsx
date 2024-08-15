import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

export const useAuth = () => {
  const { authState, authenticate, logout, refreshTokens } = useContext(AuthContext);

  return { authState, authenticate, logout, refreshTokens };
};

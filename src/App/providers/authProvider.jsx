import { useReducer } from "react";
import { AuthContext } from "../contexts/authContext";
import { authReducer } from "../reducers/authReducer";
import {
  getValuesFromLocalStorage,
  removeValuesFromLocalStorage,
  setValuesToLocalStorage,
} from "../utils/localStorageManagerUtils";

const INITIAL_STATE = {
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
};

export const AuthProvider = ({ children }) => {
  const init = () => {
    const accessToken = getValuesFromLocalStorage("accessToken");
    const refreshToken = getValuesFromLocalStorage("refreshToken");

    if (accessToken && refreshToken) {
      return {
        isAuthenticated: true,
        accessToken,
        refreshToken,
      };
    }

    return INITIAL_STATE;
  };

  const saveTokens = (accessToken, refreshToken) => {
    setValuesToLocalStorage("accessToken", accessToken);
    setValuesToLocalStorage("refreshToken", refreshToken);
  };

  const removeTokens = () => {
    removeValuesFromLocalStorage("accessToken");
    removeValuesFromLocalStorage("refreshToken");
  };

  const refreshTokens = (accessToken, refreshToken) => {
    saveTokens(accessToken, refreshToken);
    authDispatch({
      type: "REFRESH",
      payload: {
        accessToken,
        refreshToken,
      },
    });
  };

  const [authState, authDispatch] = useReducer(
    authReducer,
    INITIAL_STATE,
    init
  );

  const authenticate = (accessToken, refreshToken) => {
    saveTokens(accessToken, refreshToken);
    authDispatch({
      type: "AUTHENTICATE",
      payload: {
        accessToken,
        refreshToken,
      },
    });
  };

  const logout = () => {
    removeTokens();
    authDispatch({
      type: "LOGOUT",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        authenticate,
        logout,
        refreshTokens,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

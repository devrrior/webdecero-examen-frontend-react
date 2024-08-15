import { useEffect } from "react";
import { axiosAuthClient } from "../api/configs/axios";
import { useAuth } from "./useAuth";
import { refreshTokenService } from "../api/authServices";

export const useAxiosAuthClient = () => {
  const { authState, refreshTokens } = useAuth();

  useEffect(() => {
    const requestIntercept = axiosAuthClient.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${authState.accessToken}`;
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const responseIntercept = axiosAuthClient.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error.config;

        if (error.response.status === 401 && !prevRequest.sent) {
          prevRequest.sent = true;

          const response = await refreshTokenService(authState.refreshToken);

          if (!response.success) {
            return Promise.reject(error);
          }

          const { accessToken, refreshToken } = response.data;

          refreshTokens(accessToken, refreshToken);

          prevRequest.headers["Authorization"] = `Bearer ${accessToken}`;

          return axiosAuthClient(prevRequest);
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosAuthClient.interceptors.request.eject(requestIntercept);
      axiosAuthClient.interceptors.response.eject(responseIntercept);
    };
  }, [refreshTokens, authState.accessToken, authState.refreshToken]);

  return axiosAuthClient;
};

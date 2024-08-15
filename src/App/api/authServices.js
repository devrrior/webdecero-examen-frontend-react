import { axiosClient } from "./configs/axios";

export const loginService = async (username, password) => {
  try {
    const response = await axiosClient.post("/auth/login", {
      username,
      password,
    });

    const { token, refreshToken } = response.data;

    return {
      success: true,
      message: "Login success",
      data: {
        accessToken: token,
        refreshToken,
      },
    };
  } catch (error) {
    if (error.response) {
      return {
        success: false,
        message: error.response.data.message,
      };
    }
  }
};

export const refreshTokenService = async (refreshTokenValue) => {
  try {
    const response = await axiosClient.post("/auth/refresh", {
      refreshToken: refreshTokenValue,
    });

    const { token, refreshToken } = response.data;

    return {
      success: true,
      message: "Refresh token success",
      data: {
        accessToken: token,
        refreshToken,
      },
    };
  } catch (error) {
    if (error.response) {
      return {
        success: false,
        message: error.response.data.message,
      };
    }
  }
};

export const getCurrentAuthUserService = async (axiosAuthClient) => {
  try {
    const response = await axiosAuthClient.get("/users/me");
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error fetching user data"
    );
  }
};

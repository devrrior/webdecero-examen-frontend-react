import { axiosPublicInstance } from "./configs/axios";

export const login = async (username, password) => {
  try {
    const response = await axiosPublicInstance.post("/auth/login", {
      username,
      password,
    });

    const { accessToken, refreshToken } = response.data;

    return {
      success: true,
      message: "Login success",
      data: {
        accessToken,
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

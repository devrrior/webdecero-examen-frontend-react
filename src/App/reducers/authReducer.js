export const authReducer = (state, action) => {
  switch (action.type) {
    case "AUTHENTICATE":
      return {
        ...state,
        isAuthenticated: true,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    case "REFRESH":
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refresh,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        accessToken: null,
        refreshToken: null,
      };
    default:
      return state;
  }
};

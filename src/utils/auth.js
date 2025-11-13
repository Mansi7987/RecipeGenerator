// src/utils/auth.js
export const isAuthenticated = () => !!localStorage.getItem("authToken");

export const login = (token = "dummy-token") => {
  localStorage.setItem("authToken", token);
};

export const logout = () => {
  localStorage.removeItem("authToken");
};

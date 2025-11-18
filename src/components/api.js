// src/api/api.js
import axios from "axios";

const BASE_URL = "http://206.19.38.2/MobiHISTreeCore/api";

// Login API
export const login = async (username, password) => {
  return axios.post(
    `${BASE_URL}/Auth/Login`,
    { username, password },
    {
      headers: { "Content-Type": "application/json" },
      timeout: 2000,
    }
  );
};

// Forgot Password API
export const loginWithoutPassword = async (username) => {
  return axios.post(
    `${BASE_URL}/Auth/LoginWithoutPassword`,
    { username },
    {
      headers: { "Content-Type": "application/json" },
      timeout: 2000,
    }
  );
};

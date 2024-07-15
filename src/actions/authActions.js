import axios from "axios";
import {
  loginSuccess,
  loginFailure,
  fetchProfileSuccess,
  fetchProfileFailure,
  updateProfileSuccess,
  updateProfileFailure,
  logout,
} from "../reducers/authReducer";

const API_URL = "http://localhost:3001/api/v1/user";

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    console.log("Login API response:", response.data);
    dispatch(loginSuccess({ token: response.data.body.token, email }));
  } catch (error) {
    console.log("Login API error:", error);
    const errorMessage =
      error.response && error.response.status === 400
        ? "Veuillez entrer un mot de passe et un nom d'utilisateur corrects"
        : error.message;
    dispatch(loginFailure(errorMessage));
  }
};

export const fetchProfile = (token) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/profile`, null, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Fetch Profile API response:", response.data);
    dispatch(fetchProfileSuccess(response.data.body));
  } catch (error) {
    console.log("Fetch Profile API error:", error);
    dispatch(fetchProfileFailure(error.message));
  }
};

export const updateProfile = (token, profileData) => async (dispatch) => {
  try {
    const response = await axios.put(`${API_URL}/profile`, profileData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Update Profile API response:", response.data);
    dispatch(updateProfileSuccess(response.data.body));
  } catch (error) {
    console.log("Update Profile API error:", error);
    dispatch(updateProfileFailure(error.message));
  }
};

export const logoutAndRedirect = (navigate) => (dispatch) => {
  dispatch(logout());
  navigate("/"); // Rediriger vers la page d'accueil après la déconnexion
};

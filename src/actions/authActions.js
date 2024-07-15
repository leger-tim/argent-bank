// import axios from "axios";
// import {
//   loginSuccess,
//   loginFailure,
//   fetchProfileSuccess,
//   fetchProfileFailure,
//   updateProfileSuccess,
//   updateProfileFailure,
// } from "../reducers/authReducer";

// const API_URL = "http://localhost:3001/api/v1/user";

// export const login = (email, password) => async (dispatch) => {
//   try {
//     const response = await axios.post(`${API_URL}/login`, { email, password });
//     console.log("Login API response:", response.data);
//     dispatch(loginSuccess({ token: response.data.body.token, email })); // Assurez-vous de passer le token et l'email
//   } catch (error) {
//     console.log("Login API error:", error);
//     dispatch(loginFailure(error.message));
//   }
// };

// export const fetchProfile = (token) => async (dispatch) => {
//   try {
//     const response = await axios.post(`${API_URL}/profile`, null, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     console.log("Fetch Profile API response:", response.data);
//     dispatch(fetchProfileSuccess(response.data.body)); // Utilisation correcte de 'body'
//   } catch (error) {
//     console.log("Fetch Profile API error:", error);
//     dispatch(fetchProfileFailure(error.message));
//   }
// };

// export const updateProfile = (token, profileData) => async (dispatch) => {
//   try {
//     const response = await axios.put(`${API_URL}/profile`, profileData, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     console.log("Update Profile API response:", response.data);
//     dispatch(updateProfileSuccess(response.data.body)); // Utilisation correcte de 'body'
//   } catch (error) {
//     console.log("Update Profile API error:", error);
//     dispatch(updateProfileFailure(error.message));
//   }
// };

// import { createSlice } from "@reduxjs/toolkit";
// import { push } from "connected-react-router";

// const initialState = {
//   isAuthenticated: false,
//   user: null,
//   error: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     loginSuccess(state, action) {
//       console.log("loginSuccess action.payload:", action.payload);
//       state.isAuthenticated = true;
//       state.user = action.payload;
//       state.error = null;
//     },
//     loginFailure(state, action) {
//       console.log("loginFailure action.payload:", action.payload);
//       state.isAuthenticated = false;
//       state.error = action.payload;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//       state.user = null;
//     },
//     fetchProfileSuccess(state, action) {
//       console.log("fetchProfileSuccess action.payload:", action.payload);
//       state.user = { ...state.user, ...action.payload };
//     },
//     fetchProfileFailure(state, action) {
//       console.log("fetchProfileFailure action.payload:", action.payload);
//       state.error = action.payload;
//     },
//     updateProfileSuccess(state, action) {
//       console.log("updateProfileSuccess action.payload:", action.payload);
//       state.user = action.payload;
//     },
//     updateProfileFailure(state, action) {
//       console.log("updateProfileFailure action.payload:", action.payload);
//       state.error = action.payload;
//     },
//   },
// });

// export const {
//   loginSuccess,
//   loginFailure,
//   logout,
//   fetchProfileSuccess,
//   fetchProfileFailure,
//   updateProfileSuccess,
//   updateProfileFailure,
// } = authSlice.actions;

// export const logoutAndRedirect = () => (dispatch) => {
//   dispatch(logout());
//   dispatch(push("/")); // Rediriger vers la page d'accueil après la déconnexion
// };

// export default authSlice.reducer;

// import axios from "axios";
// import {
//   loginSuccess,
//   loginFailure,
//   fetchProfileSuccess,
//   fetchProfileFailure,
//   updateProfileSuccess,
//   updateProfileFailure,
//   logout,
// } from "../reducers/authReducer";

// const API_URL = "http://localhost:3001/api/v1/user";

// export const login = (email, password) => async (dispatch) => {
//   try {
//     const response = await axios.post(`${API_URL}/login`, { email, password });
//     console.log("Login API response:", response.data);
//     dispatch(loginSuccess({ token: response.data.body.token, email }));
//   } catch (error) {
//     console.log("Login API error:", error);
//     dispatch(loginFailure(error.message));
//   }
// };

// export const fetchProfile = (token) => async (dispatch) => {
//   try {
//     const response = await axios.post(`${API_URL}/profile`, null, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     console.log("Fetch Profile API response:", response.data);
//     dispatch(fetchProfileSuccess(response.data.body));
//   } catch (error) {
//     console.log("Fetch Profile API error:", error);
//     dispatch(fetchProfileFailure(error.message));
//   }
// };

// export const updateProfile = (token, profileData) => async (dispatch) => {
//   try {
//     const response = await axios.put(`${API_URL}/profile`, profileData, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     console.log("Update Profile API response:", response.data);
//     dispatch(updateProfileSuccess(response.data.body));
//   } catch (error) {
//     console.log("Update Profile API error:", error);
//     dispatch(updateProfileFailure(error.message));
//   }
// };

// export const logoutAndRedirect = (navigate) => (dispatch) => {
//   dispatch(logout());
//   navigate("/"); // Rediriger vers la page d'accueil après la déconnexion
// };

// import axios from "axios";
// import {
//   loginSuccess,
//   loginFailure,
//   fetchProfileSuccess,
//   fetchProfileFailure,
//   updateProfileSuccess,
//   updateProfileFailure,
//   logout,
// } from "../reducers/authReducer";

// const API_URL = "http://localhost:3001/api/v1/user";

// export const login = (email, password) => async (dispatch) => {
//   try {
//     const response = await axios.post(`${API_URL}/login`, { email, password });
//     console.log("Login API response:", response.data);
//     dispatch(loginSuccess({ token: response.data.body.token, email }));
//   } catch (error) {
//     console.log("Login API error:", error);
//     dispatch(loginFailure(error.message));
//   }
// };

// export const fetchProfile = (token) => async (dispatch) => {
//   try {
//     const response = await axios.post(`${API_URL}/profile`, null, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     console.log("Fetch Profile API response:", response.data);
//     dispatch(fetchProfileSuccess(response.data.body));
//   } catch (error) {
//     console.log("Fetch Profile API error:", error);
//     dispatch(fetchProfileFailure(error.message));
//   }
// };

// export const updateProfile = (token, profileData) => async (dispatch) => {
//   try {
//     const response = await axios.put(`${API_URL}/profile`, profileData, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     console.log("Update Profile API response:", response.data);
//     dispatch(updateProfileSuccess(response.data.body));
//   } catch (error) {
//     console.log("Update Profile API error:", error);
//     dispatch(updateProfileFailure(error.message));
//   }
// };

// export const logoutAndRedirect = (navigate) => (dispatch) => {
//   dispatch(logout());
//   navigate("/"); // Rediriger vers la page d'accueil après la déconnexion
// };
// import axios from "axios";
// import {
//   loginSuccess,
//   loginFailure,
//   fetchProfileSuccess,
//   fetchProfileFailure,
//   updateProfileSuccess,
//   updateProfileFailure,
//   logout,
// } from "../reducers/authReducer";

// const API_URL = "http://localhost:3001/api/v1/user";

// export const login = (email, password) => async (dispatch) => {
//   try {
//     const response = await axios.post(`${API_URL}/login`, { email, password });
//     console.log("Login API response:", response.data);
//     dispatch(loginSuccess({ token: response.data.body.token, email }));
//   } catch (error) {
//     console.log("Login API error:", error);
//     const errorMessage =
//       error.response && error.response.status === 400
//         ? "Veuillez entrer un mot de passe et un nom d'utilisateur corrects"
//         : error.message;
//     dispatch(loginFailure(errorMessage));
//   }
// };

// export const fetchProfile = (token) => async (dispatch) => {
//   try {
//     const response = await axios.post(`${API_URL}/profile`, null, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     console.log("Fetch Profile API response:", response.data);
//     dispatch(fetchProfileSuccess(response.data.body));
//   } catch (error) {
//     console.log("Fetch Profile API error:", error);
//     dispatch(fetchProfileFailure(error.message));
//   }
// };

// export const updateProfile = (token, profileData) => async (dispatch) => {
//   try {
//     const response = await axios.put(`${API_URL}/profile`, profileData, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     console.log("Update Profile API response:", response.data);
//     dispatch(updateProfileSuccess(response.data.body));
//   } catch (error) {
//     console.log("Update Profile API error:", error);
//     dispatch(updateProfileFailure(error.message));
//   }
// };

// export const logoutAndRedirect = (navigate) => (dispatch) => {
//   dispatch(logout());
//   navigate("/"); // Rediriger vers la page d'accueil après la déconnexion
// };

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

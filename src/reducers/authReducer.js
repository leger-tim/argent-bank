// import { createSlice } from "@reduxjs/toolkit";

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
//       state.user = { ...state.user, ...action.payload }; // Combine les données utilisateur
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

// export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      console.log("loginSuccess action.payload:", action.payload);
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure(state, action) {
      console.log("loginFailure action.payload:", action.payload);
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    fetchProfileSuccess(state, action) {
      console.log("fetchProfileSuccess action.payload:", action.payload);
      state.user = { ...state.user, ...action.payload };
    },
    fetchProfileFailure(state, action) {
      console.log("fetchProfileFailure action.payload:", action.payload);
      state.error = action.payload;
    },
    updateProfileSuccess(state, action) {
      console.log("updateProfileSuccess action.payload:", action.payload);
      state.user = { ...state.user, ...action.payload };
    },
    updateProfileFailure(state, action) {
      console.log("updateProfileFailure action.payload:", action.payload);
      state.error = action.payload;
    },
  },
});

export const {
  loginSuccess,
  loginFailure,
  logout,
  fetchProfileSuccess,
  fetchProfileFailure,
  updateProfileSuccess,
  updateProfileFailure,
} = authSlice.actions;

export default authSlice.reducer;

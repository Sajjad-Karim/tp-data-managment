import { createSlice } from "@reduxjs/toolkit";
import { checkSession, userLogin, userRegister, googleLogin } from "./actions";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    token: null,
    isAuthenticated: false,
    error: null,
    message: null,

    // Granular statuses per action
    registerStatus: "idle",
    loginStatus: "idle",
    googleLoginStatus: "idle",
    checkSessionStatus: "idle",
  },
  reducers: {
    // RESET ALL STATUS
    resetState: (state) => {
      state.error = null;
      state.message = null;
    },
    resetRegisterStatus: (state) => {
      state.registerStatus = "idle";
      state.error = null;
      state.message = null;
    },
    resetLoginStatus: (state) => {
      state.loginStatus = "idle";
      state.error = null;
      state.message = null;
    },
    resetGoogleLoginStatus: (state) => {
      state.googleLoginStatus = "idle";
      state.error = null;
      state.message = null;
    },
    resetCheckSessionStatus: (state) => {
      state.checkSessionStatus = "idle";
      state.error = null;
      state.message = null;
    },
    logout: (state) => {
      state.user = {};
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      state.message = null;
      state.checkSessionStatus = "idle";
      // Reset granular statuses on logout
      state.registerStatus = "idle";
      state.loginStatus = "idle";
      state.googleLoginStatus = "idle";
      localStorage.removeItem("token");
    },
  },

  extraReducers: (builder) => {
    //builder case fo the user registration
    builder.addCase(userRegister.pending, (state) => {
      state.registerStatus = "loading";
      state.error = null;
    });
    builder.addCase(userRegister.fulfilled, (state, action) => {
      state.registerStatus = "success";
      state.message = action.payload.message;
    });
    builder.addCase(userRegister.rejected, (state, action) => {
      state.registerStatus = "failed";
      state.error = action.payload;
    });
    //builder case for the user login
    builder.addCase(userLogin.pending, (state) => {
      state.loginStatus = "loading";
      state.isAuthenticated = false;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loginStatus = "success";
      state.isAuthenticated = true;
      state.user = action.payload.userData;
      state.token = action.payload.accessToken;
      state.message = action.payload.message;
      localStorage.setItem("token", action.payload.accessToken);
    });

    builder.addCase(userLogin.rejected, (state, action) => {
      state.loginStatus = "failed";
      state.error = action.payload;
    });
    //builder case for the check session
    builder.addCase(checkSession.pending, (state) => {
      state.checkSessionStatus = "loading";
      state.error = null;
    });
    builder.addCase(checkSession.fulfilled, (state, action) => {
      state.checkSessionStatus = "success";
      state.isAuthenticated = true;
      state.user = action.payload.userData || action.payload.user;
      state.token = action.payload.accessToken || action.payload.token;
      state.message = action.payload.message;
    });
    builder.addCase(checkSession.rejected, (state, action) => {
      state.checkSessionStatus = "failed";
      state.isAuthenticated = false;
      state.user = {};
      state.token = null;
      state.error = action.payload;
    });

    // Google login cases
    builder.addCase(googleLogin.pending, (state) => {
      state.googleLoginStatus = "loading";
      state.error = null;
    });
    builder.addCase(googleLogin.fulfilled, (state, action) => {
      state.googleLoginStatus = "success";
      state.isAuthenticated = true;
      state.user = action.payload.userData || action.payload.user;
      state.token = action.payload.accessToken;
      state.message = action.payload.message;
      localStorage.setItem("token", action.payload.accessToken);
    });
    builder.addCase(googleLogin.rejected, (state, action) => {
      state.googleLoginStatus = "failed";
      state.error = action.payload;
    });
  },
});
export const {
  resetState,
  // targeted resets
  resetRegisterStatus,
  resetLoginStatus,
  resetGoogleLoginStatus,
  resetCheckSessionStatus,
  logout,
} = authSlice.actions;
export default authSlice.reducer;

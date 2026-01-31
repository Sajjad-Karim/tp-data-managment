import { createAsyncThunk } from "@reduxjs/toolkit";
import { checkSessionApi, googleSignIn, loginApi, registerApi } from "./api";

export const userRegister = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await registerApi(userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || error.message);
    }
  }
);
export const userLogin = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await loginApi(userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || error.message);
    }
  }
);

export const checkSession = createAsyncThunk(
  "auth/check-session",
  async (_, { rejectWithValue }) => {
    try {
      const response = await checkSessionApi();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || error.message);
    }
  }
);

export const googleLogin = createAsyncThunk(
  "auth/google",
  async (payload, { rejectWithValue }) => {
    try {
      const authData = await googleSignIn(payload);
      let googleData = {
        email: authData.data.email,
        fullname: authData.data.given_name,
        avatar: authData.data.picture,
        authProvider: "google",
      };

      // localStorage.setItem("tempMail", authData?.data?.email);
      const res = await loginApi(googleData);
      return res.data;
    } catch (err) {
      // Use rejectWithValue to pass the error payload to the reducer
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);

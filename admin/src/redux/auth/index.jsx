import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authUrl } from "../../utils/baseUrls";

export const signIn = createAsyncThunk(
  "auth/sign-in",
  async ({ formState }) => {
    try {
      const { data } = await axios.post(`${authUrl}admin/signin`, formState);
      return data;
    } catch (error) {
      return console.log(error);
    }
  }
);

export const refresh = createAsyncThunk("auth/refresh-token", async () => {
  try {
    // const response = await axios.post(`${authUrl}refreshtoken`);
    const { data } = await axios.post(`${authUrl}admintoken`, null);
    return data;
  } catch (error) {
    return console.log(error);
  }
});

const initialState = {
  user: [],
  access_token: "",
  isLoading: false,
  isError: false,
  isAdmin: false,
  isSuccess: false,
  message: "",
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload.user;
        state.access_token = action.payload.access_token;
        state.isAdmin = action.payload.user.admin ? true : false;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(refresh.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload.user;
        state.access_token = action.payload.access_token;
        state.isAdmin = action.payload.user.admin ? true : false;
      })
      .addCase(refresh.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(() => {});
  },
});

export default authSlice.reducer;

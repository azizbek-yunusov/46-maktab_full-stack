import axios from "axios";
import { authUrl } from "../../utils/baseUrls";

export const signIn = (formState) => async (dispatch) => {
  try {
    // dispatch({ type: "SIGN_IN_PENDING" });

    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `${authUrl}admin/signin`,
      formState,
      config
    );
    dispatch({
      type: "SIGN_IN_FULFILLED",
      payload: {
        access_token: data.access_token,
        user: data.user,
        isAdmin: data.user.admin ? true : false,
      },
    });
    if (data.admin_token) {
      localStorage.setItem("admin_token", data.admin_token);
    }
    dispatch({ type: "USER_FULFILLED", payload: data.user });
  } catch (err) {
    dispatch({
      type: "SIGN_IN_REJECTED",
      payload: err.response.data.err,
    });
    console.log(err);
  }
};

export const refreshToken = () => async (dispatch) => {
  const admin_token = localStorage.getItem("admin_token");
  if (admin_token) {
    dispatch({ type: "REFRESH_PENDING" });
    try {
      const { data } = await axios.post(`${authUrl}admintoken`, {
        admin_token,
      });
      dispatch({
        type: "REFRESH_FULFILLED",
        payload: {
          access_token: data.access_token,
          user: data.user,
          isAdmin: data.user.admin ? true : false,
        },
      });
      dispatch({ type: "USER_FULFILLED", payload: data.user });
    } catch (err) {
      console.log(err);
    }
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: "CLEAR_ERRORS" });
};

export const signOut = () => async (dispatch) => {
  await axios.get(`${authUrl}admin/logout`);
  localStorage.removeItem("admin_token");
  dispatch({ type: "SIGN_OUT" });
};

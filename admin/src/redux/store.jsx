import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import image from "./imageSlice";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    auth,
    image
  },
  devTools: true,
});

function UserProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default UserProvider;

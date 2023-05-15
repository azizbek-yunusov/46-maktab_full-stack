import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import post from "./post";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    post,
  },
  devTools: process.env.NODE_ENV !== "production",
});

function UserProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default UserProvider;

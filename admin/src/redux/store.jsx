import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import image from "./imageSlice";
import employee from "./employee";
import post from "./post";
import customer from "./customer";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    auth,
    image,
    post,
    customer,
    employee,
  },
  devTools: true,
});

function UserProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default UserProvider;

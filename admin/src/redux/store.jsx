import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import product from "./product";
import order from "./order";
import brand from "./brand/brandSlice";
import category from "./category";
import banner from "./banner";
import post from "./post";
import review from "./review";
import auth from "./reducers/authReducer";
import me from "./reducers/userReducer";
import customer from "./customer";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    auth,
    me,
    product,
    review,
    customer,
    order,
    brand,
    category,
    banner,
    post,
  },
  devTools: true,
});

function UserProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default UserProvider;

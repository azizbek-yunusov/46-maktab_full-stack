import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { orderUrl } from "../../utils/baseUrls";

export const getOrders = createAsyncThunk(
  "order/get-orders",
  async (access_token, thunkAPI) => {
    try {
      const response = await axios.get(orderUrl, {
        headers: {
          Authorization: access_token,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getOrder = createAsyncThunk(
  "order/get-order",
  async ({ access_token, id }, thunkAPI) => {
    try {
      const response = await axios.get(`${orderUrl}${id}`, {
        headers: {
          Authorization: access_token,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getMyOrders = createAsyncThunk(
  "order/get-my-orders",
  async (access_token, thunkAPI) => {
    try {
      const response = await axios.get(`${orderUrl}my`, {
        headers: {
          Authorization: access_token,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const newOrder = createAsyncThunk(
  "order/new-order",
  async ({ access_token, orderData }) => {
    try {
      const { data } = await axios.post(orderUrl, orderData, {
        headers: {
          Authorization: access_token,
        },
      });
      return data;
    } catch (error) {
      return console.log(error);
    }
  }
);
export const updateOrder = createAsyncThunk(
  "order/update-order",
  async ({ access_token, id, orderData }) => {
    try {
      const { data } = await axios.put(`${orderUrl}${id}`, orderData, {
        headers: {
          Authorization: access_token,
        },
      });
      return data;
    } catch (error) {
      return console.log(error);
    }
  }
);

export const resetOrderStatus = createAsyncThunk(
  "order/reset-order-status",
  async ({ access_token, id }) => {
    try {
      const { data } = await axios.put(`${orderUrl}reset/${id}`, null, {
        headers: {
          Authorization: access_token,
        },
      });
      return data;
    } catch (error) {
      return console.log(error);
    }
  }
);

export const deleteOrder = createAsyncThunk(
  "order/delete-order",
  async ({ access_token, id }, thunkApi) => {
    try {
      const { data } = await axios.delete(`${orderUrl}${id}`, {
        headers: {
          Authorization: access_token,
        },
      });
      return data;
    } catch (error) {
      return console.log(error);
    }
  }
);
export const selectedDeleteOrder = createAsyncThunk(
  "order/selected-delete-order",
  async ({ access_token, selectedIds }, thunkApi) => {
    try {
      const { data } = await axios.post(`${orderUrl}selected`, selectedIds, {
        headers: {
          Authorization: access_token,
        },
      });
      return data;
    } catch (error) {
      return console.log(error);
    }
  }
);

export const updateOrderStatus = createAsyncThunk(
  "order/update-order-status",
  async ({ id, access_token, status }, thunkApi) => {
    try {
      const { data } = await axios.put(
        `${orderUrl}${id}`,
        {
          status,
        },
        {
          headers: {
            Authorization: access_token,
          },
        }
      );
      console.log(data);
      return data;
    } catch (error) {
      return console.log(error);
    }
  }
);

const initialState = {
  orders: [],
  myOrders: [],
  order: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};
export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.orders = action.payload;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(newOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(newOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // state.orders.push(action.payload);
      })
      .addCase(newOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.order = action.payload;
      })
      .addCase(getOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getMyOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMyOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.myOrders = action.payload;
      })
      .addCase(getMyOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateOrderStatus.pending, (state) => {
        state.isError = false;
      })
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.order = action.payload;
      })
      .addCase(updateOrderStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateOrder.pending, (state) => {
        state.isSuccess = false;
      })
      .addCase(updateOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updatedProduct = action.payload;
      })
      .addCase(updateOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetOrderStatus.pending, (state) => {
        state.isSuccess = false;
      })
      .addCase(resetOrderStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.order = action.payload;
      })
      .addCase(resetOrderStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteOrder.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.orders = state.orders.filter(
          (item) => item._id !== action.payload._id
        );
      })
      .addCase(deleteOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(selectedDeleteOrder.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(selectedDeleteOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.orders = state.orders.filter(
          (item) => item._id !== action.payload._id
        );
      })
      .addCase(selectedDeleteOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(() => {});
  },
});

export default orderSlice.reducer;

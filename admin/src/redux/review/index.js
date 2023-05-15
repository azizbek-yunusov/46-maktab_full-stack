import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { reviewUrl } from "../../utils/baseUrls";

export const getAllReviews = createAsyncThunk(
  "review/get-reviews",
  async (access_token, thunkAPI) => {
    try {
      const response = await axios.get(reviewUrl, {
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
export const getReview = createAsyncThunk(
  "review/get-review",
  async ({ id }) => {
    try {
      const { data } = await axios.get(`${reviewUrl}${id}`);
      return data;
    } catch (error) {
      return console.log(error);
    }
  }
);
export const createReview = createAsyncThunk(
  "review/create-review",
  async ({ access_token, reviewData }) => {
    try {
      const { data } = await axios.post(reviewUrl, reviewData, {
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
export const updateReview = createAsyncThunk(
  "review/update-review",
  async ({ access_token, id, reviewData }) => {
    try {
      const { data } = await axios.put(`${reviewUrl}${id}`, reviewData, {
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

export const deleteReview = createAsyncThunk(
  "review/delete-review",
  async ({ access_token, id }, thunkApi) => {
    try {
      const { data } = await axios.delete(`${reviewUrl}${id}`, {
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
export const selectedDeleteReview = createAsyncThunk(
  "review/selected-delete-review",
  async ({ access_token, selectedIds }, thunkApi) => {
    try {
      const { data } = await axios.post(`${reviewUrl}selected`, selectedIds, {
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

const initialState = {
  reviews: [],
  review: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};
export const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.reviews = action.payload;
      })
      .addCase(getAllReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createReview.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(createReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.reviews.push(action.payload);
      })
      .addCase(createReview.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.review = action.payload;
      })
      .addCase(getReview.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updatedPost = action.payload;
      })
      .addCase(updateReview.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteReview.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.reviews = state.reviews.filter(
          (review) => review._id !== action.payload._id
        );
      })
      .addCase(deleteReview.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(selectedDeleteReview.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(selectedDeleteReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.reviews = state.reviews.filter(
          (review) => review._id !== action.payload._id
        );
      })
      .addCase(selectedDeleteReview.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(() => {});
  },
});

export default reviewSlice.reducer;

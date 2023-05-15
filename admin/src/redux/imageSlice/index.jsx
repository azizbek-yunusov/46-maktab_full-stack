import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { imageUrl } from "../../utils/baseUrls";

export const getImages = createAsyncThunk(
  "image/get-images",
  async (thunkAPI) => {
    try {
      const response = await axios.get(imageUrl);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getimage = createAsyncThunk("image/get-image", async ({ id }) => {
  try {
    const { data } = await axios.get(`${imageUrl}${id}`);
    return data;
  } catch (error) {
    return console.log(error);
  }
});
export const uploadImage = createAsyncThunk(
  "image/upload-image",
  async ({ access_token, imageData }) => {
    try {
      const { data } = await axios.post(`${imageUrl}upload`, imageData, {
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
export const updateimage = createAsyncThunk(
  "image/update-image",
  async ({ access_token, id, imageData }) => {
    try {
      const { data } = await axios.put(`${imageUrl}${id}`, imageData, {
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

export const deleteImage = createAsyncThunk(
  "image/delete-image",
  async ({ access_token, id }, thunkApi) => {
    try {
      const { data } = await axios.delete(`${imageUrl}${id}`, {
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
export const selectedDeleteImage = createAsyncThunk(
  "image/selected-delete-image",
  async ({ access_token, selectedIds }, thunkApi) => {
    try {
      const { data } = await axios.post(`${imageUrl}/selected`, selectedIds, {
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
  images: [],
  image: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};
export const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getImages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.images = action.payload.images;
      })
      .addCase(getImages.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(uploadImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.images.push(action.payload.newImage);
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getimage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getimage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.image = action.payload;
      })
      .addCase(getimage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateimage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateimage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updatedimage = action.payload;
      })
      .addCase(updateimage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteImage.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.images = state.images.filter(
          (image) => image._id !== action.payload._id
        );
      })
      .addCase(deleteImage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(selectedDeleteImage.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(selectedDeleteImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.images = state.images.filter(
          (image) => image._id !== action.payload._id
        );
      })
      .addCase(selectedDeleteImage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(() => {});
  },
});

export default imageSlice.reducer;

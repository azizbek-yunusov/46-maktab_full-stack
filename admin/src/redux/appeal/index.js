import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { appealUrl } from "../../utils/baseUrls";

export const getAllAppeals = createAsyncThunk(
  "appeal/get-appeals",
  async ({ access_token }, thunkAPI) => {
    try {
      const response = await axios.get(appealUrl, {
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
export const getByAppeal = createAsyncThunk(
  "appeal/get-appeal",
  async ({ id, access_token }) => {
    try {
      const { data } = await axios.get(`${appealUrl}${id}`, {
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
export const addAppeal = createAsyncThunk(
  "appeal/add-appeal",
  async ({ studentData, access_token }) => {
    try {
      console.log("add appeal");
      const { data } = await axios.post(appealUrl, studentData, {
        headers: {
          Authorization: access_token,
        },
      });
      console.log(data);
      return data;
    } catch (error) {
      return console.log(error);
    }
  }
);
export const editAppeal = createAsyncThunk(
  "appeal/update-appeal",
  async ({ access_token, id, studentData }) => {
    try {
      const { data } = await axios.put(`${appealUrl}${id}`, studentData, {
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

export const deleteAppeal = createAsyncThunk(
  "appeal/delete-appeal",
  async ({ access_token, id }, thunkApi) => {
    try {
      const { data } = await axios.delete(`${appealUrl}${id}`, {
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
export const selecteddeleteAppeal = createAsyncThunk(
  "appeal/selected-delete-appeal",
  async ({ access_token, selectedIds }, thunkApi) => {
    try {
      const { data } = await axios.post(`${appealUrl}/selected`, selectedIds, {
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
  appeals: [],
  appeal: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};
export const appealSlice = createSlice({
  name: "appeal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllAppeals.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllAppeals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.appeals = action.payload;
      })
      .addCase(getAllAppeals.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(addAppeal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addAppeal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.appeals.push(action.payload);
      })
      .addCase(addAppeal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getByAppeal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getByAppeal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.appeal = action.payload;
      })
      .addCase(getByAppeal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(editAppeal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editAppeal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updatedstudent = action.payload;
      })
      .addCase(editAppeal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteAppeal.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteAppeal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.appeals = state.appeals.filter(
          (appeal) => appeal._id !== action.payload._id
        );
      })
      .addCase(deleteAppeal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(selecteddeleteAppeal.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(selecteddeleteAppeal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.appeal = state.appeal.filter(
          (appeal) => appeal._id !== action.payload._id
        );
      })
      .addCase(selecteddeleteAppeal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(() => {});
  },
});

export default appealSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { studentUrl } from "../../utils/baseUrls";

export const getAllStudents = createAsyncThunk(
  "student/get-students",
  async ({ access_token }, thunkAPI) => {
    try {
      const response = await axios.get(studentUrl, {
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
export const getByStudent = createAsyncThunk(
  "student/get-student",
  async ({ id, access_token }) => {
    try {
      const { data } = await axios.get(`${studentUrl}${id}`, {
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
export const addStudent = createAsyncThunk(
  "student/add-student",
  async ({ studentData, access_token }) => {
    try {
      console.log("add student");
      const { data } = await axios.post(studentUrl, studentData, {
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
export const editStudent = createAsyncThunk(
  "student/update-student",
  async ({ access_token, id, studentData }) => {
    try {
      const { data } = await axios.put(`${studentUrl}${id}`, studentData, {
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

export const deleteStudent = createAsyncThunk(
  "student/delete-student",
  async ({ access_token, id }, thunkApi) => {
    try {
      const { data } = await axios.delete(`${studentUrl}${id}`, {
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
export const selecteddeleteStudent = createAsyncThunk(
  "student/selected-delete-student",
  async ({ access_token, selectedIds }, thunkApi) => {
    try {
      const { data } = await axios.post(`${studentUrl}/selected`, selectedIds, {
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
  students: [],
  student: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};
export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllStudents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllStudents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.students = action.payload;
      })
      .addCase(getAllStudents.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(addStudent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addStudent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.students.push(action.payload);
      })
      .addCase(addStudent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getByStudent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getByStudent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.student = action.payload;
      })
      .addCase(getByStudent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(editStudent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editStudent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updatedstudent = action.payload;
      })
      .addCase(editStudent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteStudent.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.student = state.student.filter(
          (student) => student._id !== action.payload._id
        );
      })
      .addCase(deleteStudent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(selecteddeleteStudent.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(selecteddeleteStudent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.student = state.student.filter(
          (student) => student._id !== action.payload._id
        );
      })
      .addCase(selecteddeleteStudent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(() => {});
  },
});

export default studentSlice.reducer;

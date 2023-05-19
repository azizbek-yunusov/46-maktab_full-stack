import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { studentUrl } from "../../utils/baseUrls";

export const getAllStudents = createAsyncThunk(
  "employee/get-employees",
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
  "employee/get-employee",
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
export const addEmployee = createAsyncThunk(
  "employee/add-employee",
  async ({ access_token, employeeData }) => {
    try {
      const { data } = await axios.post(studentUrl, employeeData, {
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
export const updateEmployee = createAsyncThunk(
  "employee/update-employee",
  async ({ access_token, id, employeeData }) => {
    try {
      const { data } = await axios.put(`${studentUrl}${id}`, employeeData, {
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

export const deleteEmployee = createAsyncThunk(
  "employee/delete-employee",
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
export const selecteddeleteEmployee = createAsyncThunk(
  "employee/selected-delete-employee",
  async ({ access_token, selectedIds }, thunkApi) => {
    try {
      const { data } = await axios.post(
        `${studentUrl}/selected`,
        selectedIds,
        {
          headers: {
            Authorization: access_token,
          },
        }
      );
      return data;
    } catch (error) {
      return console.log(error);
    }
  }
);

const initialState = {
  employees: [],
  employee: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};
export const employeeSlice = createSlice({
  name: "employee",
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
        state.employees = action.payload;
      })
      .addCase(getAllStudents.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(addEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.employee.push(action.payload);
      })
      .addCase(addEmployee.rejected, (state, action) => {
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
        state.employee = action.payload;
      })
      .addCase(getByStudent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updatedemployee = action.payload;
      })
      .addCase(updateEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteEmployee.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.employee = state.employee.filter(
          (employee) => employee._id !== action.payload._id
        );
      })
      .addCase(deleteEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(selecteddeleteEmployee.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(selecteddeleteEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.employee = state.employee.filter(
          (employee) => employee._id !== action.payload._id
        );
      })
      .addCase(selecteddeleteEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(() => {});
  },
});

export default employeeSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiUrl = process.env.REACT_APP_API_URL;
export const fetchServices = createAsyncThunk("fetchservices", async () => {
  const data = await fetch(`${apiUrl}/service/all-service`);
  return data.json();
});

const serviceSlice = createSlice({
  name: "services",
  initialState: {
    isLoading: true,
    data: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchServices.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchServices.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchServices.rejected, (state, action) => {
      state.error = true;
      state.isLoading = true;
    });
  },
});

export default serviceSlice.reducer;

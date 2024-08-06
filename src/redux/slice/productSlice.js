import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiUrl = process.env.REACT_APP_API_URL;
export const fetchProducts = createAsyncThunk("fetchproducts", async () => {
  const data = await fetch(`${apiUrl}/product/all-products`);
  return data.json();
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: true,
    data: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default productSlice.reducer;

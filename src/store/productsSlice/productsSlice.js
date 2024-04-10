import {createSlice} from '@reduxjs/toolkit';

import {fetchProducts} from './productsIndex';

const initialState = {
    data: [],
    loading: false,
    error: null,
    currentPage: 1,
    totalPages: 0,
};
export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload.products;
                state.loading = false;
                state.error = null;
                state.totalPages = Math.ceil(action.payload.total / 10);
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
                    ? action.payload.error
                    : 'Something went wrong! ';
            });
    },
});

export default productSlice.reducer;

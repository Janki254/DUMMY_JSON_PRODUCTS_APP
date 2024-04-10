import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async ({rejectWithValue}) => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            if (!response.ok) {
                throw new Error('Failed to Fetched Products');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

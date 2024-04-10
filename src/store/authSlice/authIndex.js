import {createAsyncThunk} from '@reduxjs/toolkit';

// const BASE_URL = 'https://dummyjson.com/auth/login';

export const userLogin = createAsyncThunk(
    'auth/userLogin',
    async ({username, password}, {rejectWithValue}) => {
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });
            if (!response.ok) {
                throw new Error('Failed to Login');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

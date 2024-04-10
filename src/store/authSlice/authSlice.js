import {createSlice} from '@reduxjs/toolkit';
import {userLogin} from './authIndex';
const initialState = {
    user: [],
    error: null,
    isLoggedIn: false,
};
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.isLoggedIn = true;
        },
        logout: () => {
            return initialState;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.fulfilled, (state, action) => {
                state.user = action.payload;
                state.error = null;
                state.isLoggedIn = true;
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.error = action.payload
                    ? action.payload.error
                    : 'Something went wrong! ';
            });
    },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;

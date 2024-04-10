import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice/authSlice';
import productSlice from './productsSlice/productsSlice';
const rootReducer = combineReducers({
    auth: authSlice,
    products: productSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});

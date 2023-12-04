import charactersReducer from './slices/charactersSlice';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: charactersReducer,
});

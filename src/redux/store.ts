import charactersReducer from './slices/charactersSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    characters: charactersReducer,
})

export const store = configureStore({
    reducer: rootReducer,
});

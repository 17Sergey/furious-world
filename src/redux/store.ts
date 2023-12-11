import { combineReducers, configureStore } from '@reduxjs/toolkit'
import currentCharacterReducer from './slices/currentCharacterSlice';
import personalFileReducer from './slices/personalFileSlice';
import charactersReducer from './slices/charactersSlice';
import carsReducer from './slices/carsSlice';
import ratingReducer from './slices/ratingSlice';

const rootReducer = combineReducers({
    currentCharacter: currentCharacterReducer,
    charactersScreen: charactersReducer,
    personalFileScreen: personalFileReducer,
    carsScreen: carsReducer,
    ratingScreen: ratingReducer,
})

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
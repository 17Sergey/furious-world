import charactersReducer from './slices/charactersSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import currentCharacterReducer from './slices/currentCharacterSlice';

const rootReducer = combineReducers({
    currentCharacter: currentCharacterReducer,
    characters: charactersReducer,
})

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
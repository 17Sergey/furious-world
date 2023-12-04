import { createSlice } from '@reduxjs/toolkit'


export interface CharactersState {
    notes: string[];
}

type ActionType = { type: string, payload: string };

const charactersSlice = createSlice({
    name: "characters",
    initialState: {
        characters: [
            {
                id: 5,
                fullName: "Ramsey Rosewood",
                portraitPhoto: 
            }
        ]
    },
    reducers: {
        // addNote: (state: CharactersState, action: ActionType) => {
        //     state.notes.push(action.payload);
        // }
    }
})

// export const { addNote } = charactersSlice.actions;

export default charactersSlice.reducer;
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
                id: 1,
                name: "Dominic Toretto",
                photo: "https://raw.githubusercontent.com/17Sergey/furious-world/main/src/assets/Ramsey/Ramsey.webp",
            },
            {
                id: 2,
                name: "Brian O'Connor",
                photo: "https://raw.githubusercontent.com/17Sergey/furious-world/main/src/assets/Ramsey/Ramsey.webp",
            },
            {
                id: 3,
                name: "Mia Toretto",
                photo: "https://raw.githubusercontent.com/17Sergey/furious-world/main/src/assets/Ramsey/Ramsey.webp",
            },
            {
                id: 4,
                name: "Ramsey Rosewood",
                photo: "https://raw.githubusercontent.com/17Sergey/furious-world/main/src/assets/Ramsey/Ramsey.webp",
            },
        ],
    },
    reducers: {
        // addNote: (state: CharactersState, action: ActionType) => {
        //     state.notes.push(action.payload);
        // }
    }
})

// export const { addNote } = charactersSlice.actions;

export default charactersSlice.reducer;
import { createSlice } from '@reduxjs/toolkit'


export interface CharactersState {
    characters: CharacterType[];
}

export type CharacterType = {
    id: number;
    name: string;
    photo: string;
}

type ActionType = { type: string, payload: string };

const charactersSlice = createSlice({
    name: "characters",
    initialState: {
        characters: [
            {
                id: 0,
                name: "Dominic Toretto",
                photo: "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Dominic.jpg?raw=true",
                color: "#fed99b",   
            },
            {
                id: 1,
                name: "Brian O'Connor",
                photo: "https://raw.githubusercontent.com/17Sergey/furious-world/main/src/assets/Ramsey/Ramsey.webp",
            },
            {
                id: 2,
                name: "Mia Toretto",
                photo: "https://raw.githubusercontent.com/17Sergey/furious-world/main/src/assets/Ramsey/Ramsey.webp",
            },
            {
                id: 3,
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
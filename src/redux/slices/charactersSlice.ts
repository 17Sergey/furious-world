import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface CharactersState {
    characters: CharacterType[];
}

export type CharacterType = {
    id: number;
    name: string;
    photo: string;
}

const charactersSlice = createSlice({
    name: "charactersScreen",
    initialState: {
        characters: [
            {
                id: 0,
                name: "Dominic Toretto",
                photo: "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Dominic.jpg?raw=true",
            },
            {
                id: 1,
                name: "Brian O'Connor",
                photo: "https://github.com/17Sergey/furious-world/blob/main/src/assets/Brian/Brian.jpg?raw=true",
            },
            {
                id: 2,
                name: "Mia Toretto",
                photo: "https://github.com/17Sergey/furious-world/blob/main/src/assets/Mia/Mia.jpg?raw=true",
            },
            {
                id: 3,
                name: "Ramsey Rosewood",
                photo: "https://raw.githubusercontent.com/17Sergey/furious-world/main/src/assets/Ramsey/Ramsey.webp",
            },
        ],
    },
    reducers: {
    }
})

export const {   } = charactersSlice.actions;

export default charactersSlice.reducer;
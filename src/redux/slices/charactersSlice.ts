import { createSlice } from '@reduxjs/toolkit'


export interface CharactersState {
    characters: Array<CharacterType>;
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
                name: "Brian O'Conner",
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
            {
                id: 4,
                name: "Tej Parker",
                photo: "https://github.com/17Sergey/furious-world/blob/main/src/assets/Tej/Tej.jpg?raw=true",
            },
        ],
    },
    reducers: {
    }
})

export const {   } = charactersSlice.actions;

const charactersReducer = charactersSlice.reducer;

export default charactersReducer;
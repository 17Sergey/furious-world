import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const characters = [
    {
        id: 0,
        name: "Dominic Toretto",
        color: "#d55f3d",   
    },
    {
        id: 1,
        name: "Brian O'Connor",
        color: "#208aff",
    },
    {
        id: 2,
        name: "Mia Toretto",
        color: "#da4ea5",
    },
    {
        id: 3,
        name: "Ramsey Rosewood",
        color: "#6F08A9",
    },
    {
        id: 4,
        name: "Tej Parker",
        color: "#51c459",
    },
];

export interface CurrentCharacterState {
    currentCharacterId: number;
    color: string;
}


const currentCharacterSlice = createSlice({
    name: "currentCharacter",
    initialState: {
        currentCharacterId: 0,
        color: "#d55f3d",
    },
    reducers: {
        setCurrentCharacter: (state: CurrentCharacterState, action : PayloadAction<number>) => {

            // Validation for index switching
            let index = action.payload;
            if (index > characters.length - 1) index =  0;   
            if (index < 0) index = characters.length - 1;   

            state.currentCharacterId = characters[index].id;
            state.color = characters[index].color;
        }
    }
})

export const { setCurrentCharacter } = currentCharacterSlice.actions;

const currentCharacterReducer = currentCharacterSlice.reducer;

export default currentCharacterReducer;
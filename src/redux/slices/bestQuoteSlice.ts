import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const characters = [
    {
        id: 0,
        shapeColor: "#FF7750",
        quotes: [
            {
                text: "I live my life a quarter mile at a time. Nothing else matters. For those ten seconds or less, I'm free.",
                image: ""
            },
            {
                text: "Money will come and go. We know that. But the most important thing in life will always be the people in this room, right here, right now. Salute, mi familia.",
                image: ""
            },
            {
                text: "I used to say I lived my life a quarter mile at a time... and I think that's why we were brothers. Because you did, too. No matter where you are, whether it's a quarter mile away or halfway across the world... you'll always be with me. And you'll always be my brother.",
                image: 
            }
        ]   
    },
    {
        id: 1,
        shapeColor: "#208aff",
    },
    {
        id: 2,
        shapeColor: "#da4ea5",
    },
    {
        id: 3,
        shapeColor: "#6F08A9",
    },
    {
        id: 4,
        shapeColor: "#51c459",
    },
];

export interface CurrentCharacterState {
    currentCharacterId: number;
    color: string;
}


const bestQuoteSlice = createSlice({
    name: "bestQuote",
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

export const { setCurrentCharacter } = bestQuoteSlice.actions;

const bestQuoteReducer = bestQuoteSlice.reducer;

export default bestQuoteReducer;
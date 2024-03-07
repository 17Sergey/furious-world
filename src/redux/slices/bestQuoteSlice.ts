import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const characters = [
    {
        id: 0,
        shapeColor: "#FF7750",
        quotes: [
            {
                id: 0,
                text: "I live my life a quarter mile at a time. Nothing else matters. For those ten seconds or less, I'm free.",
                image: "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Quotes/1.jpg?raw=true"
            },
            {
                id: 1,
                text: "Money will come and go. We know that. But the most important thing in life will always be the people in this room, right here, right now. Salute, mi familia.",
                image: "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Quotes/2.jpg?raw=true"
            },
            {
                id: 2,
                text: "I used to say I lived my life a quarter mile at a time... and I think that's why we were brothers. Because you did, too. No matter where you are, whether it's a quarter mile away or halfway across the world... you'll always be with me. And you'll always be my brother.",
                image: "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Quotes/3.jpg?raw=true",
            }
        ],  
    },
    {
        id: 1,
        shapeColor: "#20C9FF",
        quotes: [
            {
                id: 0,
                text: "I Owe You A Ten-Second Car.",
                image: "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Quotes/1.jpg?raw=true"
            },
            {
                id: 1,
                text: "Dom, Cars Don't Fly. Cars Don't Fly!",
                image: "https://github.com/17Sergey/furious-world/blob/main/src/assets/Brian/Quotes/2.jpg?raw=true"
            },
        ],  
    },
    {
        id: 2,
        shapeColor: "#FF5FC2",
        quotes: [
            {
                id: 0,
                text: "Now, it was crappy yesterday, it was crappy the day before. And guess what? It hasn't changed.",
                image: "https://github.com/17Sergey/furious-world/blob/main/src/assets/Mia/Quotes/1.jpg?raw=true"
            },
        ],  
    },
    {
        id: 3,
        shapeColor: "#A821E6",
        quotes: [
            {
                id: 0,
                text: "Life is binary: zero and ones. Only two things keep a group like this together; fear or loyalty - and I don't see a drop of fear amongst you guys.",
                image: "https://github.com/17Sergey/furious-world/blob/main/src/assets/Ramsey/RamseyQuote1.jpg?raw=true"
            },
        ],  
    },
    {
        id: 4,
        shapeColor: "#65EA6F",
        quotes: [
            {
                id: 0,
                text: "Guys we gotta come up with another plan.They got a tank",
                image: "https://github.com/17Sergey/furious-world/blob/main/src/assets/Tej/Quotes/1.jpg?raw=true"
            },
            {
                id: 1,
                text: "What's The Matter Roman? Forgot The Snow Tires?",
                image: "https://github.com/17Sergey/furious-world/blob/main/src/assets/Tej/Quotes/2.jpg?raw=true"
            },
        ],  
    },
];

const currentCharacter = {
    ...characters[0],
    activeQuote: characters[0].quotes[0],
}

const activeQuote = characters[0].quotes[0];

type QuoteType = {
    id: number;
    text: string;
    image: string;
}

type BestQuoteCurrentCharacterType = {
    id: number;
    shapeColor: string;
    quotes: Array<QuoteType>;
}

type BestQuoteState = {
    currentCharacter: BestQuoteCurrentCharacterType;
    activeQuote: QuoteType;
}

const bestQuoteSlice = createSlice({
    name: "bestQuote",
    initialState: {
        currentCharacter,
        activeQuote,
    },
    reducers: {
        setBestQuoteCurrentCharacter: (state: BestQuoteState, action: PayloadAction<number>) => {
            state.currentCharacter = characters[action.payload];
            state.activeQuote = characters[action.payload].quotes[0];
        },
        changeActiveQuote: (state: BestQuoteState, action: PayloadAction<number>) => {
            state.activeQuote = state.currentCharacter.quotes[action.payload];
        }
    }
})

export const { setBestQuoteCurrentCharacter, changeActiveQuote } = bestQuoteSlice.actions;

const bestQuoteReducer = bestQuoteSlice.reducer;

export default bestQuoteReducer;
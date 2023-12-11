import { createSlice, PayloadAction } from '@reduxjs/toolkit'



export interface HeroesState {
    isInitialHeroSet: boolean;
    activeHero: HeroType;
    heroes: Array<HeroType>;
}

export type RatingCriteryType = {
    caption: string;
    value: number;
    color: string;
}

export type RatingType = Array<RatingCriteryType>;

export type HeroType = {
    id: number;
    name: string;
    photo: string;
    rating: RatingType;
}

const heroes: Array<HeroType> = [
    {
        id: 0,
        name: "Dominic",
        photo: "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Dominic.jpg?raw=true",
        rating: [
            {
                caption: "Speed",
                value: 100,
                color: "#FF4365",
            },
            {
                caption: "Leadership",
                value: 100,
                color: "#03CEA4",
            },
            {
                caption: "Intelligence",
                value: 70,
                color: "#57E2E5",
            },
            {
                caption: "Fighting skills",
                value: 90,
                color: "#0496FF",
            },
        ]
    },
    {
        id: 1,
        name: "Brian",
        photo: "https://github.com/17Sergey/furious-world/blob/main/src/assets/Brian/Brian.jpg?raw=true",
        rating: [
            {
                caption: "Speed",
                value: 100,
                color: "#FF4365",
            },
            {
                caption: "Leadership",
                value: 70,
                color: "#03CEA4",
            },
            {
                caption: "Intelligence",
                value: 90,
                color: "#57E2E5",
            },
            {
                caption: "Fighting skills",
                value: 80,
                color: "#0496FF",
            },
        ]
    },
    {
        id: 2,
        name: "Mia",
        photo: "https://github.com/17Sergey/furious-world/blob/main/src/assets/Mia/Mia.jpg?raw=true",
        rating: [
            {
                caption: "Speed",
                value: 70,
                color: "#FF4365",
            },
            {
                caption: "Leadership",
                value: 50,
                color: "#03CEA4",
            },
            {
                caption: "Intelligence",
                value: 60,
                color: "#57E2E5",
            },
            {
                caption: "Fighting skills",
                value: 30,
                color: "#0496FF",
            },
        ]
    },
    {
        id: 3,
        name: "Ramsey",
        photo: "https://raw.githubusercontent.com/17Sergey/furious-world/main/src/assets/Ramsey/Ramsey.webp",
        rating: [
            {
                caption: "Speed",
                value: 20,
                color: "#FF4365",
            },
            {
                caption: "Leadership",
                value: 40,
                color: "#03CEA4",
            },
            {
                caption: "Intelligence",
                value: 90,
                color: "#57E2E5",
            },
            {
                caption: "Fighting skills",
                value: 60,
                color: "#0496FF",
            },
        ]
    },
    {
        id: 4,
        name: "Tej",
        photo: "https://github.com/17Sergey/furious-world/blob/main/src/assets/Tej/Tej.jpg?raw=true",
        rating: [
            {
                caption: "Speed",
                value: 80,
                color: "#FF4365",
            },
            {
                caption: "Leadership",
                value: 70,
                color: "#03CEA4",
            },
            {
                caption: "Intelligence",
                value: 90,
                color: "#57E2E5",
            },
            {
                caption: "Fighting skills",
                value: 90,
                color: "#0496FF",
            },
        ]
    },
];

const ratingSlice = createSlice({
    name: "ratingScreen",
    initialState: {
        isInitialHeroSet: false,
        activeHero: heroes[0],
        heroes,
    },
    reducers: {
        setActiveHero: (state: HeroesState, action: PayloadAction<number>) => {

            // Validation for index switching
            let index = action.payload;
            if (index > heroes.length - 1) index = 0;
            if (index < 0) index = heroes.length - 1;

            state.activeHero = heroes[index];
            state.isInitialHeroSet = true;
        }
    }
})

export const { setActiveHero } = ratingSlice.actions;

const ratingReducer = ratingSlice.reducer;

export default ratingReducer;
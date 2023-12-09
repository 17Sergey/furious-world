import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface CharactersState {
    characters: Array<CharacterInfoType>;
}

export type CharacterInfoType = {
    id: number,
    fullName: string,
    age: number,
    nationality: string,
    bestSkills: string,
    maritalStatus: string,
    description: string,
    photo: string,
}

const personalFileSlice = createSlice({
    name: "personalFileScreen",
    initialState: {
        characters: new Array<CharacterInfoType>(
            {
                id: 0,
                fullName: "Dominic Toretto(Dom)",
                age: 2023-1976,
                nationality: "American",
                bestSkills: "Driving & leadership",
                maritalStatus: "Married with Letty Ortiz",
                description: "Heart-pounding action as a group of teenagers led by Tony Toretto, following in the footsteps of his cousin Dom, are recruited by a government agency to infiltrate an elite racing league serving as a front for a nefarious crime organization. With their slick cars and an array of gadgets and spy gear, this hip group will race to save the world from destruction.",
                photo: "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/PersonalFileDominic.jpg?raw=true",
            },
            {
                id: 1,
                fullName: "Brian O'Connor",
                age: 2023-1978,
                nationality: "American",
                bestSkills: "Former FBI officer, driving, leadership",
                maritalStatus: "Married with Mia Toretto",
                description: "Heart-pounding action as a group of teenagers led by Tony Toretto, following in the footsteps of his cousin Dom, are recruited by a government agency to infiltrate an elite racing league serving as a front for a nefarious crime organization. With their slick cars and an array of gadgets and spy gear, this hip group will race to save the world from destruction.",
                photo: "https://github.com/17Sergey/furious-world/blob/main/src/assets/Brian/PersonalFileBrian.jpg?raw=true",
            },
            {
                id: 2,
                fullName: "Mia Toretto",
                age: 2023-1981,
                nationality: "American",
                bestSkills: "Driving & family",
                maritalStatus: "Married with Brian O'Connor",
                description: "Heart-pounding action as a group of teenagers led by Tony Toretto, following in the footsteps of his cousin Dom, are recruited by a government agency to infiltrate an elite racing league serving as a front for a nefarious crime organization. With their slick cars and an array of gadgets and spy gear, this hip group will race to save the world from destruction.",
                photo: "https://github.com/17Sergey/furious-world/blob/main/src/assets/Brian/PersonalFileBrian.jpg?raw=true",
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
        ),
    },
    reducers: {
    }
})

export const {   } = personalFileSlice.actions;

const personalFileReducer = personalFileSlice.reducer;

export default personalFileReducer;
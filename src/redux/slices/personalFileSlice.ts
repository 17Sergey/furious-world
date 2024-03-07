import { createSlice } from '@reduxjs/toolkit'


export interface CharactersState {
    characters: Array<CharacterInfoType>;
}

export type CharacterInfoType = {
    id: number,
    fullName: string,
    age: string,
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
                fullName: "Dominic Toretto",
                age: String(2023-1976),
                nationality: "American",
                bestSkills: "Driving & leadership",
                maritalStatus: "Married with Letty Ortiz",
                description: "Heart-pounding action as a group of teenagers led by Tony Toretto, following in the footsteps of his cousin Dom, are recruited by a government agency to infiltrate an elite racing league serving as a front for a nefarious crime organization. With their slick cars and an array of gadgets and spy gear, this hip group will race to save the world from destruction.",
                photo: "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/PersonalFileDominic.jpg?raw=true",
            },
            {
                id: 1,
                fullName: "Brian O'Connor",
                age: String(2023-1978),
                nationality: "American",
                bestSkills: "Former FBI officer, driving, leadership",
                maritalStatus: "Married with Mia Toretto",
                description: "Heart-pounding action as a group of teenagers led by Tony Toretto, following in the footsteps of his cousin Dom, are recruited by a government agency to infiltrate an elite racing league serving as a front for a nefarious crime organization. With their slick cars and an array of gadgets and spy gear, this hip group will race to save the world from destruction.",
                photo: "/images/PersonalFileBrian.jpg",
            },
            {
                id: 2,
                fullName: "Mia Toretto",
                age: String(2023-1981),
                nationality: "American",
                bestSkills: "Driving & family",
                maritalStatus: "Married with Brian O'Connor",
                description: "Heart-pounding action as a group of teenagers led by Tony Toretto, following in the footsteps of his cousin Dom, are recruited by a government agency to infiltrate an elite racing league serving as a front for a nefarious crime organization. With their slick cars and an array of gadgets and spy gear, this hip group will race to save the world from destruction.",
                photo: "https://github.com/17Sergey/furious-world/blob/main/src/assets/Mia/PersonalFileMia.jpg?raw=true",
            },
            {
                id: 3,
                fullName: "Ramsey Parker",
                age: String(30),
                nationality: "British",
                bestSkills: "Computers & Technology",
                maritalStatus: "Married with Tej Parker",
                description: "Heart-pounding action as a group of teenagers led by Tony Toretto, following in the footsteps of his cousin Dom, are recruited by a government agency to infiltrate an elite racing league serving as a front for a nefarious crime organization. With their slick cars and an array of gadgets and spy gear, this hip group will race to save the world from destruction.",
                photo: "https://github.com/17Sergey/furious-world/blob/main/src/assets/Ramsey/PersonalFileRamsey.jpg?raw=true",
            },
            {
                id: 4,
                fullName: "Tej Parker",
                age: String(40),
                nationality: "American",
                bestSkills: "Computers & Technology",
                maritalStatus: "Married with Ramsey Parker",
                description: "Heart-pounding action as a group of teenagers led by Tony Toretto, following in the footsteps of his cousin Dom, are recruited by a government agency to infiltrate an elite racing league serving as a front for a nefarious crime organization. With their slick cars and an array of gadgets and spy gear, this hip group will race to save the world from destruction.",
                photo: "https://github.com/17Sergey/furious-world/blob/main/src/assets/Tej/PersonalFileTej.jpg?raw=true",
            },
        ),
    },
    reducers: {
    }
})

export const {   } = personalFileSlice.actions;

const personalFileReducer = personalFileSlice.reducer;

export default personalFileReducer;
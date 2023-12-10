import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CharacterCarType = {
    id: number,
    carName: string,
    carImages: Array<string>,
}

export type CharacterActiveCarType = {
    id: number,
    carName: string,
    carImages: Array<string>,
    activeImage: string;
}

export type CharacterWithCarType = {
    id: number;
    name: string;
    cars: Array<CharacterCarType>;
}

export type CharacterCarsState = {
    activeCar: CharacterActiveCarType;
    characters: Array<CharacterWithCarType>;
}

const characters = [
    {
        id: 0,
        name: "Dom",
        cars: [
            {
                id: 0,
                carName: "1970 Dodge Charger R/T",
                carImages: [
                    "https://raw.githubusercontent.com/17Sergey/furious-world/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_1.webp",
                    "https://raw.githubusercontent.com/17Sergey/furious-world/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_2.webp",
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_3.jpg?raw=true",
                ],
            },
            {
                id: 1,
                carName: "1970 Chevrolet Chevelle SS",
                carImages: [
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Chevrolet%20Chevelle/Chevrolet%20Chevelle1.jpg?raw=true",
                    "https://raw.githubusercontent.com/17Sergey/furious-world/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_2.webp",
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_3.jpg?raw=true",
                ],
            },
            {
                id: 2,
                carName: "2009 Dodge Challenger SRT-8",
                carImages: [
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Challenger%20SRT-8/DodgeChallenger1.jpg?raw=true",
                    "https://raw.githubusercontent.com/17Sergey/furious-world/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_2.webp",
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_3.jpg?raw=true",
                ],
            },
            {
                id: 3,
                carName: "2021 Dodge Charger SRT Hellcat Redeye Widebody",
                carImages: [
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Charger%20SRT%20Hellcat/Dodge%20Charger%20SRT%20Hellcat1.jpg?raw=true",
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Charger%20SRT%20Hellcat/Dodge%20Charger%20SRT%20Hellcat2.jpg?raw=true",
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_3.jpg?raw=true",
                ],
            },
        ]
    },
    {
        id: 1,
        name: "Brian",
        cars: [
            {
                id: 0,
                carName: "1970 Dodge Charger R/T",
                carImages: [
                    "https://raw.githubusercontent.com/17Sergey/furious-world/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_1.webp",
                    "https://raw.githubusercontent.com/17Sergey/furious-world/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_2.webp",
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_3.jpg?raw=true",
                ],
            },
            {
                id: 1,
                carName: "1970 Chevrolet Chevelle SS",
                carImages: [
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Chevrolet%20Chevelle/Chevrolet%20Chevelle1.jpg?raw=true",
                    "https://raw.githubusercontent.com/17Sergey/furious-world/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_2.webp",
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_3.jpg?raw=true",
                ],
            },
            {
                id: 2,
                carName: "2009 Dodge Challenger SRT-8",
                carImages: [
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Challenger%20SRT-8/DodgeChallenger1.jpg?raw=true",
                    "https://raw.githubusercontent.com/17Sergey/furious-world/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_2.webp",
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_3.jpg?raw=true",
                ],
            },
            {
                id: 3,
                carName: "2021 Dodge Charger SRT Hellcat Redeye Widebody",
                carImages: [
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Charger%20SRT%20Hellcat/Dodge%20Charger%20SRT%20Hellcat1.jpg?raw=true",
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Charger%20SRT%20Hellcat/Dodge%20Charger%20SRT%20Hellcat2.jpg?raw=true",
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_3.jpg?raw=true",
                ],
            },
        ]
    },
    {
        id: 2,
        name: "Mia",
        cars: [
            {
                id: 0,
                carName: "1970 Dodge Charger R/T",
                carImages: [
                    "https://raw.githubusercontent.com/17Sergey/furious-world/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_1.webp",
                    "https://raw.githubusercontent.com/17Sergey/furious-world/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_2.webp",
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_3.jpg?raw=true",
                ],
            },
            {
                id: 1,
                carName: "1970 Chevrolet Chevelle SS",
                carImages: [
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Chevrolet%20Chevelle/Chevrolet%20Chevelle1.jpg?raw=true",
                    "https://raw.githubusercontent.com/17Sergey/furious-world/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_2.webp",
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_3.jpg?raw=true",
                ],
            },
            {
                id: 2,
                carName: "2009 Dodge Challenger SRT-8",
                carImages: [
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Challenger%20SRT-8/DodgeChallenger1.jpg?raw=true",
                    "https://raw.githubusercontent.com/17Sergey/furious-world/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_2.webp",
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_3.jpg?raw=true",
                ],
            },
            {
                id: 3,
                carName: "2021 Dodge Charger SRT Hellcat Redeye Widebody",
                carImages: [
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Charger%20SRT%20Hellcat/Dodge%20Charger%20SRT%20Hellcat1.jpg?raw=true",
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Charger%20SRT%20Hellcat/Dodge%20Charger%20SRT%20Hellcat2.jpg?raw=true",
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_3.jpg?raw=true",
                ],
            },
        ]
    },
    {
        id: 3,
        name: "Ramsey",
        cars: [
            {
                id: 0,
                carName: "1970 Dodge Charger R/T",
                carImages: [
                    "https://raw.githubusercontent.com/17Sergey/furious-world/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_1.webp",
                    "https://raw.githubusercontent.com/17Sergey/furious-world/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_2.webp",
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_3.jpg?raw=true",
                ],
            },
            {
                id: 1,
                carName: "1970 Chevrolet Chevelle SS",
                carImages: [
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Chevrolet%20Chevelle/Chevrolet%20Chevelle1.jpg?raw=true",
                    "https://raw.githubusercontent.com/17Sergey/furious-world/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_2.webp",
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_3.jpg?raw=true",
                ],
            },
            {
                id: 2,
                carName: "2009 Dodge Challenger SRT-8",
                carImages: [
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Challenger%20SRT-8/DodgeChallenger1.jpg?raw=true",
                    "https://raw.githubusercontent.com/17Sergey/furious-world/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_2.webp",
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_3.jpg?raw=true",
                ],
            },
            {
                id: 3,
                carName: "2021 Dodge Charger SRT Hellcat Redeye Widebody",
                carImages: [
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Charger%20SRT%20Hellcat/Dodge%20Charger%20SRT%20Hellcat1.jpg?raw=true",
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Charger%20SRT%20Hellcat/Dodge%20Charger%20SRT%20Hellcat2.jpg?raw=true",
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_3.jpg?raw=true",
                ],
            },
        ]
    },
    {
        id: 4,
        name: "Tej",
        cars: [
            {
                id: 0,
                carName: "1970 Dodge Charger R/T",
                carImages: [
                    "https://raw.githubusercontent.com/17Sergey/furious-world/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_1.webp",
                    "https://raw.githubusercontent.com/17Sergey/furious-world/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_2.webp",
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_3.jpg?raw=true",
                ],
            },
            {
                id: 1,
                carName: "1970 Chevrolet Chevelle SS",
                carImages: [
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Chevrolet%20Chevelle/Chevrolet%20Chevelle1.jpg?raw=true",
                    "https://raw.githubusercontent.com/17Sergey/furious-world/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_2.webp",
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_3.jpg?raw=true",
                ],
            },
            {
                id: 2,
                carName: "2009 Dodge Challenger SRT-8",
                carImages: [
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Challenger%20SRT-8/DodgeChallenger1.jpg?raw=true",
                    "https://raw.githubusercontent.com/17Sergey/furious-world/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_2.webp",
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_3.jpg?raw=true",
                ],
            },
            {
                id: 3,
                carName: "2021 Dodge Charger SRT Hellcat Redeye Widebody",
                carImages: [
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Charger%20SRT%20Hellcat/Dodge%20Charger%20SRT%20Hellcat1.jpg?raw=true",
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Charger%20SRT%20Hellcat/Dodge%20Charger%20SRT%20Hellcat2.jpg?raw=true",
                    "https://github.com/17Sergey/furious-world/blob/main/src/assets/Dominic/Cars/Dodge%20Charger%20RT-8/Dodge%20Charger%20RT-8_3.jpg?raw=true",
                ],
            },
        ]
    },
]

const customInitialState: CharacterCarsState = {
    activeCar: { ...characters[0].cars[0], activeImage: characters[0].cars[0].carImages[0] },
    characters
}


const carsSlice = createSlice({
    name: "cars",
    initialState: customInitialState,
    reducers: {
        changeActiveCar: (state: CharacterCarsState, action: PayloadAction<CharacterCarType>) => {
            state.activeCar = { ...action.payload, activeImage: action.payload.carImages[0] };
        },
        changeActiveCarImage: (state: CharacterCarsState, action: PayloadAction<string>) => {
            state.activeCar.activeImage = action.payload;
        }
    }
})

export const { changeActiveCar, changeActiveCarImage } = carsSlice.actions;

const carsReducer = carsSlice.reducer;

export default carsReducer;
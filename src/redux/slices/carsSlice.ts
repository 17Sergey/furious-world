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
                    "https://www.legendlines.com/cdn/shop/articles/Charger_Fast_Furious_00_800x.jpg?v=1616602301",
                    "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/02/Fast-and-Furious-Dom-Dodge-Charger-RT.jpg?q=50&fit=crop&w=1500&dpr=1.5",
                    "https://www.motorious.com/content/images/2021/04/All-Electric-Dodge-Charger-Stars-In-Next-Fast---Furious--3.jpg",
                ],
            },
            {
                id: 1,
                carName: "1970 Chevrolet Chevelle SS",
                carImages: [
                    "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/02/Fast-and-Furious-Dom-Chevrolet-Chevelle-SS.jpg?q=50&fit=crop&w=1500&dpr=1.5",
                    "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/02/Fast-and-Furious-Dom-Dodge-Charger-RT.jpg?q=50&fit=crop&w=1500&dpr=1.5",
                    "https://www.motorious.com/content/images/2021/04/All-Electric-Dodge-Charger-Stars-In-Next-Fast---Furious--3.jpg",
                ],
            },
            {
                id: 2,
                carName: "2009 Dodge Challenger SRT-8",
                carImages: [
                    "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/02/Fast-and-Furious-Dom-Dodge-Challenger-SRT8.jpg?q=50&fit=crop&w=1500&dpr=1.5",
                    "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/02/Fast-and-Furious-Dom-Dodge-Charger-RT.jpg?q=50&fit=crop&w=1500&dpr=1.5",
                    "https://www.motorious.com/content/images/2021/04/All-Electric-Dodge-Charger-Stars-In-Next-Fast---Furious--3.jpg",
                ],
            },
            {
                id: 3,
                carName: "2021 Dodge Charger SRT Hellcat Redeye Widebody",
                carImages: [
                    "https://i0.wp.com/moparinsiders.com/wp-content/uploads/2023/02/Fast-X-Trailer-Screenshots.-Universal-Studios.-5.jpeg?resize=708%2C398&ssl=1",
                    "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/02/Fast-and-Furious-Dom-Dodge-Charger-RT.jpg?q=50&fit=crop&w=1500&dpr=1.5",
                    "https://www.motorious.com/content/images/2021/04/All-Electric-Dodge-Charger-Stars-In-Next-Fast---Furious--3.jpg",
                ],
            },
        ]
    },
    // {
    //     id: 1,
    //     name: "Brian",
    // },
    // {
    //     id: 2,
    //     name: "Mia",
    // },
    // {
    //     id: 3,
    //     name: "Ramsey",
    // },
    // {
    //     id: 4,
    //     name: "Tej",
    // },
]

const customInitialState: CharacterCarsState = {
    activeCar: {...characters[0].cars[0], activeImage: characters[0].cars[0].carImages[0]},
    characters
}


const carsSlice = createSlice({
    name: "cars",
    initialState: customInitialState,
    reducers: {
        changeActiveCar: (state: CharacterCarsState, action: PayloadAction<CharacterCarType>) => {
            state.activeCar = {...action.payload, activeImage: action.payload.carImages[0]};
        },
        changeActiveCarImage: (state: CharacterCarsState, action: PayloadAction<string>) => {
            state.activeCar.activeImage = action.payload;
        }
    }
})

export const { changeActiveCar, changeActiveCarImage } = carsSlice.actions;

const carsReducer = carsSlice.reducer;

export default carsReducer;
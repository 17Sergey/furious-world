import { createSlice } from '@reduxjs/toolkit'


export interface CurrentCharacterState {
    currentCharacterId: number;
}

type ActionType = { type: string, payload: string };

const currentCharacterSlice = createSlice({
    name: "currentCharacter",
    initialState: {
        currentCharacterId: 0,
        color: "#6F08A9",
    },
    reducers: {
        // addNote: (state: CurrentCharacterState, action: ActionType) => {
        //     state.notes.push(action.payload);
        // }
    }
})

// export const { addNote } = charactersSlice.actions;

export default currentCharacterSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name: 'gptSearch',
    initialState: {
        gptSearchStatus: false,
        language: "English"
    },
    reducers:{
        changeGptSearchStatus: (state)=>{
            state.gptSearchStatus = !state.gptSearchStatus
        },
        changeLanguage: (state,action)=>{
            state.language = action.payload
        }

    }
})
export const {changeGptSearchStatus, changeLanguage} = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
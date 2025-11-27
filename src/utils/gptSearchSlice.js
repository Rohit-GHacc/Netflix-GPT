import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name: 'gptSearch',
    initialState: {
        gptSearchStatus: false,
    },
    reducers:{
        changeGptSearchStatus: (state)=>{
            state.gptSearchStatus = !state.gptSearchStatus
        }
    }
})
export const {changeGptSearchStatus} = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
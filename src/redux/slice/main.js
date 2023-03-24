import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 1,
    

};
export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        incCount: (state) =>{
            
                state.count +=1
            
        },
        decCount: (state) => {
            if (state.count !== 0) {
                state.count -= 1
            }
        },
        resCount: (state) => {
            state.count = 0
        }

    },
})

export const { incCount, decCount, resCount } = mainSlice.actions;
export default mainSlice.reducer;
// 15W9-36ZL-3TIR-RFG2
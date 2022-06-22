import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    val:0
}


export const myReducer = createReducer(initialState,{
    add:(state)=>{
        state.val += 1;
    },
    remove:(state)=>{
        state.val -= 1;
    }
})


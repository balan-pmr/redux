import { createSlice } from "@reduxjs/toolkit";

// https://www.youtube.com/watch?v=_shA5Xwe8_4

const initialState = {
    toppings: ['Tomato'], 
    gluten:true
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers:{
        toggleGluten: (state) =>{
            state.gluten = !state.gluten
        },
        addTopping: (state, action) =>{
            state.toppings = [...state.toppings, action.payload]
        }
    }
})

export const {toggleGluten, addTopping } = pizzaSlice.actions

export default pizzaSlice.reducer;
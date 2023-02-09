import { createSlice } from "@reduxjs/toolkit";

export const priceSlice = createSlice({
    name: 'price',
    initialState: {
        value: 0,
        count: 0,
    },
    reducers: {
        setAmount: (state, action) => {
            state.value += action.payload;
        },
        setCount: (state, action) => {
            state.count += action.payload;
        }
    },
})

export const {setAmount, setCount} = priceSlice.actions;
export default priceSlice.reducer;
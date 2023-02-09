import { createSlice } from "@reduxjs/toolkit";

export const priceSlice = createSlice({
    name: 'price',
    initialState: {
        value: 0,
    },
    reducers: {
        setAmount: (state, action) => {
            state.value = action.payload;
        }
    },
})

export const {setAmount} = priceSlice.actions;
export default priceSlice.reducer;
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'ToDo',
    initialState: {
       list: [{id: 0, value:"First initial record from store"}]
    },
    reducers: {
        // increment: (state) => {
        //     state.value += 1
        // },
        // decrement: (state) => {
        //     state.value -= 1
        // },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload
        // },
    },
})

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
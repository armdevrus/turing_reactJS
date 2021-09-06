import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/CounterSlice'
import ToDoReducer from "../slices/ToDoSlice"

export default configureStore({
    reducer: {
        counter: counterReducer,
        ToDo: ToDoReducer
    },
})
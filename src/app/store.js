import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/CounterSlice'
import ToDoReducer from "../slices/ToDoSlice"
// import {logger} from "redux-logger/src";
import {createLogger} from "redux-logger";

const logger = createLogger({
    level: 'warn',
    duration: true
});

export default configureStore({
    reducer: {
        counter: counterReducer,
        ToDo: ToDoReducer
    },
    middleware:
        (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})
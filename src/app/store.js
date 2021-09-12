import { configureStore } from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import storageSession from 'redux-persist/lib/storage/session'
import {combineReducers} from "redux"

import counterReducer from '../features/counter/CounterSlice'
import ToDoReducer from "../slices/ToDoSlice"
import {createLogger} from "redux-logger";

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    // blacklist: ['counter']
    whitelist: ['counter']
}

const rootReducer = combineReducers({
    counter: counterReducer,
    ToDo: ToDoReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const logger = createLogger({
    level: 'warn',
    duration: true
});

const store = configureStore({
    reducer: persistedReducer,
    middleware:
        (getDefaultMiddleware)=> getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
            }).concat(logger)
})

const persistor = persistStore(store)
export {persistor, store}
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import { themeReducer } from "./features"

const persistConfig = {
    key: "key",
    storage
}

const rootReducer = combineReducers({
    theme : themeReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer : persistedReducer
})

export const persister = persistStore(store);
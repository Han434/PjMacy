import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import { themeReducer, ordersReducer, productReducer } from "./features"

const persistConfig = {
    key: "key",
    storage
}

const rootReducer = combineReducers({
    theme: themeReducer,
    orders: ordersReducer,
    product: productReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: rootReducer
})

export const persister = persistStore(store);
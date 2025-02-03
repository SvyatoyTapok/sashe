import { configureStore } from '@reduxjs/toolkit'
import { pricesApi } from './pricesSlice'
import { bigImage } from './pricesSlice'

export const store = configureStore({
    reducer: {
        [pricesApi.reducerPath]: pricesApi.reducer,
        [bigImage.reducerPath]: bigImage.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(pricesApi.middleware, bigImage.middleware),
})
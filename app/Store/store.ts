import { configureStore } from '@reduxjs/toolkit';
import { pricesApi } from './pricesSlice';
import { bigImage } from './pricesSlice';
import modalReducer from './modalSlice';

export const store = configureStore({
    reducer: {
        [pricesApi.reducerPath]: pricesApi.reducer,
        [bigImage.reducerPath]: bigImage.reducer,
        modal: modalReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pricesApi.middleware, bigImage.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
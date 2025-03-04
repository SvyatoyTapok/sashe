import { configureStore } from '@reduxjs/toolkit';
import { pricesApi } from './pricesSlice';
import { bigImageApi } from './pricesSlice';
import modalReducer from './modalSlice';
import {bookingsApi} from './pricesSlice'
import { allGalleryApi } from './pricesSlice';

export const store = configureStore({
    reducer: {
        [pricesApi.reducerPath]: pricesApi.reducer,
        [bigImageApi.reducerPath]: bigImageApi.reducer,
        [bookingsApi.reducerPath]: bookingsApi.reducer,
        [allGalleryApi.reducerPath]: allGalleryApi.reducer,
        modal: modalReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            pricesApi.middleware,
            bigImageApi.middleware,
            bookingsApi.middleware,
            allGalleryApi.middleware,
        ),
});
export type RootState = ReturnType<typeof store.getState>;
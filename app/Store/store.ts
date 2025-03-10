import { configureStore } from '@reduxjs/toolkit';
import { pricesApi } from './pricesSlice';
import { bigImagesApi } from './pricesSlice';
import modalReducer from './modalSlice';
import {bookingsApi} from './pricesSlice'
import { allGalleryApi } from './pricesSlice';

export const store = configureStore({
    reducer: {
        [pricesApi.reducerPath]: pricesApi.reducer,
        [bigImagesApi.reducerPath]: bigImagesApi.reducer,
        [bookingsApi.reducerPath]: bookingsApi.reducer,
        [allGalleryApi.reducerPath]: allGalleryApi.reducer,
        modal: modalReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            pricesApi.middleware,
            bigImagesApi.middleware,
            bookingsApi.middleware,
            allGalleryApi.middleware,
        ),
});
export type RootState = ReturnType<typeof store.getState>;
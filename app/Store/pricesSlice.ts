import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: 'https://sashestudio.ru/' });

export const pricesApi = createApi({
    reducerPath: 'pricesApi',
    baseQuery,
    endpoints: (builder) => ({
        getPrices: builder.query({
            query: (price_type) => `prices/type/${price_type}`,
        }),
        deletePrice: builder.mutation({
            query: (id) => ({
                url: `prices/${id}`,
                method: 'DELETE',
            }),
        }),
        addPrice: builder.mutation({
            query: ({ name, cost, price_type }) => ({
                url: `prices`,
                method: 'POST',
                body: { name, cost, price_type },
                headers: { 'Content-Type': 'application/json' },
            }),
        }),
    }),
});

export const bookingsApi = createApi({
    reducerPath: 'bookingsApi',
    baseQuery,
    endpoints: (builder) => ({
        addBooking: builder.mutation({
            query: (newPrice) => ({
                url: 'bookings',
                method: 'POST',
                body: newPrice,
                headers: { 'Content-Type': 'application/json' },
            }),
        }),
        getLastBooking: builder.query({
            query: () => '/bookings/last',
        }),
        deleteBooking: builder.mutation({
            query: (id) => ({
                url: `bookings/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const bigImagesApi = createApi({
    reducerPath: 'bigImageApi',
    baseQuery,
    endpoints: (builder) => ({
        postBigImage: builder.mutation({
            query: (file) => {
                const formData = new FormData();
                formData.append('file', file);
                return {
                    url: 'images/big',
                    method: 'POST',
                    body: formData,
                };
            },
        }),
        postSmallImage: builder.mutation({
            query: (file) => {
                const formData = new FormData();
                formData.append('file', file);
                return {
                    url: 'images/small',
                    method: 'POST',
                    body: formData,
                };
            },
        }),
    }),
});

export const allGalleryApi = createApi({
    reducerPath: 'allGalleryApi',
    baseQuery,
    endpoints: (builder) => ({
        getAllGallery: builder.query({
            query: () => 'images/gallery',
        }),
        deleteImage: builder.mutation({
            query:(imageName) => ({
                url:`images/${imageName}`,
                method:'DELETE',
            }),
        }),
        getAllWorkers: builder.query({
            query: () => 'images/workers',
        }),
        deleteDefaultImage: builder.mutation({
            query: (imageName) => ({
                url: `images/${imageName}`,
                method:'DELETE',
            }),
        }),
        uploadImage: builder.mutation({
            query: (file) => {
                const formData = new FormData();
                formData.append('file', file);
                return {
                    url: 'images/gallery',
                    method: 'POST',
                    body: formData,
                };
            },
        }),
    }),
});

export const { useGetPricesQuery, useDeletePriceMutation, useAddPriceMutation } = pricesApi;
export const { useAddBookingMutation, useGetLastBookingQuery, useDeleteBookingMutation } = bookingsApi;
export const { usePostSmallImageMutation, usePostBigImageMutation } = bigImagesApi;
export const { useDeleteImageMutation, useGetAllGalleryQuery, useGetAllWorkersQuery, useUploadImageMutation, useDeleteDefaultImageMutation } = allGalleryApi;
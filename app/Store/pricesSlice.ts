import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: 'http://localhost:4300/' });

export const pricesApi = createApi({
    reducerPath: 'pricesApi',
    baseQuery,
    endpoints: (builder) => ({
        getPrices: builder.query({
            query: (price_type) => `prices/type/${price_type}`,
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

export const bigImageApi = createApi({
    reducerPath: 'bigImageApi',
    baseQuery,
    endpoints: (builder) => ({
        getBigImage: builder.query({
            query: () => 'images/IMG_2757.jpeg',
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
            query: (imageName) => ({
                url: `images/gallery/${imageName}`,
                method: 'DELETE',
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

export const { useGetPricesQuery } = pricesApi;
export const { useAddBookingMutation, useGetLastBookingQuery, useDeleteBookingMutation } = bookingsApi;
export const { useGetBigImageQuery } = bigImageApi;
export const { useGetAllGalleryQuery, useDeleteImageMutation, useUploadImageMutation } = allGalleryApi;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pricesApi = createApi({
    reducerPath: 'pricesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4300/' }),
    endpoints: (builder) => ({
        getPrices: builder.query({
            query: (price_type) => ({
                url: `prices/type/${price_type}`,
                
            }),
        }),
    }),
});

export const bigImage = createApi({
    reducerPath: 'bigImage',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4300/' }),
    endpoints: (builder) => ({
        getBigImage: builder.query({
            query: () => 'images/IMG_2757.jpeg',
        }),
    }),
})

export const { useGetPricesQuery } = pricesApi;
export const { useGetBigImageQuery } = bigImage;
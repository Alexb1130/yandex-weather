
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { WeatherRequest, WeatherResponse } from './types';

export const { 
    useGetWeatherForecastQuery,
    useLazyGetWeatherForecastQuery,
    reducer, 
    reducerPath, 
    middleware 
} = createApi({
    reducerPath: 'weather/weatherApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://simple-chip-alvarezsaurus.glitch.me/v2/',
    }),
    endpoints: (builder) => ({
        getWeatherForecast: builder.query<WeatherResponse, WeatherRequest>({
            query: (params) => ({ url: 'forecast?', method: 'GET', params }),
        }),
    }),
})
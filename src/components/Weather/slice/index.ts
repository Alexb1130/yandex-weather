import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { defineGeo } from '../utils';

export interface WeatherState {
    data: GeolocationCoordinates | null,
    loading: boolean;
    error: boolean;
    activeDayIdx: string;
}

const initialState: WeatherState = {
    data: null,
    loading: true,
    error: false,
    activeDayIdx: '0',
}

export const defineGeoThunk = createAsyncThunk('weather/defineGeo', defineGeo)

export const { reducer, actions: { changeDay } } = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        changeDay(state, { payload }: PayloadAction<string>) {
            state.activeDayIdx = payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(defineGeoThunk.pending, (state) => ({
                ...state,
                loading: true,
                error: false
            }))
            .addCase(defineGeoThunk.fulfilled, (state, { payload: { coords } }) => ({
                ...state,
                loading: false,
                error: false,
                data: coords
            }))
            .addCase(defineGeoThunk.rejected, (state) => ({
                ...state,
                loading: false,
                error: true,
                data: initialState.data
            }))
    }
})
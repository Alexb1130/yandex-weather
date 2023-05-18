import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { reducer as weatherReducer } from '../components/Weather/slice';
import { reducer as savedGeoLocationsReducer } from '../components/SavedGeolocations/slice';
import {
  reducer as weatherApiReducer,
  reducerPath as weatherApiReducerPath, 
  middleware as weatherApiMiddleware
} from '../services/weather';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    savedGeoLocations: savedGeoLocationsReducer,
    [weatherApiReducerPath]: weatherApiReducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({ serializableCheck: false }).concat(weatherApiMiddleware),
})

export type WeatherState = ReturnType<typeof store.getState>;

export type WeatherDispatch = typeof store.dispatch;

export type WeatherThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  WeatherState,
  unknown,
  Action<string>
>

export const useWeatherDispatch = () => useDispatch<WeatherDispatch>();

export const useWeatherSelector: TypedUseSelectorHook<WeatherState> = useSelector;

export default store;

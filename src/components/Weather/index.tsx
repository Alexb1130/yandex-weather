import { useEffect } from 'react';
import { Button, Result, Spin } from 'antd';

import { useWeatherSelector, useWeatherDispatch } from '../../store';
import { defineGeoThunk } from './slice';
import { WeatherNow } from './components/WeatherNow';
import { WeatherNextDays } from './components/WeatherNextDays';
import { useLazyGetWeatherForecastQuery } from '../../services/weather';


export const Weather = () => {
    const dispatch = useWeatherDispatch();

    const { 
        weather: { data: weatherGeoData, loading: geoLoading, error: geoError },
        savedGeoLocations: { selectedGeoLocation }
    } = useWeatherSelector(state => state);

    const [getForecast, { data: weatherForecast, isFetching: weatherForecastFetching, error: weatherForecastError }] = useLazyGetWeatherForecastQuery();

    const loading = geoLoading || weatherForecastFetching;

    const loadForecast = () => {
        if(selectedGeoLocation) {
            getForecast({
                lat: selectedGeoLocation.lat,
                lon: selectedGeoLocation.lon,
                lang: 'ru_RU',
                limit: 7,
            })
        } else {
            if (weatherGeoData?.latitude && weatherGeoData?.longitude) {
                getForecast({
                    lat: weatherGeoData.latitude,
                    lon: weatherGeoData.longitude,
                    lang: 'ru_RU',
                    limit: 7,
                })
            }
        }
    }

    useEffect(() => {
        dispatch(defineGeoThunk());
    }, [])

    useEffect(() => {
        loadForecast();
    }, [weatherGeoData, selectedGeoLocation])

    if (geoError) {
        return (
            <Result
                status="warning"
                title='Не удалось определить геопозицию'
                subTitle='Необходимо разрешить доступ к данным геопозиции в настройках вашего браузера'
            />
        )
    }

    if (weatherForecastError) {
        return (
            <Result
                status="error"
                title='Не удалось получить прогноз'
                subTitle='Во время получения прогноза возникла ошибка, попробуйте еще раз'
                extra={[<Button type="primary" loading={loading} onClick={loadForecast}>Повторный запрос</Button>]}
            />
        )
    }

    if (loading) {
        return (
            <Spin size='large' tip='Запрос прогноза' style={{ marginTop: 150 }}>
                <div className="content" />
            </Spin>
        )
    }

    return (
        <>
            {weatherForecast && (
                <div className='ml-24'>
                    <div className='mb-24'>
                        <WeatherNow data={weatherForecast} />
                    </div>
                    <WeatherNextDays data={weatherForecast.forecasts} />
                </div>
            )}
        </>
    )
}
import { WeatherFact, WeatherForecast } from "../../services/weather/types"

export const defineGeo = (): Promise<GeolocationPosition> => new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
})

export const convertDataToWeatherForecasts = (data: WeatherForecast): WeatherFact => ({
    ...data,
    temp: `${data.parts.day.temp_min}° ...${data.parts.day.temp_max}`,
    condition: data.parts.day.condition,
    feels_like: data.parts.day.feels_like,
    temp_avg: data.parts.day.temp_avg,
    wind_speed: data.parts.day.wind_speed, 
    pressure_mm: data.parts.day.pressure_mm, 
    humidity: data.parts.day.humidity
} as unknown as WeatherFact)
import { ReactNode } from "react";
import { WeatherFact } from "./WeatherFact";

export const WeatherFacts = ({ wind_speed, humidity, pressure_mm }: { wind_speed: number; humidity: number; pressure_mm: number }): ReactNode[] => [
    <WeatherFact iconName='wind' title={`${wind_speed.toString()} СВ`} alt='Скорость ветра' />,
    <WeatherFact iconName='humidity' title={`${humidity.toString()}%`} alt='Влажность' />,
    <WeatherFact iconName='pressure' title={`${pressure_mm.toString()} мм рт. ст.`} alt='Атмосферное давление' />,
]
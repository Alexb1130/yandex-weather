import dayjs from 'dayjs';

import { WeatherFact as IWeatherFact, WeatherForecast } from "../../services/weather/types";
import { useWeatherDispatch, useWeatherSelector } from "../../store";
import { changeDay } from "./slice";
import { convertDataToWeatherForecasts } from "./utils";

export const useWeatherForecastTabs = (data: WeatherForecast[]): { 
    activeDayIdx: string;
    activeDayData: IWeatherFact;
    tabList: { key: string, tab: string }[];
    onTabChange: (key: string) => void;
} => {
    const dispatch = useWeatherDispatch();

    const { weather: { activeDayIdx } } = useWeatherSelector(state => state);

    const tabList = data.map((it, idx) => ({ key: idx.toString(), tab: dayjs(it.date).format('D MMM') }));

    const onTabChange = (key: string) => {
        dispatch(changeDay(key))
    }

    const activeDayData = convertDataToWeatherForecasts(data[parseInt(activeDayIdx, 10)]);

    return { activeDayIdx, activeDayData, tabList, onTabChange };
}
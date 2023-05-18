import { Card } from 'antd';

import { WeatherForecast } from '../../../services/weather/types';
import { WeatherBody } from './WeatherBody';
import { useWeatherForecastTabs } from '../hooks';
import { WeatherFacts } from './WeatherFacts';

interface Props {
    data: WeatherForecast[];
}

export const WeatherNextDays = ({ data }: Props) => {

    const { tabList, activeDayIdx, onTabChange, activeDayData } = useWeatherForecastTabs(data);

    const { wind_speed, pressure_mm, humidity } = activeDayData;

    const actions = WeatherFacts({ wind_speed, pressure_mm, humidity });

    return (
        <Card
            title='Прогноз на неделю'
            tabList={tabList}
            activeTabKey={activeDayIdx}
            onTabChange={onTabChange}
            actions={actions}
        >
            <WeatherBody tempDescription='Средняя температура' data={activeDayData} date='' />
        </Card>
    )
}
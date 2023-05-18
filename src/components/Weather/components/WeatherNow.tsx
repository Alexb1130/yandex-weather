import { Card, Typography } from 'antd';

import { WeatherBody } from './WeatherBody';
import { WeatherResponse } from '../../../services/weather/types';
import { WeatherFacts } from './WeatherFacts';

const { Text } = Typography;

interface Props {
    data: WeatherResponse;
}

export const WeatherNow = ({ data: {now_dt, info, fact, geo_object} }: Props) => {
    const { lat, lon } = info;
    const { wind_speed, pressure_mm, humidity } = fact;

    const actions = WeatherFacts({ wind_speed, pressure_mm, humidity });

    return (
        <Card
            title={geo_object?.locality?.name || 'Без названия'}
            extra={<Text type='secondary'>{`${lat}′ ${lon}′`} с.ш.</Text>}
            actions={actions}
        >
            <WeatherBody data={fact} date={now_dt} tempDescription='Сейчас ' />
        </Card>
    )
}
import dayjs from 'dayjs';
import { Typography, Space } from 'antd';
import { WeatherFact } from '../../../services/weather/types';
import { WEATHER_CONDITIONS } from '../constants';

const { Title, Text } = Typography;

interface Props {
    data: WeatherFact;
    date: string;
    tempDescription?: string;
}

export const WeatherBody = ({ data, date, tempDescription = 'Температура' }: Props) => {
    const { condition, temp, feels_like, temp_avg } = data;
    return (
        <div>
            <Text type='secondary'>{tempDescription} </Text>
            <Text>{temp_avg || dayjs(date).format('HH:m')}. {WEATHER_CONDITIONS[condition]}</Text>
            <div className='mt-16'>
                <Space size='middle'>
                    <Title className='m-0'>{temp}°</Title>
                    <Space.Compact direction='vertical' size='small'>
                        <Text>{WEATHER_CONDITIONS[condition]}</Text>
                        <div>
                            <Text type='secondary'>Ощущается как </Text>
                            <Text>{feels_like}°</Text>
                        </div>
                    </Space.Compact>
                </Space>
            </div>
        </div>
    )
}
import { SyntheticEvent } from "react";
import { List, Select, Space, Typography } from "antd";

import { useWeatherDispatch, useWeatherSelector } from "../../store";
import { saveGeo, removeGeo, saveSelectedGeo, SavedGeolocation } from "./slice";
import { AddGeo } from "./components/AddGeo";

export const SavedGeolocations = () => {
    const { weather: { data: geoPosition, loading: geoLoading },
        savedGeoLocations: { data: savedGeoLocations, selectedGeoLocation } } = useWeatherSelector(state => state);

    const dispatch = useWeatherDispatch();

    if (!geoPosition || geoLoading) return null;

    const onFinish = (values: SavedGeolocation) => {
        dispatch(saveGeo({ ...values, value: values.label }))
    };

    const onRemoveGeoItem = (item: SavedGeolocation) => (evt: SyntheticEvent<HTMLAnchorElement>) => {
        evt.preventDefault();
        dispatch(removeGeo(item))
    }

    const onChangeGeo = (value: string) => {
        dispatch(saveSelectedGeo(value));
    }

    return (
        <List
            style={{
                backgroundColor: 'white',
                padding: 8,
                alignSelf: 'flex-start'
            }}
            header={
                <Space wrap size='large'>
                    <Typography.Text>Выберите геопозицию</Typography.Text>
                    <Select
                        style={{ width: 200 }}
                        defaultValue={selectedGeoLocation?.value}
                        value={selectedGeoLocation?.value}
                        onChange={onChangeGeo}
                        options={savedGeoLocations}
                    />
                </Space>
            }
            footer={<AddGeo onAdd={onFinish} />}
            dataSource={savedGeoLocations}
            renderItem={(item) => (
                <List.Item
                    actions={[
                        // <a>Редактировать</a>, 
                        <a onClick={onRemoveGeoItem(item)}>Удалить</a>
                    ]}
                >
                    <List.Item.Meta
                        title={<span>{item.label}</span>}
                        description={`${item.lat}′ ${item.lon}′ с.ш`}
                    />
                </List.Item>
            )}
        />
    )
};
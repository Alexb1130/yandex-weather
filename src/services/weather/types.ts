
export interface WeatherRequest {
    lat: number;
    lon: number;
    lang: string; // ru_RU
    limit: number; // 7
    hours?: boolean;
    extra?: boolean;
}

export interface WeatherResponse {
    now: number;
    now_dt: string;
    info: WeatherInfo;
    fact: WeatherFact;
    forecasts: WeatherForecast[];
    geo_object: GeoObject;
}

export interface Item {
    id: number;
    name: string;
}

export interface GeoObject {
    district: Item | null;
    locality: Item;
    province: Item;
    country: Item;
}

export interface WeatherInfo {
    lat: number;
    lon: number;
    tzinfo: {
        offset: number;
        name: string;
        addr: string;
        dst: boolean;
    };
    def_pressure_mm: number;
    def_pressure_pa: number;
    url: string;
}

export interface WeatherFact {
    temp: number;
    temp_avg?: string;
    feels_like: number;
    temp_water: number;
    icon: string; // https://yastatic.net/weather/i/icons/funky/dark/<значение из поля icon>.svg.
    condition: string;
    wind_speed: number;
    wind_gust: number;
    wind_dir: string;
    pressure_mm: number;
    pressure_pa: number;
    humidity: number;
    daytime: 'd' | 'n';
    polar: boolean;
    season: string;
    obs_time: number;
    is_thunder: boolean;
    prec_type: number;
    prec_strength: number;
    cloudness: number;
    phenom_icon: string;
    phenom_condition: string;

}

export interface WeatherForecast {
    date: string;
    date_ts: number;
    week: number;
    rise_begin: string;
    sunrise: string;
    sunset: string;
    set_end: string;
    moon_code: number;
    moon_text: string;
    parts: {
        day: Part;
        night: Part;
        morning: Part;
        evening: Part;
        day_short: Part;
        night_short: Part;
    };
    // night: {}
    temp_min: number;
    temp_max: number;
    temp_avg: number;
    feels_like: number;
    icon: string;
    condition: string;
    daytime: 'd' | 'n';
    polar: boolean;
    wind_speed: number;
    wind_gust: number;
    wind_dir: string;
    pressure_mm: number;
    pressure_pa: number;
    humidity: number;
    soil_temp: number;
    soil_moisture: number;
    prec_mm: number;
    prec_period: number;
    prec_prob: number;
    prec_type: number;
    prec_strength: number;
    fresh_snow_mm: number;
    cloudness: number;
    uv_index: number;
    // day_short: {}
    temp: number;
    // hours: {}
    hour: string;
    hour_ts: number;
}

interface Part {
    temp_min: number;
    temp_max: number;
    temp_avg: number;
    feels_like: number;
    icon: string;
    condition: string;
    daytime: string;
    polar: boolean;
    wind_speed: number;
    wind_gust: number;
    wind_dir: string;
    pressure_mm: number;
    pressure_pa: number;
    humidity: number;
    prec_mm: number;
    prec_period: number;
    prec_type: number;
    prec_strength: number;
    cloudness: number;
}
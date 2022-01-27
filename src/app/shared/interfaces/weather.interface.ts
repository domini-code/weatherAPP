



interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

interface Wind {
    speed: number;
    deg: number;
}


interface Sys {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
}

export interface WeatherData {
    weather: Weather[];
    main: Main;
    wind: Wind;
    sys: Sys;
    name: string;
}

export interface Coord {
    latitude: number;
    longitude: number;
}

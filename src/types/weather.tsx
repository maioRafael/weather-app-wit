export type WeatherItem = {
    id: Number,
    main: String,
    description: String,
    icon: String
}

export type WeatherReponse = {
    coord: {
        lon: Number,
        lat: Number
    },
    weather: WeatherItem[],
    base: String,
    main: {
        temp: Number,
        feels_like: Number,
        temp_min: Number,
        temp_max: Number,
        pressure: Number,
        humidity: Number,
        sea_level: Number,
        grnd_level: Number
    },
    visibility: Number,
    wind: {
        speed: Number,
        deg: Number,
        gust: Number
    },
    clouds: {
        all: Number
    },
    dt: Number,
    sys: {
        country: String,
        sunrise: Number,
        sunset: Number
    },
    timezone: Number,
    id: Number,
    name: String,
    cod: Number
}

export type WeatherData = {
    id: Number,
    main: String,
    description: String,
    icon: String
    temp: Number,
    feels_like: Number,
    temp_min: Number,
    temp_max: Number,
    humidity: String,
    speed: String,
    name: String,
    country: String
}

export type ForecastData = {
    id: Number,
    main: String,
    description: String,
    icon: String
    temp: Number,
    feels_like: Number,
    temp_min: Number,
    temp_max: Number,
    humidity: String,
    speed: String,
    date?: String,
    time: String
}

export type ForecastItem = {
    dt: Number,
    main: {
        temp: Number,
        feels_like: Number,
        temp_min: Number,
        temp_max: Number,
        pressure: Number,
        sea_level: Number,
        grnd_level: Number,
        humidity: Number,
        temp_kf: Number
    },
    weather: WeatherItem[],
    clouds: {
        all: Number
    },
    wind: {
        speed: Number,
        deg: Number,
        gust: Number
    },
    visibility: Number,
    pop: Number,
    sys: {
        pod: String
    },
    dt_txt: String
}

export type ForecastResponse = {
 
     cod: String,
     message: Number,
     cnt: Number,
     list: ForecastItem[],
     city: {
         id: Number,
         name: String,
         coord: {
             lat: Number,
             lon: Number
         },
         country: String,
         population: Number,
         timezone: Number,
         sunrise: Number,
         sunset: Number
     }
 
 }
 
 export type GroupedForecast = {
    date: string,
    value: ForecastData[]
 }
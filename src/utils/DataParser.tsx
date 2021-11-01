import { ForecastData, ForecastResponse, GroupedForecast, WeatherData, WeatherReponse } from "../types/weather";
import { extractDate, extractTime } from "./Utils";

export const parseForecastResponse = ( data: ForecastResponse, unit: String ) : GroupedForecast[] => {

    const forecast : ForecastData[] = data.list.map( item => {
        return {
            ...item.weather[0],
            temp: item.main.temp,
            feels_like: item.main.feels_like,
            temp_min: item.main.temp_min,
            temp_max: item.main.temp_max,
            humidity: item.main.humidity + '%',
            speed: item.wind.speed + '' + unit,
            date: extractDate(item.dt_txt),
            time: extractTime(item.dt_txt)
        }
    });

    const parsedForecast : GroupedForecast[] = Array.from(
        forecast.reduce((m, { date, ...o }) =>
            m.set(date, [...(m.get(date) || []), o]), new Map()),
        ([date, value]) => ({ date, value })
    );

    return parsedForecast;

}

export const parseWeatherResponse = ( data: WeatherReponse, unit: String ) : WeatherData => {

    const parsedWeather : WeatherData = {
        ...data.weather[0],
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        humidity: data.main.humidity + '%',
        speed: data.wind.speed + '' + unit ,
        name: data.name,
        country: data.sys.country
    }

    return parsedWeather;
}

export const parseError = ( code: string ) : String[] => {

    const errorMessages = ['Ops. Someting went wrong!'];
    
    switch( code ) {
        case '404' :  errorMessages.push('City not found'); break;
        case '401' :  errorMessages.push('Unauthorized'); break;
        case '500' :  errorMessages.push('Server error'); break;
        case '400' :  errorMessages.push('Bad request'); break;
        default :  errorMessages.push('Unkwown error');
    }

    return errorMessages;
}
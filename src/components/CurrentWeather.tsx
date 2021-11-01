import { CurrentWeatherWidget } from "../styles/style";
import { WeatherData } from "../types/weather";

type Properties = {
    weather: WeatherData
}
export const CurrentWeather = ( { weather } : Properties ) => {

    const formattedIconUrl = `/icons/${weather.icon}.png`;

    return (
        <CurrentWeatherWidget>
            <div >
                <h2>Weather in {weather.name}, {weather.country}</h2>
                <h3>{weather.temp}°</h3>
                <div className="flex">
                    <img src={formattedIconUrl} alt=""  />
                    <div >{weather.main}</div>
                </div>
                <div>Humidity: {weather.humidity}</div>
                <div>Wind speed:  {weather.speed}</div>
            </div>
        </CurrentWeatherWidget>

    );
} 
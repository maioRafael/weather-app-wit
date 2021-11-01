import { createContext, useState } from "react";
import { WeatherData, GroupedForecast} from "../types/weather";

type WeatherContextType = {
    lastSearch: String,
    weather: WeatherData|null,
    forecast: GroupedForecast[],
    setWeather?: ( weather: WeatherData | null ) => void,
    setForecast?: ( forecast: GroupedForecast[] ) => void,
    setLastSearch?: ( lastSearch: String ) => void
}

const weatherRecord : WeatherContextType = {
    lastSearch: '',
    weather: null,
    forecast: []
}

interface Properties {
    children: JSX.Element,
}

const WeatherContext = createContext( weatherRecord );

export const WeatherContextProvider = ( props : Properties ) => {
    

    const [userForecast, setUserForecast] = useState<GroupedForecast[]>([]);
    const [userWeather, setUserWeather] = useState<WeatherData|null>(null);
    const [userSearch, setUserSearch] = useState<String>('');
    
    function setWeatherHandler( weather: WeatherData | null ) {
        setUserWeather(weather);
    }

    function setForecastHandler( forecast: GroupedForecast[] ) {
        setUserForecast(forecast);

    }

    function setLastSearchHandler( lastSearch: String ) {
        setUserSearch(lastSearch);
    }

    const context : WeatherContextType = {
        lastSearch: userSearch,
        weather: userWeather,
        forecast: userForecast,
        setWeather: setWeatherHandler,
        setForecast: setForecastHandler,
        setLastSearch: setLastSearchHandler

    };

    return <WeatherContext.Provider value={ context } >

        { props.children }

    </WeatherContext.Provider>

}

export default WeatherContext;
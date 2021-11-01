import { useEffect, useState, useContext } from "react";
import { Button } from "@material-ui/core";

import { UnitContainer } from "../styles/style";
import { scalesEnum } from "../types/scale";
import { parseError, parseForecastResponse, parseWeatherResponse } from "../utils/DataParser";
import { buildEndpoint } from "../utils/Utils";

import { CurrentWeather } from "../components/CurrentWeather";
import { SearchField } from "../components/SearchField";
import { WeatherForecast } from "../components/WeatherForecast";
import { Loading } from "../components/Loading";
import { ErrorMessage } from "../components/ErrorMessage";

import WeatherContext from "../store/weather-context";

export const WeatherPage = () => {

    const weatherContext = useContext( WeatherContext );

    const [ isLoading, setIsLoading ] = useState( false );

    const [ userScale, setUserScale ] = useState<scalesEnum>( scalesEnum.Celsius );

    const [ errorMessages, setErrorMessages ] = useState<String[]>( [] );
    
    useEffect( () => {
        searchHandler( weatherContext.lastSearch );
    
    // eslint-disable-next-line
    }, [ userScale ] );

    function resetData() {

        weatherContext.setWeather!( null );
        weatherContext.setForecast!( [] );
        setErrorMessages( [] );
    
    }

    function getUnitType() {

        return userScale === scalesEnum.Celsius ? 'metric' : 'imperial';
    }

    function getUnitOfMeasure() {

        return getUnitType() === 'metric' ? ' meters/sec' : ' miles/hour';
    }

    function toggleScaleHandler() {

        const next = userScale === scalesEnum.Celsius ? scalesEnum.Farenheit : scalesEnum.Celsius;
        setUserScale(next);
    }

    async function makeRequest( term: String ) {

        setIsLoading( true );
        resetData();

        try {

            let searchUrl = buildEndpoint( term, 'weather', getUnitType() );
            let response = await fetch( searchUrl );
            if ( !response.ok ) { throw response.status; }
            
            const weather = parseWeatherResponse( await response.json() , getUnitOfMeasure() );
            weatherContext.setWeather!( weather );

            weatherContext.setWeather!( weather );
            searchUrl = buildEndpoint( term, 'forecast', getUnitType() );
            response = await fetch( searchUrl );
            if ( !response.ok ) { throw response.status; }

            const forecast = parseForecastResponse( await response.json(), getUnitOfMeasure() );
            weatherContext.setForecast!( forecast );


        } catch ( error ) {

            setErrorMessages( parseError( '' + error ) );
        } finally {

            setIsLoading( false );
        }

    }

    function searchHandler( searchTerm : String ) {

        if ( !searchTerm || !searchTerm.length ) return

        weatherContext.setLastSearch!( searchTerm );

        makeRequest( searchTerm );
    }

    return (

        <section>
            <UnitContainer>
                <Button variant="outlined"
                        color="primary"
                        onClick={toggleScaleHandler} >
                    {scalesEnum[userScale]}
                </Button>
            </UnitContainer>
            <SearchField onSearch={searchHandler}/>
            
            { errorMessages.length > 0 && <ErrorMessage messages={errorMessages}/>}
            { weatherContext.weather && <CurrentWeather weather={weatherContext.weather} /> }
            { 
                weatherContext.forecast && 
                weatherContext.forecast.map( item => { return <WeatherForecast key={item.date} date={item.date} data={item.value} /> } ) }
            { isLoading && <Loading/>}

        </section>

    );
}


export const extractDate = (date : String) : String => {

    if ( !date || date.length < 19 ) return '';

    return date.substring(5,10).split('-').reverse().join('/');
    
}

export const extractTime = (date : String) : String => {

    if ( !date || date.length < 19 ) return '';

    return date.substring(11,16);

}


export const buildEndpoint = ( searchTerm: String, type: String, unit: String ) : string => {

    const key = process.env.REACT_APP_OPEN_WEATHER_KEY;
    const apiUrl = process.env.REACT_APP_OPEN_WEATHER_URL;


    return `${apiUrl}${type}?q=${searchTerm}&APPID=${key}&units=${unit}`;

}

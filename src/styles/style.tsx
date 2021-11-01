import styled from  'styled-components';

export const WidgetWrapper = styled.div`


    background: rgba(0,0,0,0.6);
    color: white;
    border-radius: 5px;
    width: 100%;
    max-width: 450px;
    margin: 1em auto;
    padding: 0 15px;
    
    @media(max-width: 500px) { 

        max-width: 300px;
    }

    @media(max-width: 340px) { 

        max-width: 250px;
    }
`;

export const SearchForm = styled(WidgetWrapper)`
    .search {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    button {
        margin: 0.5em;
        border-radius: 50%;
        border: none;
        height: 44px;
        width: 44px;
        outline: none;
        background: #7c7c7c2b;
        color: white;
        cursor: pointer;
        transition: 0.2s ease-in-out;
    }

    input.search-bar {
        border: none;
        outline: none;
        padding: 0.4em 1em;
        border-radius: 24px;
        background: #7c7c7c2b;
        color: white;
        font-family: inherit;
        font-size: 105%;
        width: calc(100% - 100px);
    }

    button:hover {
        background: #7c7c7c6b;
    }

`;

export const CurrentWeatherWidget = styled(WidgetWrapper)`
    padding: 15px;
    background:linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/img/weather-background.jpg');
    background-size:cover;
    h1.temp {
        margin: 0;
        margin-bottom: 0.4em;
    }

    .flex {
        display: flex;
        align-items: center;
    }

    .description {
        text-transform: capitalize;
        margin-left: 8px;
    }

`;  

export const ForecastWidget = styled.div`
    width:450px;
    background-color:#f5f5f5;
    border-radius:5px;
    padding:15px;
    margin: 1em auto;
`

export const CustomTooltip = styled.div`
   width:90px;
   text-align:center;
   background-color:white;
   border:1px solid #ccc;
   font-size:12px;
   border-radius: 3px;
   img {
       width:40px;
   }
`


export const LoadingElement = styled.div`
   margin-top:2em;
   color:#050505;
   text-align:center;
  
`
export const ContentWrapper = styled.div`

    max-width:480px;
    margin: 0 auto;
    
    @media(max-width: 500px) { 

        max-width: 330px;
    }

    @media(max-width: 340px) { 

        max-width: 280px;
    }

`;

export const UnitContainer = styled(ContentWrapper)`

    margin-top:5em;

`;

export const AboutWrapper = styled(UnitContainer)`

    text-align:center;
`;

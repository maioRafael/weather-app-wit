import { ForecastWidget } from "../styles/style";
import { LineChart, Line, YAxis,Tooltip, CartesianGrid, Legend, XAxis, TooltipProps, ResponsiveContainer } from "recharts";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";
import { ForecastData } from "../types/weather";
import { GraphTooltip } from "./GraphTooltip";

type Properties = {
    data: ForecastData[],
    date: string
}

const renderTooltip = ({ active, payload, label } : TooltipProps<ValueType, NameType> | any) => {

    if (active && payload.length && label) {

        const imgPath = `icons\\${payload[0].payload.icon}.png`;

        return (
            <GraphTooltip payload={payload[0].payload} imgPath={imgPath} />
        );

    }
    return null;
};


export const WeatherForecast = ( { data, date } : Properties ) => {

    return (
        <ForecastWidget >
            <h1>Forecast {date} - 3 hour</h1>
            <ResponsiveContainer width="90%" height={250}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="2 2" />
                    <XAxis dataKey="time" />
                    <YAxis dataKey="temp"/>
                    <Tooltip content={renderTooltip} />
                    <Legend />
                    <Line type="monotone" dataKey="temp" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </ForecastWidget>
    );

}
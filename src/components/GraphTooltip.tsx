import { CustomTooltip } from "../styles/style"

type Properties = {
    payload: {
        main: string,
        temp: string,
        speed: string,
        humidity: string
    },
    imgPath: string
}

export const GraphTooltip = ( { payload, imgPath } : Properties ) => {
    return <CustomTooltip>
        <p>{payload.main}</p>
        <img src={imgPath} alt={payload.main} />
        <p>Temp: {payload.temp}°</p>
        <p>Wind: {payload.speed}</p>
        <p>Humidity: {payload.humidity}</p>
    </CustomTooltip>
}
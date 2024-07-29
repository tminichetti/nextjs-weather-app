import { ForecastRootObject } from "@/interfaces/IForecast"
import { FeelsLike } from "./FeelsLike"
import { Humidity } from "./Humidity"
import { Pressure } from "./Pressure"
import { UVIndex } from "./UVIndex"
import { Visibility } from "./Visibility"
import { Wind } from "./Wind"
import { Sunset } from "./Sunset"
import { Precipitation } from "./Precipitation"

interface IWeatherWidgetsProps {
    forecast: ForecastRootObject;
}

export const WeatherWidgets = ({ forecast }: IWeatherWidgetsProps) => {

    return (
        <>
            <Wind speed={forecast.current.wind_kph} degree={forecast.current.wind_degree} />
            <UVIndex index={forecast.current.uv} />
            <FeelsLike temperature={Math.round(forecast.current.feelslike_c)} currentTemp={Math.round(forecast.current.temp_c)} />
            <Humidity percent={forecast.current.humidity} />
            <Visibility distance={forecast.current.vis_km} />
            <Pressure pressure={forecast.current.pressure_mb} />
            <Sunset astro={forecast.forecast.forecastday[0].astro} />
            <Precipitation rain={forecast.current.precip_mm} />
        </>
    )
}
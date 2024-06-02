import { FeelsLike } from "./FeelsLike"
import { Humidity } from "./Humidity"
import { Pressure } from "./Pressure"
import { UVIndex } from "./UVIndex"
import { Visibility } from "./Visibility"
import { Wind } from "./Wind"

export const WeatherWidgets = ({ data }: any) => {


    return (
        <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-full gap-4 lg:content-around">
            <Wind speed={data.current.wind_kph} degree={data.current.wind_degree} />
            <UVIndex index={data.current.uv} />
            <FeelsLike temperature={data.current.feelslike_c} />
            <Humidity percent={data.current.humidity} />
            <Visibility distance={data.current.vis_km} />
            <Pressure pressure={data.current.pressure_mb} />
        </section>
    )
}
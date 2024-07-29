import getForecastData from '@/actions/getForecastData';
import CurrentWeather from '@/components/widgets/CurrentWeather';
import Forecast from '@/components/widgets/Forecast';
import { WeatherWidgets } from '@/components/widgets/WeatherWidgets';
import { Metadata } from 'next';
import { ForecastRootObject } from '@/interfaces/IForecast';
import { Map } from '@/components/widgets/Map';

export async function generateMetadata({
    searchParams,
}: {
    searchParams: searchParamsProps
}): Promise<Metadata> {
    const { city } = searchParams

    return {
        title: `${city} - Weather Forecast`,
        description: `${city} weather forecast with current conditions, wind, air quality, and what to expect for the next 3 days.`,
    }
}

interface searchParamsProps {
    lat: string
    lon: string
    city: string
}

export default async function SearchPage(
    { searchParams }: { searchParams: searchParamsProps }
) {
    const forecast: ForecastRootObject = await getForecastData({
        latitude: Number(searchParams.lat),
        longitude: Number(searchParams.lon)
    })

    if (!searchParams || !forecast) return null

    return (
        <section className='flex flex-col gap-4 md:flex-row'>
            <div className='flex w-full min-w-[18rem] flex-col gap-4 md:w-1/2'>
                <CurrentWeather data={forecast} />
                <Forecast data={forecast.forecast.forecastday} />
            </div>
            <div className='grid h-full grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4'>
                <WeatherWidgets forecast={forecast} />
                {/* <Map /> */}
            </div>
        </section>
    );
}

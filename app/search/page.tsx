import getForecastData from '@/actions/getForecastData';
import CurrentWeather from '@/components/widgets/CurrentWeather';
import Forecast from '@/components/widgets/Forecast';
import { WeatherWidgets } from '@/components/widgets/WeatherWidgets';
import { Metadata } from 'next';

export async function generateMetadata({
    searchParams,
}: {
    searchParams: searchParamsProps
}): Promise<Metadata> {
    const { city } = searchParams

    return {
        title: `${city} - Weather Forecast`,
        description: `${city} weather forecast with current conditions, wind, air quality, and what to expect for the next 10 days.`,
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
    const forecast: any = await getForecastData({
        latitude: Number(searchParams.lat),
        longitude: Number(searchParams.lon)
    })

    if (!searchParams || !forecast) return null

    return (
        <section className='flex flex-col gap-4 lg:grid lg:grid-cols-4'>
            <CurrentWeather data={forecast} />
            <Forecast data={forecast.forecast.forecastday} />
            <div className='col-span-2 h-auto'>
                <WeatherWidgets data={forecast} />
            </div>
        </section>
    );
}

import getForecastData from '@/actions/getForecastData';
import CurrentWeather from '@/components/widgets/CurrentWeather';
import Forecast from '@/components/widgets/Forecast';
import HourlyWeather from '@/components/widgets/HourlyWeather';
import { WeatherWidgets } from '@/components/widgets/WeatherWidgets';
import { DEFAULT_LOCATION } from '@/lib/config';

export default async function Home() {

  const location = DEFAULT_LOCATION.coord;

  const forecast: any = await getForecastData({
    latitude: location.latitude,
    longitude: location.longitude
  })

  if (!location || !forecast) return null

  return (
    <section className='flex flex-col gap-4'>
      <CurrentWeather data={forecast} />
      <Forecast data={forecast.forecast.forecastday} />
      <WeatherWidgets data={forecast} />
    </section>
  );
}

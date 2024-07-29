import Image from "next/image";
import { Card } from "../ui/card";
import { Forecastday, Hour } from "@/interfaces/IForecast";

interface IHourlyWeatherProps {
    forecastday: Forecastday[];
}

export const HourlyWeather = ({ forecastday }: IHourlyWeatherProps) => {
    const hours = forecastday[0].hour.filter((hourlyWeather: Hour) => new Date(hourlyWeather.time).getHours() >= new Date().getHours());
    const utcDate = new Date();
    const utcMilliseconds = utcDate.getTime();
    const gmtPlus2Offset = 2 * 60 * 60 * 1000;
    const gmtPlus2Milliseconds = utcMilliseconds + gmtPlus2Offset;
    const gmtPlus2Date = new Date(gmtPlus2Milliseconds);

    return (
        <Card className="col-span-2 flex h-48 cursor-grab touch-auto touch-pan-x select-none scroll-px-0.5 flex-row items-center justify-between gap-12 overflow-hidden overscroll-contain scroll-smooth p-6 ring-offset-background transition-colors scrollbar-hide hover:overflow-x-auto focus:scroll-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            {hours.slice(0, 12).map((hourlyWeather: Hour, index: number) => {
                if (new Date(new Date(hourlyWeather.time).getTime() + gmtPlus2Offset) <= new Date(new Date(gmtPlus2Date).setHours(new Date().getHours() + 1)))
                    return null;

                return <div className="flex flex-col items-center w-[40px] min-h-full justify-between" key={hourlyWeather.time_epoch}>
                    <span>{index === 0 ? "Now" : `${hourlyWeather.time.split(' ')[1].split(':')[0]}h`}</span>
                    <Image
                        src={`https:${hourlyWeather.condition.icon}`}
                        alt="weather-icon"
                        width={64}
                        height={64}
                    />
                    <span>{Math.round(hourlyWeather.temp_c)}°</span>
                </div>
            })}
        </Card>
    );
};
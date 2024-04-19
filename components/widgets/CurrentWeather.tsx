import { capitalizeFirstLetter } from "@/lib/utils";
import { ArrowDown, ArrowUp, Navigation } from "lucide-react";
import Image from "next/image";
import { Card } from "../ui/card";
import Clock from "../ui/clock";

export default function CurrentWeather({ data }: any) {
    const initial = new Date();

    return (
        <Card className="min-h-[200px] flex flex-col justify-between h-fit w-full p-4 font-semibold text-lg">
            <div>
                <div className="flex justify-between">
                    <span>{capitalizeFirstLetter(initial.toLocaleString('fr-FR', { weekday: 'long' }))}</span>
                    <Clock initial={initial} timezone={initial.getTimezoneOffset()} />
                </div>
                <span className="flex">{data.location.name}<Navigation width={16} height={16} /></span>
            </div>

            <span className="flex justify-center text-8xl font-bold py-8">{data.current.temp_c}°</span>

            <Image src={`https:${data.forecast.forecastday[0].day.condition.icon}`} alt="weather-icon" width={32} height={32} />
            <span className="font-semibold text-base">{data.forecast.forecastday[0].day.condition.text}</span>

            <div className="flex gap-4 text-[#737373]">
                <div className="flex gap-1">
                    <ArrowUp className="w-[20px]" />
                    {Math.floor(data.forecast.forecastday[0].day.maxtemp_c)}°
                </div>
                <div className="flex gap-1">
                    <ArrowDown className="w-[20px]" />
                    {Math.floor(data.forecast.forecastday[0].day.mintemp_c)}°
                </div>
            </div>
        </Card>
    );
};
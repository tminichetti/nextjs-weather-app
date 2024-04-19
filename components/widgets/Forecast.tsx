import { ArrowDown, ArrowUp, Calendar } from "lucide-react";
import Image from "next/image";
import { Card } from "../ui/card";
import { capitalizeFirstLetter } from "@/lib/utils";
import { Progress } from "../ui/progress";

export default function Forecast({ data }: any) {

    const minTempForecast = Math.floor(Math.min(...data.map((day: any) => day.day.mintemp_c)));
    const maxTempForecast = Math.floor(Math.max(...data.map((day: any) => day.day.maxtemp_c)));
    const range = maxTempForecast - minTempForecast;

    return (
        <Card className="p-4 flex flex-col gap-2">
            <span className="flex gap-2"><Calendar width={16} />10-Day Forecast</span>

            <div className="flex flex-col gap-2">
                {data.map((day: any, index: number) => {
                    const minDayPercent = ((Math.floor(day.day.mintemp_c) - minTempForecast) / range) * 100;
                    const maxDayPercent = 100 - (((Math.floor(day.day.maxtemp_c) - minTempForecast) / range) * 100);

                    return <div className="flex justify-between w-full h-full items-center" key={day.date}>
                        <span>{index === 0 ? 'Today' : capitalizeFirstLetter(new Date(day.date).toLocaleString('fr-FR', { weekday: 'short' }))}</span>

                        <Image
                            src={`https:${day.day.condition.icon}`}
                            alt="weather-icon"
                            width={32}
                            height={32}
                        />

                        <div className="flex gap-2 w-[60%] items-center">
                            <span>{Math.floor(day.day.mintemp_c)}°</span>
                            <div className="flex w-full h-1.5 bg-primary/20 rounded-full grow max-w-[17rem]">
                                <div className='relative w-full h-1.5 rounded-full from-green-300 to-blue-400 bg-gradient-to-l' style={{ marginLeft: `${minDayPercent}%`, marginRight: `${maxDayPercent}%` }}></div>
                            </div>
                            <span>{Math.floor(day.day.maxtemp_c)}°</span>
                        </div>
                    </div>
                })}
            </div>

        </Card>
    );
};
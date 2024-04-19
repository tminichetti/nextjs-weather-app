import { ArrowDown, ArrowUp } from "lucide-react";
import Image from "next/image";
import { Card } from "../ui/card";

export default function HourlyWeather({ data }: any) {
    const utcDate = new Date();
    const utcMilliseconds = utcDate.getTime();
    const gmtPlus2Offset = 2 * 60 * 60 * 1000;
    const gmtPlus2Milliseconds = utcMilliseconds + gmtPlus2Offset;
    const gmtPlus2Date = new Date(gmtPlus2Milliseconds);

    return (
        <Card className="p-2 flex gap-2 overflow-x-scroll bg-[#0d65b0]/50 border-none">

            {data.map((hourlyWeather: any) => {
                if (new Date(new Date(hourlyWeather.time).getTime() + gmtPlus2Offset) <= new Date(new Date(gmtPlus2Date).setHours(new Date().getHours() + 1)))
                    return null;

                return <div className="flex flex-col items-center my-4 w-[40px] min-h-full justify-between" key={hourlyWeather.time_epoch}>
                    <span>{hourlyWeather.time.split(' ')[1].split(':')[0]}h</span>
                    <Image
                        src={`https:${hourlyWeather.condition.icon}`}
                        alt="weather-icon"
                        width={64}
                        height={64}
                    />
                    <span>{Math.floor(hourlyWeather.temp_c)}°</span>
                </div>
            })}

        </Card>
    );
};
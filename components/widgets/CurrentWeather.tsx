import { Card } from "../ui/card";
import Clock from "../ui/clock";

const getIconPath = (icon: string) => {
    return `https:${icon}`;
    // const iconSplited = icon.split("/");
    // const time = iconSplited[iconSplited.length - 2];
    // const number = iconSplited[iconSplited.length - 1];
    // return `../../public/icon/${time}/${number}`;
}

export default function CurrentWeather({ data, location }: any) {
    const initial = new Date();

    return (
        <Card className="p-2 min-h-[200px] flex flex-col justify-between">
            <div className="flex justify-between min-h-[64px]">
                <span>{initial.toLocaleString('en-US', { weekday: 'long' })}</span>
                <Clock initial={initial} timezone={initial.getTimezoneOffset()} />
            </div>

            <div className="flex justify-center text-7xl font-bold">
                {data.temp_c}°C
            </div>

            <div className="">
                <img src={getIconPath(data.condition.icon)} />
            </div>
        </Card>
    );
};
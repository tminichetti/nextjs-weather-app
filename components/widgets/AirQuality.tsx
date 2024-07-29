import { Sunset as SunsetIcon } from "lucide-react";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";

interface IAirQualityProps {
    pollution: number;
}

export const AirQuality = ({ pollution }: IAirQualityProps) => {
    const maxIndex = 6;
    const percent = pollution * 100 / maxIndex;
    const getFooterText = () => {
        switch (pollution) {
            case 1:
                return "Air quality is good.";
            case 2:
                return "Air quality is moderate.";
            case 3:
                return "Air quality is unhealthy for sensitive groups.";
            case 4:
                return "Air quality is unhealthy.";
            case 5:
                return "Air quality is very unhealthy.";
            case 6:
                return "Air quality is hazardous.";
            default:
                break;
        }
    };

    return (
        <Card className="flex h-48 flex-col justify-between col-span-2">
            <CardHeader>
                <CardTitle>
                    <SunsetIcon />Air pollution
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="w-full h-2.5 rounded-full mt-2" style={{ background: 'linear-gradient(90deg, rgb(58, 110, 180) 0%, rgb(126, 212, 87) 20%, rgb(248, 212, 73) 40%, rgb(235, 77, 96) 60%, rgb(180, 96, 231) 80%, rgb(178, 34, 34) 100%)' }}>
                    <div className="w-2.5 h-2.5 rounded-full bg-white border" style={{ marginLeft: `${percent}%` }}></div>
                </div>
            </CardContent>
            <CardFooter>
                {getFooterText()}
            </CardFooter>
        </Card>
    )
}
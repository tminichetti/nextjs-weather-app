import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Astro } from "@/interfaces/IForecast";
import { Sunset as SunsetIcon } from "lucide-react";

interface ISunsetProps {
    astro: Astro;
}

export const Sunset = ({ astro }: ISunsetProps) => {

    return (
        <Card className="flex h-48 flex-col justify-between">
            <CardHeader>
                <CardTitle>
                    <SunsetIcon />Sunset
                </CardTitle>
            </CardHeader>
            <CardContent>{astro.sunset}</CardContent>
            <CardFooter>
                {`Sunrise: ${astro.sunrise}`}
            </CardFooter>
        </Card>
    )
}
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Umbrella } from "lucide-react";

interface IPrecipitationProps {
    rain: number;
}

export const Precipitation = ({ rain }: IPrecipitationProps) => {
    const footerText = rain !== 0 ? rain <= 0.2 ? "Light rain or drizzle. An umbrella may come in handy." : rain <= 2.5 ? "Moderate rain." : "Heavy rain." : "Conditions are dry.";

    return (
        <Card className="flex h-48 flex-col justify-between">
            <CardHeader>
                <CardTitle>
                    <Umbrella />Precipitation
                </CardTitle>
            </CardHeader>
            <CardContent>{rain}mm <br></br>in the last 3h</CardContent>
            <CardFooter>
                {footerText}
            </CardFooter>
        </Card>
    )
}
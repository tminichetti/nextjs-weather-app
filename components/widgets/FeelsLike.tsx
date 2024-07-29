import { Thermometer } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"

export const FeelsLike = ({ temperature, currentTemp }: any) => {
    const footerText = temperature < currentTemp ? 'Feels colder than the actual temperature.' : temperature > currentTemp ? 'Feels warmer than the actual temperature.' : 'Feels like the actual temperature.'

    return (
        <Card className="flex h-48 flex-col justify-between">
            <CardHeader>
                <CardTitle>
                    <Thermometer className="w-[16px]" />Feels Like
                </CardTitle>
            </CardHeader>
            <CardContent>{temperature}°</CardContent>
            <CardFooter>
                {footerText}
            </CardFooter>
        </Card>
    )
}
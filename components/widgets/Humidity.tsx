import { Droplets } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"

export const Humidity = ({ percent }: any) => {
    const footerText = percent < 40 ? "Low humidity. It might feel dry." : percent < 70 ? "Moderate humidity. Comfortable conditions." : "High humidity. It might feel humid and uncomfortable.";

    return (
        <Card className="flex h-48 flex-col justify-between">
            <CardHeader>
                <CardTitle>
                    <Droplets className="w-[16px]" />Humidity
                </CardTitle>
            </CardHeader>
            <CardContent>{percent}%</CardContent>
            <CardFooter>
                {footerText}
            </CardFooter>
        </Card>
    )
}
import { Gauge } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"

export const Pressure = ({ pressure }: any) => {
    const footerText = pressure < 1000 ? "Low pressure. Expect changes in the weather." : pressure >= 1000 && pressure <= 1010 ? "Normal pressure. Typical weather conditions." : "High pressure. Expect stable and clear weather.";

    return (
        <Card className="flex h-48 flex-col justify-between">
            <CardHeader>
                <CardTitle>
                    <Gauge className="w-[16px]" />Pressure
                </CardTitle>
            </CardHeader>
            <CardContent>{pressure} hPa</CardContent>
            <CardFooter>
                {footerText}
            </CardFooter>
        </Card>
    )
}
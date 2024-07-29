import { Eye } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";

export const Visibility = ({ distance }: any) => {
    const footerText = distance >= 10 ? "It's perfectly clear right now." : distance >= 5 ? "Good visibility." : "Poor visibility. Exercise caution while driving or moving around.";

    return (
        <Card className="flex h-48 flex-col justify-between">
            <CardHeader>
                <CardTitle>
                    <Eye className="w-[16px]" />Visibility
                </CardTitle>
            </CardHeader>
            <CardContent>{distance} km</CardContent>
            <CardFooter>
                {footerText}
            </CardFooter>
        </Card>
    )
}
import { Droplets, Sun } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"

const CONFIG: { key: number, value: string }[] = [
    { key: 2, value: "Low" },
    { key: 5, value: "Moderate" },
    { key: 7, value: "High" },
    { key: 10, value: "Very High" },
    { key: 11, value: "Extreme" }
];

const getLabel = (index: number) => {
    let label = "Low";
    CONFIG.forEach((item) => {
        if (index >= item.key) {
            label = item.value;
        }
    });
    return label;
}

export const UVIndex = ({ index }: any) => {
    const maxIndex = 11;
    const percent = index * 100 / maxIndex;
    const footerText = index <= 2 ? "Low" : index <= 5 ? "Moderate" : index <= 7 ? "High" : "Very High";

    return (
        <Card className="flex h-48 flex-col justify-between">
            <CardHeader>
                <CardTitle>
                    <Sun className="w-[16px]" />UV Index
                </CardTitle>
            </CardHeader>
            <CardContent>
                <span className="font-semibold md:text-lg">{index}</span>
                <br />
                <span className="font-semibold md:text-lg">{getLabel(index)}</span>
                <div className="w-full h-2.5 rounded-full mt-2" style={{ background: 'linear-gradient(90deg, rgb(58, 110, 180) 0%, rgb(126, 212, 87) 20%, rgb(248, 212, 73) 40%, rgb(235, 77, 96) 60%, rgb(180, 96, 231) 80%, rgb(178, 34, 34) 100%)' }}>
                    <div className="w-2.5 h-2.5 rounded-full bg-white border" style={{ marginLeft: `${percent}%` }}></div>
                </div>
            </CardContent>
            <CardFooter>
                {footerText}
            </CardFooter>
        </Card>
    )
}
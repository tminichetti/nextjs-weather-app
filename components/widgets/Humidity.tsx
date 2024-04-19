import { Droplets } from "lucide-react"
import { Card } from "../ui/card"

export const Humidity = ({ percent }: any) => {
    return (
        <Card className="w-full p-4 h-48 justify-between">
            <span className="flex flex-row font-semibold text-sm text-neutral-600 dark:text-neutral-400 tracking-tight gap-2 mb-4"><Droplets className="w-[16px]" />Humidity</span>
            <span className="font-semibold md:text-lg">{percent}°</span>
        </Card>
    )
}
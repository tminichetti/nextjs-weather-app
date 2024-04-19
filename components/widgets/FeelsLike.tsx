import { Thermometer } from "lucide-react"
import { Card } from "../ui/card"

export const FeelsLike = ({ temperature }: any) => {
    return (
        <Card className="w-full p-4 h-48 justify-between">
            <span className="flex flex-row font-semibold text-sm text-neutral-600 dark:text-neutral-400 tracking-tight gap-2 mb-4"><Thermometer className="w-[16px]" />Feels Like</span>
            <span className="font-semibold md:text-lg">{temperature}°</span>
        </Card>
    )
}
import { Gauge } from "lucide-react"
import { Card } from "../ui/card"

export const Pressure = ({ pressure }: any) => {
    return (
        <Card className="w-full p-4 h-48 justify-between">
            <span className="flex flex-row items-center font-semibold text-sm text-neutral-600 dark:text-neutral-400 tracking-tight gap-2 mb-4"><Gauge className="w-[16px]" />Pressure</span>
            <span className="font-semibold md:text-lg">{pressure} hPa</span>
        </Card>
    )
}
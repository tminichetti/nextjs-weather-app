import { WindIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import Compass from "@/components/ui/compass";

export const Wind = ({ speed, degree }: any) => {

    return (
        <Card className="flex h-48 flex-col justify-between">
            <CardHeader>
                <CardTitle>
                    <WindIcon className="w-[16px]" />Wind
                </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center p-0">
                <Compass speed={speed} deg={degree} />
            </CardContent>
        </Card>
    )
}


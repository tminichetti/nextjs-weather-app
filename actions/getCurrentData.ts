const getCurrentData = async ({
    latitude,
    longitude
}: {
    latitude: number,
    longitude: number
}) => {
    const data = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=0308eed4e91a4101a55124543241704&q=${latitude},${longitude}&lang=fr`
    )

    if (!data.ok || data.status !== 200)
        throw new Error("Failed to fetch data")

    return data.json()
}

export default getCurrentData;
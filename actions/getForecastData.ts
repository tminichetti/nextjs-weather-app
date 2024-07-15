const getForecastData = async ({
    latitude,
    longitude
}: {
    latitude: number,
    longitude: number
}) => {
    const data = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${latitude},${longitude}&lang=en&days=10&aqi=yes&alerts=yes`
    )

    if (!data.ok || data.status !== 200)
        throw new Error("Failed to fetch data")

    return data.json()
}

export default getForecastData;
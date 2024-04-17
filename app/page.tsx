"use client"

import getWeatherData from '@/actions/getWeatherData';
import CurrentWeather from '@/components/widgets/CurrentWeather';
import { DEFAULT_LOCATION } from '@/lib/config';
import * as React from 'react';
import { useEffect, useState } from 'react';
import Map from 'react-map-gl';

export default async function Home() {

  const [location] = useState<{ latitude: number, longitude: number }>(DEFAULT_LOCATION.coord);

  // useEffect(() => {
  //   if ('geolocation' in navigator) {
  //     // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
  //     navigator.geolocation.getCurrentPosition(({ coords }) => {
  //       const { latitude, longitude } = coords;
  //       setLocation({ latitude, longitude });
  //     })
  //   }
  // }, [])

  const HourlyDataRequest: any = await getWeatherData({
    latitude: location.latitude,
    longitude: location.longitude
  })

  if (!location || !HourlyDataRequest) return null

  return (
    <div>
      <CurrentWeather data={HourlyDataRequest.current} location={HourlyDataRequest.location} />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useWeather } from "@/context/WeatherContext";
import { getWeatherCondition, isDayTime } from "@/services/weatherService";
import { getSeason, getBackgroundClass } from "@/utils/weatherBackgroundUtils";
import {
  AutumnParticles,
  CloudParticles,
  RainParticles,
  SnowParticles,
  SpringParticles,
  StarParticles,
  SummerParticles,
  WinterParticles,
} from "./WeatherParticles";

const WeatherBackground: React.FC = () => {
  const { currentWeather } = useWeather();
  const [season, setSeason] = useState<
    "winter" | "spring" | "summer" | "autumn" | null
  >(null);
  const [shouldRefresh, setShouldRefresh] = useState(0);

  useEffect(() => {
    if (!currentWeather) return;

    const currentDate = new Date();
    const currentSeason = getSeason(currentDate, currentWeather.coord.lat);
    setSeason(currentSeason);

    const intervalId = setInterval(() => {
      setShouldRefresh((prev) => prev + 1);
    }, 30000);

    return () => clearInterval(intervalId);
  }, [currentWeather]);

  if (!currentWeather) return null;

  const weatherCondition = currentWeather.weather[0]
    ? getWeatherCondition(currentWeather.weather[0].id)
    : "cloudy";

  const isDay = isDayTime(
    currentWeather.dt,
    currentWeather.sys.sunrise,
    currentWeather.sys.sunset
  );

  const bgClass = getBackgroundClass(weatherCondition, isDay, season);

  return (
    <div
      className={`fixed inset-0 w-full h-full transition-all duration-1000 ${bgClass} bg-cover bg-center bg-no-repeat -z-10 overflow-hidden`}
    >
      <div className="absolute inset-0 bg-black/20 backdrop-filter backdrop-blur-sm"></div>

      {weatherCondition === "rainy" && (
        <RainParticles key={`rain-${shouldRefresh}`} />
      )}
      {weatherCondition === "snowy" && (
        <SnowParticles key={`snow-${shouldRefresh}`} />
      )}
      {(weatherCondition === "cloudy" || weatherCondition === "stormy") && (
        <CloudParticles
          key={`cloud-${shouldRefresh}`}
          isStormy={weatherCondition === "stormy"}
        />
      )}
      {!isDay && <StarParticles key={`star-${shouldRefresh}`} />}

      {season === "autumn" && (
        <AutumnParticles key={`autumn-${shouldRefresh}`} />
      )}
      {season === "spring" && (
        <SpringParticles
          key={`spring-${shouldRefresh}`}
          includeRain={weatherCondition !== "rainy"}
        />
      )}
      {season === "summer" && (
        <SummerParticles key={`summer-${shouldRefresh}`} />
      )}
      {season === "winter" && weatherCondition !== "snowy" && (
        <WinterParticles key={`winter-${shouldRefresh}`} />
      )}
    </div>
  );
};

export default WeatherBackground;

import React from "react";
import { useWeather } from "@/context/WeatherContext";
import {
  formatDate,
  formatTime,
  getWeatherIconUrl,
} from "@/services/weatherService";
import { Droplets, Sun, Thermometer, Wind } from "lucide-react";
import { Card, CardContent } from "@/Components/ui/card";

const CurrentWeather: React.FC = () => {
  const { currentWeather, isLoading, units } = useWeather();

  if (isLoading) {
    return (
      <Card className="weather-card animate-pulse">
        <CardContent className="p-6">
          <div className="h-8 bg-white/20 rounded w-1/2 mb-4"></div>
          <div className="h-16 bg-white/20 rounded w-1/3 mb-2"></div>
          <div className="h-4 bg-white/20 rounded w-3/4 mb-4"></div>
          <div className="flex gap-4">
            <div className="h-8 bg-white/20 rounded w-1/4"></div>
            <div className="h-8 bg-white/20 rounded w-1/4"></div>
            <div className="h-8 bg-white/20 rounded w-1/4"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!currentWeather) {
    return null;
  }

  const {
    name,
    main: { temp, feels_like, humidity },
    weather,
    wind,
    sys,
    dt,
    timezone,
  } = currentWeather;

  const tempUnit = units === "metric" ? "°C" : "°F";
  const windSpeedUnit = units === "metric" ? "м/с" : "миль/ч";
  const weatherIcon = weather[0]?.icon || "01d";
  const weatherDescription = weather[0]?.description || "";
  const iconUrl = getWeatherIconUrl(weatherIcon);

  return (
    <Card className="glass-card overflow-hidden animate-fade-in">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-3xl font-bold text-white">{name}</h2>
            <p className="text-sm text-white/80">
              {formatDate(dt, timezone)}, {formatTime(dt, timezone)}
            </p>
            <div className="mt-4 flex items-center justify-center md:justify-start">
              <div className="bg-white/20 rounded-full p-2">
                <Thermometer className="h-5 w-5 text-white" />
              </div>
              <span className="ml-2 text-6xl font-bold text-white">
                {Math.round(temp)}
                {tempUnit}
              </span>
            </div>
            <p className="text-white/80 mt-1">
              Ощущается как {Math.round(feels_like)}
              {tempUnit}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={iconUrl}
              alt={weatherDescription}
              className="w-32 h-32 object-contain"
            />
            <p className="text-lg capitalize text-white mt-2">
              {weatherDescription}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-white/10 p-3 rounded-lg text-center">
            <Droplets className="mx-auto h-6 w-6 text-blue-200 mb-1" />
            <p className="text-sm text-white/80">Влажность</p>
            <p className="text-lg font-semibold text-white">{humidity}%</p>
          </div>

          <div className="bg-white/10 p-3 rounded-lg text-center">
            <Wind className="mx-auto h-6 w-6 text-blue-200 mb-1" />
            <p className="text-sm text-white/80">Ветер</p>
            <p className="text-lg font-semibold text-white">
              {Math.round(wind.speed)} {windSpeedUnit}
            </p>
          </div>

          <div className="bg-white/10 p-3 rounded-lg text-center">
            <Sun className="mx-auto h-6 w-6 text-yellow-200 mb-1" />
            <p className="text-sm text-white/80">Восход</p>
            <p className="text-lg font-semibold text-white">
              {formatTime(sys.sunrise, timezone)}
            </p>
          </div>

          <div className="bg-white/10 p-3 rounded-lg text-center">
            <Sun className="mx-auto h-6 w-6 text-orange-200 mb-1" />
            <p className="text-sm text-white/80">Закат</p>
            <p className="text-lg font-semibold text-white">
              {formatTime(sys.sunset, timezone)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;

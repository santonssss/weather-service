import React from "react";
import { useWeather } from "@/context/WeatherContext";
import { Card, CardContent } from "@/Components/ui/card";
import {
  formatDate,
  getWeatherIconUrl,
  groupForecastByDays,
} from "@/services/weatherService";

const Forecast: React.FC = () => {
  const { forecast, isLoading, units } = useWeather();

  if (isLoading) {
    return (
      <Card className="weather-card animate-pulse">
        <CardContent className="p-6">
          <div className="h-6 bg-white/20 rounded w-1/4 mb-4"></div>
          <div className="grid grid-cols-5 gap-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-24 bg-white/20 rounded"></div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!forecast) {
    return null;
  }

  const dailyForecasts = groupForecastByDays(forecast);
  const tempUnit = units === "metric" ? "°C" : "°F";

  return (
    <Card className="glass-card overflow-hidden animate-fade-in">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-white mb-4">
          Прогноз на 5 дней
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {dailyForecasts.map(({ date, forecast }) => {
            const formattedDate = formatDate(new Date(date).getTime() / 1000);
            const icon = forecast.weather[0]?.icon || "01d";
            const temp = Math.round(forecast.main.temp);
            const description = forecast.weather[0]?.description || "";

            return (
              <div
                key={date}
                className="bg-white/10 p-3 rounded-lg text-center flex flex-col items-center animate-slide-up"
                style={{
                  animationDelay: `${
                    dailyForecasts.findIndex((d) => d.date === date) * 0.1
                  }s`,
                }}
              >
                <p className="text-sm font-medium text-white mb-2">
                  {formattedDate}
                </p>
                <img
                  src={getWeatherIconUrl(icon, "2x")}
                  alt={description}
                  className="w-14 h-14 object-contain"
                />
                <p className="text-lg font-bold text-white mt-1">
                  {temp}
                  {tempUnit}
                </p>
                <p className="text-xs text-white/80 capitalize">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default Forecast;

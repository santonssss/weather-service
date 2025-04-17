import React from "react";
import { useWeather } from "@/context/WeatherContext";
import { formatTime, getWeatherIconUrl } from "@/services/weatherService";
import { Card, CardContent } from "@/Components/ui/card";
import { ScrollArea } from "@/Components/ui/scroll-area";

const HourlyForecast: React.FC = () => {
  const { forecast, isLoading, units } = useWeather();

  if (isLoading) {
    return (
      <Card className="weather-card animate-pulse">
        <CardContent className="p-6">
          <div className="h-6 bg-white/20 rounded w-1/4 mb-4"></div>
          <div className="flex gap-4 overflow-x-auto">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-20 h-24 bg-white/20 rounded"
              ></div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!forecast) {
    return null;
  }

  // Get next 24 hours of forecast (8 items, 3 hours each)
  const hourlyData = forecast.list.slice(0, 8);
  const tempUnit = units === "metric" ? "°C" : "°F";

  return (
    <Card className="glass-card overflow-hidden animate-fade-in">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-white mb-4">
          Почасовой прогноз
        </h3>

        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex gap-4">
            {hourlyData.map((item, index) => {
              const time = formatTime(
                new Date(item.dt_txt).getTime() / 1000,
                forecast.city.timezone
              );
              const icon = item.weather[0]?.icon || "01d";
              const temp = Math.round(item.main.temp);

              return (
                <div
                  key={item.dt}
                  className="flex-shrink-0 bg-white/10 p-3 rounded-lg text-center flex flex-col items-center animate-slide-up"
                  style={{
                    minWidth: "80px",
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <p className="text-sm font-medium text-white mb-1">{time}</p>
                  <img
                    src={getWeatherIconUrl(icon, "2x")}
                    alt={item.weather[0]?.description}
                    className="w-10 h-10 object-contain"
                  />
                  <p className="text-lg font-bold text-white mt-1">
                    {temp}
                    {tempUnit}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default HourlyForecast;

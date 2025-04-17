import React from "react";
import { WeatherProvider } from "@/context/WeatherContext";
import CurrentWeather from "@/Components/CurrentWeather";
import Forecast from "@/Components/Forecast";
import SearchLocation from "@/Components/SearchLocation";
import HourlyForecast from "@/Components/HourlyForecast";
import WeatherBackground from "@/Components/WeatherBackground";

const Index: React.FC = () => {
  return (
    <WeatherProvider>
      <div className="min-h-screen relative overflow-x-hidden">
        <WeatherBackground />

        <div className="container mx-auto px-4 py-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-center text-white mb-2 animate-fade-in">
              Погодный сервис
            </h1>
            <p
              className="text-center text-white/80 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Актуальная информация о погоде по всему миру
            </p>
          </header>

          <div className="space-y-6 max-w-4xl mx-auto">
            <SearchLocation />
            <CurrentWeather />
            <HourlyForecast />
            <Forecast />
          </div>

          <footer className="mt-12 text-center text-white/60 text-sm">
            <p>Данные предоставлены OpenWeatherMap API</p>
          </footer>
        </div>
      </div>
    </WeatherProvider>
  );
};

export default Index;

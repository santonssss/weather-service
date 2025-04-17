import React, { useState } from "react";
import { useWeather } from "@/context/WeatherContext";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import { Search, RefreshCw } from "lucide-react";
import { Switch } from "@/Components/ui/switch";
import { Label } from "@/Components/ui/label";

const SearchLocation: React.FC = () => {
  const { searchLocation, isLoading, location, refresh, units, setUnits } =
    useWeather();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      searchLocation(searchTerm);
      setSearchTerm("");
    }
  };

  const handleRefresh = () => {
    refresh();
  };

  const toggleUnits = () => {
    setUnits(units === "metric" ? "imperial" : "metric");
  };

  return (
    <Card className="glass-card overflow-hidden animate-fade-in">
      <CardContent className="p-4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-2"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-4 w-4" />
            <Input
              type="text"
              placeholder="Введите название города..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <Button
            type="submit"
            variant="secondary"
            disabled={isLoading || !searchTerm.trim()}
            className="bg-white/20 hover:bg-white/30 text-white"
          >
            {isLoading ? "Поиск..." : "Найти"}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={handleRefresh}
            disabled={isLoading || !location}
            className="bg-transparent border-white/20 text-white hover:bg-white/10"
          >
            <RefreshCw
              className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`}
            />
          </Button>
        </form>

        <div className="flex items-center justify-end mt-3">
          <div className="flex items-center space-x-2">
            <Label htmlFor="units" className="text-white text-sm">
              °C
            </Label>
            <Switch
              id="units"
              checked={units === "imperial"}
              onCheckedChange={toggleUnits}
            />
            <Label htmlFor="units" className="text-white text-sm">
              °F
            </Label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchLocation;

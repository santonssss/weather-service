interface GeocodeResponse {
  name: string;
  local_names?: Record<string, string>;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

export interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  rain?: {
    "1h"?: number;
    "3h"?: number;
  };
  snow?: {
    "1h"?: number;
    "3h"?: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type?: number;
    id?: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface ForecastData {
  cod: string;
  message: number;
  cnt: number;
  list: {
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
    };
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    visibility: number;
    pop: number;
    rain?: {
      "3h": number;
    };
    snow?: {
      "3h": number;
    };
    sys: {
      pod: string;
    };
    dt_txt: string;
  }[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}
const API_KEY: string = import.meta.env.VITE_API_KEY;
const BASE_URL: string = import.meta.env.VITE_BASE_URL;

export const getCoordinatesByLocationName = async (
  location: string
): Promise<GeocodeResponse[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/geo/1.0/direct?q=${encodeURIComponent(
        location
      )}&limit=5&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    throw error;
  }
};

export const getCurrentWeather = async (
  lat: number,
  lon: number,
  units: string = "metric"
): Promise<WeatherData> => {
  try {
    const response = await fetch(
      `${BASE_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching current weather:", error);
    throw error;
  }
};

export const getForecast = async (
  lat: number,
  lon: number,
  units: string = "metric"
): Promise<ForecastData> => {
  try {
    const response = await fetch(
      `${BASE_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching forecast:", error);
    throw error;
  }
};

export const getWeatherIconUrl = (
  iconCode: string,
  size: "2x" | "4x" = "4x"
): string => {
  return `https://openweathermap.org/img/wn/${iconCode}@${size}.png`;
};

export const formatDate = (timestamp: number, timezone: number = 0): string => {
  const date = new Date((timestamp + timezone) * 1000);
  return date.toLocaleDateString("ru-RU", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
};

export const formatTime = (timestamp: number, timezone: number = 0): string => {
  const date = new Date((timestamp + timezone) * 1000);
  return date.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const isDayTime = (
  dt: number,
  sunrise: number,
  sunset: number
): boolean => {
  return dt > sunrise && dt < sunset;
};

// Group forecast by days
export const groupForecastByDays = (forecastData: ForecastData) => {
  const dailyForecasts: Record<string, ForecastData["list"][0][]> = {};

  forecastData.list.forEach((item) => {
    const date = new Date(item.dt * 1000).toISOString().split("T")[0];

    if (!dailyForecasts[date]) {
      dailyForecasts[date] = [];
    }

    dailyForecasts[date].push(item);
  });

  return Object.entries(dailyForecasts)
    .map(([date, items]) => {
      // Find the day forecast (around noon) for display
      const dayForecast =
        items.find((item) => {
          const hour = new Date(item.dt * 1000).getHours();
          return hour >= 12 && hour <= 15;
        }) || items[0];

      return {
        date,
        forecast: dayForecast,
        items,
      };
    })
    .slice(0, 5); // Limit to 5 days
};

export const getWeatherCondition = (
  weatherId: number
): "sunny" | "cloudy" | "rainy" | "snowy" | "stormy" => {
  if (weatherId >= 200 && weatherId < 300) {
    return "stormy";
  } else if (weatherId >= 300 && weatherId < 600) {
    return "rainy";
  } else if (weatherId >= 600 && weatherId < 700) {
    return "snowy";
  } else if (weatherId >= 700 && weatherId < 800) {
    return "cloudy";
  } else if (weatherId === 800) {
    return "sunny";
  } else {
    return "cloudy";
  }
};

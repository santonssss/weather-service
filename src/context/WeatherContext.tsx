import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from "react";
import {
  getCurrentWeather,
  getForecast,
  getCoordinatesByLocationName,
  type WeatherData,
  type ForecastData,
} from "../services/weatherService";
import toast from "react-hot-toast";
interface WeatherContextType {
  currentWeather: WeatherData | null;
  forecast: ForecastData | null;
  isLoading: boolean;
  error: string | null;
  location: {
    name: string;
    lat: number;
    lon: number;
  } | null;
  units: "metric" | "imperial";
  searchLocation: (location: string) => Promise<void>;
  setUnits: (units: "metric" | "imperial") => void;
  refresh: () => Promise<void>;
}

interface WeatherState {
  currentWeather: WeatherData | null;
  forecast: ForecastData | null;
  isLoading: boolean;
  error: string | null;
  location: {
    name: string;
    lat: number;
    lon: number;
  } | null;
  units: "metric" | "imperial";
}

type WeatherAction =
  | { type: "FETCH_START" }
  | {
      type: "FETCH_SUCCESS";
      payload: { currentWeather: WeatherData; forecast: ForecastData };
    }
  | { type: "FETCH_ERROR"; payload: string }
  | {
      type: "SET_LOCATION";
      payload: { name: string; lat: number; lon: number };
    }
  | { type: "SET_UNITS"; payload: "metric" | "imperial" };

const initialState: WeatherState = {
  currentWeather: null,
  forecast: null,
  isLoading: false,
  error: null,
  location: null,
  units: "metric",
};

const weatherReducer = (
  state: WeatherState,
  action: WeatherAction
): WeatherState => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, isLoading: true, error: null };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        currentWeather: action.payload.currentWeather,
        forecast: action.payload.forecast,
      };
    case "FETCH_ERROR":
      return { ...state, isLoading: false, error: action.payload };
    case "SET_LOCATION":
      return { ...state, location: action.payload };
    case "SET_UNITS":
      return { ...state, units: action.payload };
    default:
      return state;
  }
};

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  const fetchWeatherData = async (
    lat: number,
    lon: number,
    units: "metric" | "imperial"
  ) => {
    try {
      dispatch({ type: "FETCH_START" });

      const [currentWeather, forecast] = await Promise.all([
        getCurrentWeather(lat, lon, units),
        getForecast(lat, lon, units),
      ]);

      dispatch({
        type: "FETCH_SUCCESS",
        payload: { currentWeather, forecast },
      });
    } catch (error) {
      dispatch({
        type: "FETCH_ERROR",
        payload:
          error instanceof Error
            ? error.message
            : "Failed to fetch weather data",
      });

      toast.error("Не удалось загрузить данные о погоде");
    }
  };

  const searchLocation = async (locationName: string) => {
    try {
      dispatch({ type: "FETCH_START" });

      const locations = await getCoordinatesByLocationName(locationName);

      if (locations.length === 0) {
        dispatch({
          type: "FETCH_ERROR",
          payload: "Location not found",
        });

        toast.error(
          "Местоположение не найдено. Попробуйте ввести другой город или место."
        );
        return;
      }

      const { name, lat, lon, country } = locations[0];

      dispatch({
        type: "SET_LOCATION",
        payload: { name: `${name}, ${country}`, lat, lon },
      });

      await fetchWeatherData(lat, lon, state.units);

      localStorage.setItem(
        "weatherLocation",
        JSON.stringify({ name: `${name}, ${country}`, lat, lon })
      );
    } catch (error) {
      dispatch({
        type: "FETCH_ERROR",
        payload:
          error instanceof Error ? error.message : "Failed to search location",
      });

      toast.error("Ошибка: Не удалось найти указанное местоположение");
    }
  };

  const setUnits = (units: "metric" | "imperial") => {
    dispatch({ type: "SET_UNITS", payload: units });
    localStorage.setItem("weatherUnits", units);

    if (state.location) {
      fetchWeatherData(state.location.lat, state.location.lon, units);
    }
  };

  const refresh = async () => {
    if (state.location) {
      await fetchWeatherData(
        state.location.lat,
        state.location.lon,
        state.units
      );

      toast.success("Данные о погоде успешно обновлены");
    }
  };

  useEffect(() => {
    const savedLocation = localStorage.getItem("weatherLocation");
    const savedUnits = localStorage.getItem("weatherUnits");

    if (savedUnits === "metric" || savedUnits === "imperial") {
      dispatch({ type: "SET_UNITS", payload: savedUnits });
    }

    const loadData = async () => {
      if (savedLocation) {
        const location = JSON.parse(savedLocation);
        dispatch({ type: "SET_LOCATION", payload: location });
        await fetchWeatherData(location.lat, location.lon, state.units);
      } else {
        searchLocation("Moscow").catch(console.error);
      }
    };

    loadData();

    const intervalId = setInterval(() => {
      refresh();
    }, 30 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        ...state,
        searchLocation,
        setUnits,
        refresh,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = (): WeatherContextType => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
};

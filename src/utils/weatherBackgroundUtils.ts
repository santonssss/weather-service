export const getSeason = (
  date: Date,
  lat: number
): "winter" | "spring" | "summer" | "autumn" => {
  const isNorthernHemisphere = lat >= 0;

  const month = date.getMonth();

  if (isNorthernHemisphere) {
    if (month >= 2 && month <= 4) return "spring";
    if (month >= 5 && month <= 7) return "summer";
    if (month >= 8 && month <= 10) return "autumn";
    return "winter";
  } else {
    if (month >= 2 && month <= 4) return "autumn";
    if (month >= 5 && month <= 7) return "winter";
    if (month >= 8 && month <= 10) return "spring";
    return "summer";
  }
};

export const getBackgroundClass = (
  weatherCondition: "sunny" | "cloudy" | "rainy" | "snowy" | "stormy",
  isDay: boolean,
  season: "winter" | "spring" | "summer" | "autumn" | null
): string => {
  let bgClass = `bg-${weatherCondition}`;

  if (!isDay) {
    bgClass = "bg-night";
  } else if (season) {
    if (weatherCondition === "sunny" || weatherCondition === "cloudy") {
      switch (season) {
        case "winter":
          bgClass = "bg-winter";
          break;
        case "spring":
          bgClass = "bg-spring";
          break;
        case "summer":
          bgClass = "bg-summer";
          break;
        case "autumn":
          bgClass = "bg-autumn";
          break;
      }
    }
  }

  return bgClass;
};

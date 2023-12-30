export interface IForecastToFourDays {
  climate: string;
  forecast: IForecast;
}

interface IForecast {
  forecast: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
}
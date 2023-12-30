export interface IForecastToFourDays {
  climate: string;
  region: string;
  country: string;
  forecast: IForecast;
}

interface IForecast {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
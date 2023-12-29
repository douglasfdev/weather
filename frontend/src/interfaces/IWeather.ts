export interface IWeather {
  description: Array<Description>;
  temperature: Temperature;
  sunrise: string;
  sunset: string;
  country: string;
  name: string;
  currentHour: string;
  json(): Promise<IWeather>
}

export interface Description {
  main: string;
  description: string;
}

export interface Temperature {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
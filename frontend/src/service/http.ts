import { IWeather } from '../interfaces/IWeather.ts';
export interface IUrlWeatherByLocation {
  endpoint: string;
}

export async function getWeatherByLocation<T>({ endpoint, lat, lon }: IUrlWeatherByLocation) {
  return await fetch(`http://localhost:8001/${endpoint}`) as T;
};

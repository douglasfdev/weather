export interface IUrlWeatherByLocation {
  endpoint: string;
}

export async function getWeatherByLocation({ endpoint }: IUrlWeatherByLocation) {
  return await fetch(`http://localhost:8001/${endpoint}`);
};

interface IUrlWeatherByLocation {
  endpoint: string;
  lat: number;
  lon: number;
}

export const getWeatherByLocation = async ({ endpoint, lat, lon }: IUrlWeatherByLocation) => {
  return await fetch(`http://localhost:8001/${endpoint}?lat=${lat}&lon=${lon}`)
};

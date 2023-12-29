import { RequestAxiosIpInfoHttp } from "../components/RequestAxiosIpInfo.js";
import { RequestAxiosWeatherHttp } from "../components/RequestAxiosWeatherHttp.js";

export class WeatherService {
  fahrenheitToCelsius = 273.15;
  async getLocation() {
    const { loc } = await new RequestAxiosIpInfoHttp().getIp(
      "json"
    );

    const [ latitude, longitude ] = loc.split(",");

    const {
      weather,
      main: {
        pressure,
        humidity,
        temp,
        feels_like,
        temp_min,
        temp_max
      },
      sys,
      name
    } = await new RequestAxiosWeatherHttp().getWeather(`weather`, { lat: latitude, lon: longitude });

    const description = weather.map(w => ({
      main: w.main,
      description: w.description
    }));

    const actualTemperatureToCelsius = temp - this.fahrenheitToCelsius;
    const feelsLikeTemperatureToCelsius = feels_like - this.fahrenheitToCelsius;
    const minimumTemperatureToCelsius = temp_min - this.fahrenheitToCelsius;
    const maximumTemperatureToCelsius = temp_max - this.fahrenheitToCelsius;

    return {
      description,
      temperature: {
        temp: Math.ceil(actualTemperatureToCelsius.toFixed(2)),
        feels_like: Math.ceil(feelsLikeTemperatureToCelsius.toFixed(2)),
        temp_min: Math.ceil(minimumTemperatureToCelsius.toFixed(2)),
        temp_max: Math.ceil(maximumTemperatureToCelsius.toFixed(2)),
        pressure,
        humidity
      },
      sunrise: Intl.DateTimeFormat("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }).format(sys.sunrise * 1000),
      sunset: Intl.DateTimeFormat("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }).format(sys.sunset * 1000),
      country: sys.country,
      name,
      currentHour: Intl.DateTimeFormat("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(new Date()),
    };
  }
}
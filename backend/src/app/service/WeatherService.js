import { RequestAxiosIpInfoHttp } from "../components/RequestAxiosIpInfo.js";
import { RequestAxiosWeatherHttp } from "../components/RequestAxiosWeatherHttp.js";

export class WeatherService {
  fahrenheitToCelsius = 273.15;

  async getLocation() {
    const { loc } = await new RequestAxiosIpInfoHttp().getIp(
      "json"
    );

    const [ lat, lon ] = loc.split(",");

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
    } = await new RequestAxiosWeatherHttp().getWeather(`weather`, { lat, lon });

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

  async getWeatherToFourDays() {
      const { loc, region, country } = await new RequestAxiosIpInfoHttp().getIp("json");

      const [ lat, lon ] = loc.split(",");

      const { list } = await new RequestAxiosWeatherHttp().getWeather(`forecast`, { lat, lon });

      return list?.map(l => {
        const {
          main : {
            temp,
            feels_like,
            temp_min,
            temp_max,
            pressure,
            humidity,
          },
          weather,
        } = l;

        const actualTemperatureToCelsius = temp - this.fahrenheitToCelsius;
        const feelsLikeTemperatureToCelsius = feels_like - this.fahrenheitToCelsius;
        const minimumTemperatureToCelsius = temp_min - this.fahrenheitToCelsius;
        const maximumTemperatureToCelsius = temp_max - this.fahrenheitToCelsius;

        const [climate] = weather.map(w => w.description);

        return {
          climate: `${climate.charAt(0).toUpperCase()}${climate.slice(1)}`,
          region,
          country,
          forecast: {
            temp: Math.ceil(actualTemperatureToCelsius.toFixed(2)),
            feels_like: Math.ceil(feelsLikeTemperatureToCelsius.toFixed(2)),
            temp_min: Math.ceil(minimumTemperatureToCelsius.toFixed(2)),
            temp_max: Math.ceil(maximumTemperatureToCelsius.toFixed(2)),
            pressure,
            humidity
          }
        }
      });
  }
}
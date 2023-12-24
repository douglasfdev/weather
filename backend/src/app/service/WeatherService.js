import { RequestAxiosHttp } from "../components/RequestAxiosHttp.js";
// import xpto from "../../../xpto.json" assert { type : 'json' };

export class WeatherService {
  fahrenheitToCelsius = 273.15;
  async getLocation({ lat, lon }) {
    const { weather, main, sys, name } = await new RequestAxiosHttp().get(`weather`, { lat, lon });

    const description = weather.map(w => ({
      main: w.main,
      description: w.description
    }));

    const actualTemperatureToCelsius = main.temp - this.fahrenheitToCelsius;
    const feelsLikeTemperatureToCelsius = main.feels_like - this.fahrenheitToCelsius;
    const minimumTemperatureToCelsius = main.temp_min - this.fahrenheitToCelsius;
    const maximumTemperatureToCelsius = main.temp_max - this.fahrenheitToCelsius;
    const airPressure = main.pressure;
    const humidity = main.humidity;

    return {
      description,
      temperature: {
        temp: Math.ceil(actualTemperatureToCelsius.toFixed(2)),
        feels_like: Math.ceil(feelsLikeTemperatureToCelsius.toFixed(2)),
        temp_min: Math.ceil(minimumTemperatureToCelsius.toFixed(2)),
        temp_max: Math.ceil(maximumTemperatureToCelsius.toFixed(2)),
        pressure: airPressure,
        humidity: humidity
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
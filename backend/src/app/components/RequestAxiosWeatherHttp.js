import axios from 'axios';
import { env } from "../../common/configs/env.config.js";

export class RequestAxiosWeatherHttp {
  constructor() {
    this.http = axios.create({
      baseURL: env.parsed.WEATHER_URL,
    });
  }

  async getWeather(url, params) {
    try {
      const get = await this.http.get(url, {
        params: {
          ...params,
          appid: env.parsed.WEATHER_API_KEY,
          lang: 'pt_br'
        },
      });

      return get.data
    } catch (e) {
      console.log(e.response)
    }
  }
};

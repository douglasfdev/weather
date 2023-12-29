import axios from 'axios';
import { env } from "../../common/configs/env.config.js";

export class RequestAxiosGeocodeHttp {
  constructor() {
    this.http = axios.create({
      baseURL: env.parsed.HEREGEOCODE_URL,
    });
  }

  async getGeocode(url, params) {
    try {
      const get = await this.http.get(url, {
        params: {
          ...params,
          apiKey: env.parsed.HEREGEOCODE_API_KEY,
        },
      });

      return get.data
    } catch (e) {
      console.log(e.response)
    }
  }
};

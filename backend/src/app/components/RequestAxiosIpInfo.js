import axios from "axios";
import { env } from "../../common/configs/env.config.js";

export class RequestAxiosIpInfoHttp {
  constructor() {
    this.http = axios.create({
      baseURL: env.parsed.IPINFO_URL
    });
  }

  async getIp(url) {
    try {
      const get = await this.http.get(url, {
        params: {
          token: env.parsed.IPINFO_API_KEY,
        },
      });

      return get.data;
    } catch (e) {
      console.log(e.response);
    }
  }
}

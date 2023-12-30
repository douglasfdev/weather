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
      const { data } = await this.http.get(url, {
        params: {
          token: env.IPINFO_API_KEY,
        },
      });

      return data;
    } catch (e) {
      console.log(e.response.error);
    }
  }
}

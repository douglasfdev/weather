import { RequestAxiosGeocodeHttp } from "../components/RequestAxiosGeocodeHttp.js";
import { RequestAxiosIpInfoHttp } from "../components/RequestAxiosIpInfo.js";

export class GeocodeService {
  async getLocalization({ at, search }) {
    const { items } = await new RequestAxiosGeocodeHttp()
      .getGeocode("discover", { at, q: search });

    const { ip, city, region, country } = await new RequestAxiosIpInfoHttp().getIp("json")

    return {
      items,
      ip,
      city,
      region,
      country
    }
  }
}
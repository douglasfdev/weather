import { RequestAxiosIpInfoHttp } from "../components/RequestAxiosIpInfo.js";

export class GeocodeService {
  async getLocalization() {
    const { ip, city, region, country, loc } = await new RequestAxiosIpInfoHttp().getIp("json")

    const splitLoc = loc.split(",");
    const [ lat, lon ] = splitLoc;

    return {
      ip,
      city,
      region,
      country,
      lat,
      lon,
    }
  }
}
import { WeatherService } from "../service/WeatherService.js";

class WeatherController {
  /**
   *
   * @param {Request} req
   * @param {Response} res
   * @returns json
   */
  async getWeatherByLocation(_req, res) {
    const getLatLon = await new WeatherService().getLocation();

    return res.status(200).json(getLatLon);
  }

  /**
   *
   * @param {Request} req
   * @param {Response} res
   * @returns json
   */
  async insertLatLonByLocation(req, res) {
    const { lat, lon } = req.body;

    return res.status(200).json({
      lat,
      lon
    });
  }
}

export default new WeatherController();

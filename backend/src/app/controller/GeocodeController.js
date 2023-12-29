import { GeocodeService } from "../service/GeocodeService.js";

class GeocodeController {
  /**
   *
   * @param {Request} req
   * @param {Response} res
   * @returns json
   */
  async getLocalization(req, res) {
    const { lat, lon, search } = req.query;
    const concatLocalization = new String().concat(`${lat},${lon}`);

    const getLocalization = await new GeocodeService().getLocalization({ at: concatLocalization, search });
    return res.status(200).json(getLocalization);
  }
}

export default new GeocodeController();
import { GeocodeService } from "../service/GeocodeService.js";

class GeocodeController {
  /**
   *
   * @param {Request} req
   * @param {Response} res
   * @returns json
   */
  async getLocalization(req, res) {
    const getLocalization = await new GeocodeService().getLocalization();
    return res.status(200).json(getLocalization);
  }
}

export default new GeocodeController();
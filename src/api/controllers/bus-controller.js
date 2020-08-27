import { BusFacade } from '@facades';

export default class BusController {
  static async findBus(req, res, next) {
    try {
      const result = await BusFacade.findBus(req.query, req.body);

      return res.status(200).json(result);
    } catch (err) {
      return next(err);
    }
  }
}

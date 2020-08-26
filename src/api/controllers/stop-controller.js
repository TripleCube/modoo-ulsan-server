import { StopFacade } from '@facades';

export default class StopController {
  static async findStop(req, res, next) {
    try {
      const result = await StopFacade.findStop(req.query, req.body);

      return res.status(200).json(result);
    } catch (err) {
      return next(err);
    }
  }
}

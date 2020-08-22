import { UserFacade } from '@facades';

export default class UserController {
  static async registerAccount(req, res, next) {
    try {
      const result = await UserFacade.registerAccount(req.body);

      return res.status(200).json(result);
    } catch (err) {
      return next(err);
    }
  }

  static async verifyEmail(req, res, next) {
    try {
      const result = await UserFacade.verifyEmail(req.params, req.body);

      return res.status(200).json(result);
    } catch (err) {
      return next(err);
    }
  }

  static async registerProfile(req, res, next) {
    try {
      const result = await UserFacade.registerProfile(req.params, req.body);

      return res.status(201).json(result);
    } catch (err) {
      return next(err);
    }
  }
}

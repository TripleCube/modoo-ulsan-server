import { AuthService } from '@services';

export default class AuthController {
  static async signUp(req, res, next) {
    try {
      const account = await AuthService.signUp(req.body);
      return res.status(201).json(account);
    } catch (err) {
      return next(err);
    }
  }

  static async signIn(req, res, next) {
    const { email, password } = req.body;
    try {
      const account = await AuthService.signIn(email, password);
      return res.status(200).json(account);
    } catch (err) {
      return next(err);
    }
  }

  static async signOut(req, res, next) {
    try {
      /**
       * TODO:
       * - Create a AuthService.signOut and add it.
       */
      return res.status(200).end();
    } catch (err) {
      return next(err);
    }
  }
}

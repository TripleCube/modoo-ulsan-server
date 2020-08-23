import HttpError from './http-error';

export default class UnauthorizedError extends HttpError {
  constructor() {
    super(401, 'The email address or password is incorrect.');
  }
}

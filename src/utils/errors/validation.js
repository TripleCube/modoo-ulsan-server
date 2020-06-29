import HttpError from './http-error';

export default class ValidationError extends HttpError {
  constructor(message) {
    super(422, message);
  }
}

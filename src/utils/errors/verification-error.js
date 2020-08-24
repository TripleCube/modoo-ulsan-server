import HttpError from './http-error';

export default class VerificationError extends HttpError {
  constructor() {
    super(403, 'The verification code is incorrect.');
  }
}

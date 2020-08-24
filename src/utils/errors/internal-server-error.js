import HttpError from './http-error';

export default class InternalServerError extends HttpError {
  constructor(type = '') {
    const value = type === 'verif' ? 'Verification' : '';

    super(419, `${value} timed out.`);
  }
}

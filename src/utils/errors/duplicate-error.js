import HttpError from './http-error';

export default class DuplicateError extends HttpError {
  constructor(type = '') {
    const value = type === 'email' ? 'email address' : 'display name';

    super(409, `The ${value} is already in use.`);
  }
}

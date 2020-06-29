export default class HttpError extends Error {
  constructor(statusCode, message) {
    super(message);

    this.name = this.constructor.name;
    this.statusCode = statusCode;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

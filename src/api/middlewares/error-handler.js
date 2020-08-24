import { error } from '@utils';

function handleClientError(err, req, res, next) {
  if (err instanceof error.ValidationError) {
    const { statusCode, message } = err;

    return res.status(statusCode).json({ status: 'fail', message });
  }

  return next(err);
}

function handleServerError(err, req, res, next) {
  const { statusCode, message } = err;

  return res.status(statusCode || 500).json({ status: 'error', message });
}

export { handleClientError, handleServerError };

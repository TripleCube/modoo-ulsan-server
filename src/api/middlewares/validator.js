import { error } from '@utils';

function validateValue(schema, value, next) {
  const result = schema.validate(value);
  if (result.error) {
    throw new error.ValidationError(result.error.details[0].message);
  }

  return next();
}

export function validateParams(schema) {
  return (req, res, next) => validateValue(schema, req.params, next);
}

export function validateBody(schema) {
  return (req, res, next) => validateValue(schema, req.body, next);
}

export function validateQuery(schema) {
  return (req, res, next) => validateValue(schema, req.query, next);
}

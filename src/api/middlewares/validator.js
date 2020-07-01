import Joi from '@hapi/joi';

import { ValidationError } from '@utils/errors';

function validateValue(schema, value, next) {
  const result = schema.validate(value);
  if (result.error) {
    throw new ValidationError(result.error.details[0].message);
  }
  return next();
}

function validateBody(schema) {
  return (req, res, next) => validateValue(schema, req.body, next);
}

function validateParam(schema) {
  return (req, res, next) => validateValue(schema, req.params, next);
}

const authentication = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});

export { validateBody, validateParam, authentication };

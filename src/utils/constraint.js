import Joi from '@hapi/joi';

export const account = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});
export const uuid = Joi.object({
  uuid: Joi.string().length(32).required(),
});
export const verifCode = Joi.object({
  verifCode: Joi.string().length(6).required(),
});

export const credentials = {};
export const identity = {};
export const authentication = {};

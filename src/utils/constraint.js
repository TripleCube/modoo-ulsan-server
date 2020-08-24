import Joi from '@hapi/joi';

export const account = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'), 'password')
    .required(),
});
export const uuid = Joi.object({
  uuid: Joi.string().length(32).required(),
});
export const verifCode = Joi.object({
  verifCode: Joi.string().length(6).required(),
});
export const displayName = Joi.object({
  displayName: Joi.string()
    .pattern(new RegExp('^[가-힣a-zA-Z]{2,7}$'), 'display name')
    .invalid('admin')
    .required(),
});

export const credentials = {};
export const identity = {};
export const authentication = {};

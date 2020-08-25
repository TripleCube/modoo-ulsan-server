import env from './env';

const { request } = env;
const { google, tago, ulsan } = request;

tago.params = { ...tago.params, _type: 'json' };

const googleConfig = google;
const tagoConfig = tago;
const ulsanConfig = ulsan;

export default { googleConfig, tagoConfig, ulsanConfig };

import axios from 'axios';

import { request } from '@config';

const { googleConfig, tagoConfig, ulsanConfig } = request;

const google = axios.create(googleConfig);
const tago = axios.create(tagoConfig);
const ulsan = axios.create(ulsanConfig);

export default { google, tago, ulsan };

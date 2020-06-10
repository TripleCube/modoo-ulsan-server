import dotenv from 'dotenv';

const result = dotenv.config();

if (result.error) {
  throw new Error("Couldn't find env file");
}

let name;
let logging;

switch (process.env.NODE_ENV) {
  case 'production':
    name = process.env.DB_PROD;
    logging = false;
    break;
  case 'test':
    name = process.env.DB_TEST;
    logging = false;
    break;
  default:
    process.env.NODE_ENV = 'development';
    name = process.env.DB_DEV;
    logging = console.log;
}

const env = {
  node: process.env.NODE_ENV,
  server: {
    port: process.env.PORT || 3000,
  },
  database: {
    name,
    logging,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    timezone: process.env.DB_TIMEZONE,
  },
};

export default env;

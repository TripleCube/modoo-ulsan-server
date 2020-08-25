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
    port: +process.env.DB_PORT,
    timezone: process.env.DB_TIMEZONE,
  },
  member: {
    email: process.env.MEMBER_EMAIL,
    password: process.env.MEMBER_PASSWORD,
    address: process.env.MEMBER_ADDRESS,
    coordinates: process.env.MEMBER_COORDINATES,
    profileImage: process.env.MEMBER_IMAGE,
  },
  token: {
    signature: process.env.JWT_SIGNATURE,
    expiration: process.env.JWT_EXPIRATION,
  },
  mailer: {
    host: process.env.MAILER_HOST,
    port: process.env.MAILER_PORT,
    secure: process.env.MAILER_SECURE,
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PASS,
    },
  },
  request: {
    google: {
      baseURL: process.env.REQ_GOOGLE_URL,
      timeout: +process.env.REQ_GOOGLE_WAIT,
      params: {
        serviceKey: process.env.REQ_GOOGLE_KEY,
      },
    },
    tago: {
      baseURL: process.env.REQ_TAGO_URL,
      timeout: +process.env.REQ_TAGO_WAIT,
      params: {
        serviceKey: process.env.REQ_TAGO_KEY,
        cityCode: process.env.REQ_TAGO_CITY,
      },
    },
    ulsan: {
      baseURL: process.env.REQ_ULSAN_URL,
      timeout: +process.env.REQ_ULSAN_WAIT,
      params: {
        serviceKey: process.env.REQ_ULSAN_KEY,
      },
    },
  },
};

export default env;

import env from './env';

const { google, kauth, kakao, tago, ulsan } = env.request;

kakao.headers = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
};
kakao.params = {
  secure_resource: true,
};

tago.params._type = 'json';

const googleConfig = google;
const kakaoConfig = kakao;
const kauthConfig = kauth;
const tagoConfig = tago;
const ulsanConfig = ulsan;

export default {
  googleConfig,
  kauthConfig,
  kakaoConfig,
  tagoConfig,
  ulsanConfig,
};

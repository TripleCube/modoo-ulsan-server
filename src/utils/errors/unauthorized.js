import HttpError from './http-error';

export default class UnauthorizedError extends HttpError {
  constructor() {
    super(401, '이메일 또는 비밀번호가 일치하지 않습니다.');
  }
}

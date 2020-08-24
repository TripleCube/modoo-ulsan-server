import { cache, converter } from '@utils';

export default class AccountCache {
  static exists(email) {
    return cache.existsAsync(email);
  }

  static async store(key, account) {
    await cache.hsetAsync(key, converter.toArray(account));
    await cache.expireAsync(key, 600);
  }

  static async update(key, account) {
    await cache.hsetAsync(key, converter.toArray(account));
    await cache.expireAsync(key, 7200);
  }
}

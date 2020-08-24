import { cache, converter } from '@utils';

export default class CommonCache {
  static updateHash(key, props) {
    return cache.hsetAsync(key, converter.toArray(props));
  }

  static findHashBy(key) {
    return cache.hgetallAsync(key);
  }

  static deleteBy(key) {
    return cache.delAsync(key);
  }
}

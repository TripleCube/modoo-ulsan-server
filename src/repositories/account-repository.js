import { AccountCache, CommonCache } from '@caches';
import { Account } from '@models';

export default class AccountRepository {
  static exists(email) {
    return AccountCache.exists(email);
  }

  static store(account) {
    const { uuid, ...props } = account;
    const key = `verif:${uuid}`;

    return AccountCache.store(key, props);
  }

  static findByUuid(uuid) {
    const key = `verif:${uuid}`;

    return CommonCache.findHashBy(key);
  }

  static update(account) {
    const { uuid, ...props } = account;
    const key = `verif:${uuid}`;

    return CommonCache.updateHash(key, props);
  }

  static updateVerification(account) {
    const { uuid, ...props } = account;
    const key = `verif:${uuid}`;

    return AccountCache.update(key, props);
  }

  static delete(uuid) {
    const key = `verif:${uuid}`;

    return CommonCache.deleteBy(key);
  }

  static create(account, transaction) {
    return Account.create(account, { transaction });
  }

  static findByEmail(email) {
    return Account.findOne({
      where: { email },
      attributes: { exclude: ['id'] },
    });
  }

  static findAllEmail() {
    return Account.findAll({
      attributes: { include: ['email', 'member'] },
    });
  }
}

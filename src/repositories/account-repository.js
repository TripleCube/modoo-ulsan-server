import { Account } from '@models';

export default class AccountRepository {
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

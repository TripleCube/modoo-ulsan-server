import { AccountService, MemberService } from '@services';
import { database } from '@utils';

export default class UserFacade {
  static async registerAccount(account) {
    const { email, password } = account;
    await AccountService.check(email);

    const { uuid, verifCode } = await AccountService.store(email, password);
    console.log(uuid, verifCode);

    return { uuid };
  }

  static verifyEmail({ uuid }, { verifCode }) {
    return AccountService.verify(uuid, verifCode);
  }

  static async registerProfile({ uuid }, profile) {
    const { email, hash } = await AccountService.find(uuid);

    const result = await database.startTransaction(async transaction => {
      const member = await MemberService.create(profile, transaction);
      const account = await AccountService.create(
        { memberId: member.id, email, password: hash },
        transaction,
      );
      return account;
    });

    return result;
  }
}

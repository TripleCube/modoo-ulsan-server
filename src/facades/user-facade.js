import { AccountService } from '@services';

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
    const {} = profile;
  }
}

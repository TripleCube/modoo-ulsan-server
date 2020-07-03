import { Account, Member } from '@repositories';
import { startTransaction } from '@utils/database';
import { UnauthorizedError } from '@utils/errors';
import { compare, hash } from '@utils/password';
import { decodeToken, generateToken } from '@utils/token';

export default class AuthService {
  static async signUp(account) {
    const password = await hash(account.password);
    return startTransaction(transaction => {
      return Account.create({ ...account, password }, transaction);
    });
  }

  static async signIn(email, password) {
    const account = await Account.findByEmail(email);
    if (!account) throw new UnauthorizedError();

    const isValid = await compare(password, account.password);
    if (!isValid) throw new UnauthorizedError();

    const member = await Member.findById(account.memberId);
    const token = generateToken(member);

    return { account, member, token };
  }
}

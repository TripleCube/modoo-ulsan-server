import { AccountRepo } from '@repositories';
import { encryption, error, random } from '@utils';

export default class AccountService {
  static async check(email) {
    const emailExists = await AccountRepo.exists(email);
    if (emailExists) throw new error.DuplicateError('email');
  }

  static async store(email, password) {
    const uuid = random.generateUuid();
    const verifCode = random.generateRandomNumber(6);
    const hash = await encryption.hashPassword(password);
    const verifCount = 0;
    await AccountRepo.store({ uuid, verifCode, email, hash, verifCount });

    return { uuid, verifCode };
  }

  static async verify(uuid, verifCode) {
    const account = await AccountRepo.findByUuid(uuid);
    // 인증시간 초과
    if (!account) throw new error.UnauthorizedError();

    if (verifCode !== account.verifCode) {
      const count = +account.verifCount + 1;
      // 인증 횟수 초과
      if (count > 1) throw new error.UnauthorizedError();

      await AccountRepo.update({ uuid, verifCount: count });
      // 인증 번호 틀림
      throw new error.UnauthorizedError();
    }

    const isVerification = true;
    await AccountRepo.update({ uuid, isVerification });

    return { isVerification };
  }

  static async findBy(email) {
    const account = await AccountRepo.findByEmail(email);
    if (!account) throw new error.UnauthorizedError();

    return account;
  }

  static async create(account, transaction) {
    const password = await encryption.hashPassword(account.password);

    return AccountRepo.create({ ...account, password }, transaction);
  }
}

// static async signUp(account) {
//   const password = await hash(account.password);
//   return startTransaction(transaction => {
//     return Account.create({ ...account, password }, transaction);
//   });
// }

// static async signIn(email, password) {
//   const account = await Account.findByEmail(email);
//   if (!account) throw new UnauthorizedError();

//   const isValid = await compare(password, account.password);
//   if (!isValid) throw new UnauthorizedError();

//   const member = await Member.findById(account.memberId);
//   const token = generateToken(member);

//   return { account, member, token };
// }

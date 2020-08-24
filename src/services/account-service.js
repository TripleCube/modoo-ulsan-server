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
    if (!account) throw new error.NotFoundError();

    if (verifCode !== account.verifCode) {
      const count = +account.verifCount + 1;
      if (count > 1) {
        await AccountRepo.delete(uuid);
        throw new error.NotFoundError();
      }

      await AccountRepo.update({ uuid, verifCount: count });
      throw new error.VerificationError();
    }

    const isVerification = true;
    await AccountRepo.updateVerification({ uuid, isVerification });

    return { isVerification };
  }

  static async find(uuid) {
    const account = await AccountRepo.findByUuid(uuid);
    if (!account) throw new error.NotFoundError();

    if (!account.isVerification) {
      await AccountRepo.delete(uuid);
      throw new error.NotFoundError();
    }

    return account;
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

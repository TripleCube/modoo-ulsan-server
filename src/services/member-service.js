import { MemberRepo } from '@repositories';
import { database } from '@utils';

export default class MemberService {
  static async create(member, transaction) {
    const { point, ...props } = member;
    const location = database.setLocation(point);
    const points = 100;
    const dailyLimit = 50;
    const roleId = 3;

    return MemberRepo.create(
      { location, points, dailyLimit, roleId, ...props },
      transaction,
    );
  }
}

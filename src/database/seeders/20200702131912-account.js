import { env } from '@config';
import Seeder from '@utils/seeder';

const tableName = 'account';
const records = [
  {
    email: env.member.email,
    password: env.member.password,
    member_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    email: 'test@test.com',
    password: env.member.password,
    member_id: 2,
    created_at: new Date(),
    updated_at: new Date(),
  },
];

export default new Seeder(tableName, records);

import { env } from '@config';
import { database, seeder } from '@utils';

const tableName = 'member';
const records = [
  {
    display_name: 'Administrator',
    address: env.member.address,
    location: database.setLocation(env.member.coordinates),
    profile_image: env.member.profileImage,
    points: 100,
    daily_limit: 50,
    role_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    display_name: 'Manager',
    address: env.member.address,
    location: database.setLocation(env.member.coordinates),
    profile_image: env.member.profileImage,
    points: 100,
    daily_limit: 50,
    role_id: 2,
    created_at: new Date(),
    updated_at: new Date(),
  },
];

export default new seeder.Seeder(tableName, records);

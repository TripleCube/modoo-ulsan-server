import { env } from '@config';
import { setLocation } from '@utils/database';
import Seeder from '@utils/seeder';

const tableName = 'member';
const records = [
  {
    display_name: 'Administrator',
    point: 100,
    address: env.member.address,
    location: setLocation(env.member.coordinates),
    profile_image: env.member.profileImage,
    role_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    display_name: 'Manager',
    point: 100,
    address: env.member.address,
    location: setLocation(env.member.coordinates),
    profile_image: env.member.profileImage,
    role_id: 2,
    created_at: new Date(),
    updated_at: new Date(),
  },
];

export default new Seeder(tableName, records);

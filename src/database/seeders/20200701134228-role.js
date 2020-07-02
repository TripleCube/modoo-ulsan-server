import Seeder from '@utils/seeder';

const tableName = 'role';
const records = [
  { name: 'administrator' },
  { name: 'manager' },
  { name: 'moderator' },
  { name: 'member' },
  { name: 'associate member' },
];

export default new Seeder(tableName, records);

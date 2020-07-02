import Seeder from '@utils/seeder';

const tableName = 'section';
const records = [
  { name: 'posts', is_mine: true },
  { name: 'posts', is_mine: false },
  { name: 'comments', is_mine: true },
  { name: 'comments', is_mine: false },
  { name: 'profile', is_mine: true },
  { name: 'profile', is_mine: false },
];

export default new Seeder(tableName, records);

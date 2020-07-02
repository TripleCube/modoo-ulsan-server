import Seeder from '@utils/seeder';

const tableName = 'role_permission';
const records = [
  // posts section
  { role_id: 2, permission_id: 1 },
  { role_id: 2, permission_id: 2 },
  { role_id: 2, permission_id: 3 },
  { role_id: 2, permission_id: 4 },
  { role_id: 2, permission_id: 5 },
  { role_id: 2, permission_id: 6 },
  { role_id: 2, permission_id: 7 },
  // comments section
  { role_id: 2, permission_id: 8 },
  { role_id: 2, permission_id: 9 },
  { role_id: 2, permission_id: 10 },
  { role_id: 2, permission_id: 11 },
  { role_id: 2, permission_id: 12 },
  { role_id: 2, permission_id: 13 },
  { role_id: 2, permission_id: 14 },
  // profile section
  { role_id: 2, permission_id: 15 },
  { role_id: 2, permission_id: 16 },
  { role_id: 2, permission_id: 17 },
  { role_id: 2, permission_id: 18 },
  { role_id: 2, permission_id: 19 },
  { role_id: 2, permission_id: 20 },
  { role_id: 2, permission_id: 21 },

  // posts section
  { role_id: 3, permission_id: 1 },
  { role_id: 3, permission_id: 2 },
  { role_id: 3, permission_id: 3 },
  { role_id: 3, permission_id: 4 },
  { role_id: 3, permission_id: 5 },
  { role_id: 3, permission_id: 7 },
  // comments section
  { role_id: 3, permission_id: 8 },
  { role_id: 3, permission_id: 9 },
  { role_id: 3, permission_id: 10 },
  { role_id: 3, permission_id: 11 },
  { role_id: 3, permission_id: 12 },
  { role_id: 3, permission_id: 14 },
  // profile section
  { role_id: 3, permission_id: 15 },
  { role_id: 3, permission_id: 16 },
  { role_id: 3, permission_id: 17 },
  { role_id: 3, permission_id: 18 },
  { role_id: 3, permission_id: 19 },

  // posts section
  { role_id: 4, permission_id: 1 },
  { role_id: 4, permission_id: 2 },
  { role_id: 4, permission_id: 3 },
  { role_id: 4, permission_id: 4 },
  { role_id: 4, permission_id: 5 },
  // comments section
  { role_id: 4, permission_id: 8 },
  { role_id: 4, permission_id: 9 },
  { role_id: 4, permission_id: 10 },
  { role_id: 4, permission_id: 11 },
  { role_id: 4, permission_id: 12 },
  // profile section
  { role_id: 4, permission_id: 15 },
  { role_id: 4, permission_id: 16 },
  { role_id: 4, permission_id: 17 },
  { role_id: 4, permission_id: 18 },
  { role_id: 4, permission_id: 19 },

  // posts section
  { role_id: 5, permission_id: 5 },
  // comments section
  { role_id: 5, permission_id: 8 },
  { role_id: 5, permission_id: 9 },
  { role_id: 5, permission_id: 10 },
  { role_id: 5, permission_id: 11 },
  { role_id: 5, permission_id: 12 },
  // profile section
  { role_id: 5, permission_id: 15 },
  { role_id: 5, permission_id: 16 },
  { role_id: 5, permission_id: 17 },
  { role_id: 5, permission_id: 18 },
  { role_id: 5, permission_id: 19 },
];

export default new Seeder(tableName, records);

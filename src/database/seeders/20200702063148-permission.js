import Seeder from '@utils/seeder';

const tableName = 'permission';
const records = [
  // posts section
  { section_id: 1, type: 'R' },
  { section_id: 1, type: 'W' },
  { section_id: 1, type: 'E' },
  { section_id: 1, type: 'D' },
  { section_id: 2, type: 'R' },
  { section_id: 2, type: 'E' },
  { section_id: 2, type: 'D' },
  // comments section
  { section_id: 3, type: 'R' },
  { section_id: 3, type: 'W' },
  { section_id: 3, type: 'E' },
  { section_id: 3, type: 'D' },
  { section_id: 4, type: 'R' },
  { section_id: 4, type: 'E' },
  { section_id: 4, type: 'D' },
  // profile section
  { section_id: 5, type: 'R' },
  { section_id: 5, type: 'W' },
  { section_id: 5, type: 'E' },
  { section_id: 5, type: 'D' },
  { section_id: 6, type: 'R' },
  { section_id: 6, type: 'E' },
  { section_id: 6, type: 'D' },
];

export default new Seeder(tableName, records);

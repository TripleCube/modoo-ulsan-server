import { DataTypes, Migration } from '@utils/migration';

const table = {
  name: 'section',
  columns: {
    id: {
      type: DataTypes.TINYINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_mine: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
};
const indexes = [
  {
    type: 'constraint',
    tableName: 'permission',
    options: {
      fields: ['section_id'],
      type: 'foreign key',
      name: 'permission_fk_section_id',
      references: {
        table: 'section',
        field: 'id',
      },
    },
  },
];

export default new Migration(table, undefined, indexes);

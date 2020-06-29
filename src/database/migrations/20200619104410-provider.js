import { DataTypes, Migration } from '@utils/migration';

const table = {
  name: 'provider',
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
  },
};
const indexes = [
  {
    type: 'constraint',
    tableName: 'identity',
    options: {
      fields: ['provider_id'],
      type: 'foreign key',
      name: 'identity_fk_provider_id',
      references: {
        table: 'provider',
        field: 'id',
      },
    },
  },
];

export default new Migration(table, undefined, indexes);

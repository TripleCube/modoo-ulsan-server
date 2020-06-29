import { DataTypes, Migration } from '@utils/migration';

const table = {
  name: 'identity',
  columns: {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    provider_id: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
    },
    provider_key: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    member_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'member',
        key: 'id',
      },
    },
  },
  timestamps: 1,
};
const indexes = [
  {
    type: 'constraint',
    tableName: 'identity',
    options: {
      fields: ['provider_key', 'provider_id'],
      type: 'unique',
      name: 'identity_ak_provider_key_provider_id',
    },
  },
];

export default new Migration(table, undefined, indexes);

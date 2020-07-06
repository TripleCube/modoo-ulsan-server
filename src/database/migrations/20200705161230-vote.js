import { DataTypes, Migration } from '@utils/migration';

const table = {
  name: 'vote',
  columns: {
    member_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      references: {
        model: 'member',
        key: 'id',
      },
    },
    reference_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      references: {
        model: 'reference',
        key: 'id',
      },
    },
    is_like: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  timestamps: 1,
};

export default new Migration(table);

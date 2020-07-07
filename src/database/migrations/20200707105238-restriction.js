import { DataTypes, Migration } from '@utils/migration';

const table = {
  name: 'restriction',
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
    violation_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'violation',
        key: 'id',
      },
    },
  },
  timestamps: 1,
};

export default new Migration(table);

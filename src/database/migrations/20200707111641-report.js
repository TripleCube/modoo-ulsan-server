import { DataTypes, Migration } from '@utils/migration';

const table = {
  name: 'report',
  columns: {
    source_member_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      references: {
        model: 'member',
        key: 'id',
      },
    },
    target_member_id: {
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
    reason: {
      type: DataTypes.STRING,
      allowNull: false,
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

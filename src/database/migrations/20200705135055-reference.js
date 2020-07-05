import { DataTypes, Migration } from '@utils/migration';

const table = {
  name: 'reference',
  columns: {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    source: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    action_id: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'action',
        key: 'id',
      },
    },
  },
};

export default new Migration(table);

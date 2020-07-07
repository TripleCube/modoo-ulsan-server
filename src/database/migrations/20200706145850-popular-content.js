import { DataTypes, Migration } from '@utils/migration';

const table = {
  name: 'comment',
  columns: {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    reference_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'reference',
        key: 'id',
      },
    },
    board_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      references: {
        model: 'board',
        key: 'id',
      },
    },
  },
  timestamps: 1,
};

export default new Migration(table);

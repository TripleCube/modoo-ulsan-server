import { DataTypes, Migration } from '@utils/migration';

const table = {
  name: 'travel_time',
  columns: {
    travel_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      references: {
        model: 'travel',
        key: 'id',
      },
    },
    day_id: {
      type: DataTypes.TINYINT.UNSIGNED,
      primaryKey: true,
      references: {
        model: 'day',
        key: 'id',
      },
    },
    time: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
    },
    source_count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  timestamps: 2,
};

export default new Migration(table);

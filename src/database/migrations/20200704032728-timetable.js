import { DataTypes, Migration } from '@utils/migration';

const table = {
  name: 'timetable',
  columns: {
    transit_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      references: {
        model: 'transit',
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
    sequence: {
      type: DataTypes.TINYINT.UNSIGNED,
      primaryKey: true,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
};

export default new Migration(table);

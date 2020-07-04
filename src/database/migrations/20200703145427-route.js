import { DataTypes, Migration } from '@utils/migration';

const table = {
  name: 'route',
  columns: {
    transit_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      references: {
        model: 'transit',
        key: 'id',
      },
    },
    sequence: {
      type: DataTypes.TINYINT.UNSIGNED,
      primaryKey: true,
    },
    stop_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'stop',
        key: 'id',
      },
    },
  },
};

export default new Migration(table);

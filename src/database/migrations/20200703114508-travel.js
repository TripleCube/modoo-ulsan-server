import { DataTypes, Migration } from '@utils/migration';

const table = {
  name: 'travel',
  columns: {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    origin_stop_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'stop',
        key: 'id',
      },
    },
    destination_stop_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'stop',
        key: 'id',
      },
    },
    distance: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
    },
  },
};

export default new Migration(table);

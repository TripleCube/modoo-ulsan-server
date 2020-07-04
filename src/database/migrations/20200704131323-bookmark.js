import { DataTypes, Migration } from '@utils/migration';

const table = {
  name: 'bookmark',
  columns: {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    member_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'member',
        key: 'id',
      },
    },
    stop_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'stop',
        key: 'id',
      },
    },
    transit_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: 'transit',
        key: 'id',
      },
    },
  },
};

export default new Migration(table);

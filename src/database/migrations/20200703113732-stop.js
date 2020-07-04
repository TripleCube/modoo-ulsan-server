import { DataTypes, Migration } from '@utils/migration';

const table = {
  name: 'stop',
  columns: {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
    },
    location: {
      type: DataTypes.GEOMETRY('POINT', 4326),
      allowNull: false,
    },
    remark: {
      type: DataTypes.STRING,
    },
    is_limousine_bus_stop: {
      type: DataTypes.BOOLEAN,
    },
    deleted_at: {
      type: DataTypes.DATE,
    },
  },
};

export default new Migration(table);

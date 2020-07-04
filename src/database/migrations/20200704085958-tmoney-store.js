import { DataTypes, Migration } from '@utils/migration';

const table = {
  name: 'tmoney_store',
  columns: {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.GEOMETRY('POINT', 4326),
      allowNull: false,
    },
  },
};

export default new Migration(table);

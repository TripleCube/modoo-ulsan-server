import { DataTypes, Migration } from '@utils/migration';

const table = {
  name: 'day',
  columns: {
    id: {
      type: DataTypes.TINYINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
};

export default new Migration(table);

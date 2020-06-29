import { DataTypes, Migration } from '@utils/migration';

const table = {
  name: 'role',
  columns: {
    id: {
      type: DataTypes.SMALLINT.UNSIGNED,
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

import { DataTypes, Migration } from '@utils/migration';

const table = {
  name: 'permission',
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

export default Migration.init(table);

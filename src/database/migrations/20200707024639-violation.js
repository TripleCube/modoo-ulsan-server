import { DataTypes, Migration } from '@utils/migration';

const table = {
  name: 'violation',
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
    period: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
    },
  },
};

export default new Migration(table);

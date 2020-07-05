import { DataTypes, Migration } from '@utils/migration';

const table = {
  name: 'action',
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
    points: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
    },
  },
};

export default new Migration(table);

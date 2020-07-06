import { DataTypes, Migration } from '@utils/migration';

const table = {
  name: 'board',
  columns: {
    id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    keyword: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sort_order: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'role',
        key: 'id',
      },
    },
    parent_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      references: {
        model: 'board',
        key: 'id',
      },
    },
  },
};

export default new Migration(table);

import { DataTypes, Migration } from '@utils/migration';

const table = {
  name: 'permission',
  columns: {
    id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    section_id: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
    },
    type: {
      type: DataTypes.CHAR(1),
      allowNull: false,
    },
  },
};

export default new Migration(table);

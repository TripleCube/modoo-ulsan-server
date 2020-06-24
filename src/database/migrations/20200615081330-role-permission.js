import { DataTypes, Migration } from '@utils/migration';

const table = {
  name: 'role_permission',
  columns: {
    role_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      primaryKey: true,
      references: {
        model: 'role',
        key: 'id',
      },
    },
    permission_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      primaryKey: true,
      references: {
        model: 'permission',
        key: 'id',
      },
    },
  },
};

export default Migration.init(table);

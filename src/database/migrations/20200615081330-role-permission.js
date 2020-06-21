import { performMigration } from '@utils/migration';

const tableName = 'role_permission';
const defineAttributes = Sequelize => ({
  role_id: {
    type: Sequelize.SMALLINT.UNSIGNED,
    primaryKey: true,
    references: {
      model: 'role',
      key: 'id',
    },
  },
  permission_id: {
    type: Sequelize.SMALLINT.UNSIGNED,
    primaryKey: true,
    references: {
      model: 'permission',
      key: 'id',
    },
  },
});

export default performMigration(tableName, defineAttributes);

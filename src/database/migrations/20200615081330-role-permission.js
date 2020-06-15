import { performMigration } from '@utils/database';

const tableName = 'role_permission';
const defineAttributes = Sequelize => ({
  role_id: {
    type: Sequelize.SMALLINT.UNSIGNED,
    primaryKey: true,
  },
  permission_id: {
    type: Sequelize.SMALLINT.UNSIGNED,
    primaryKey: true,
  },
});

export default performMigration(tableName, defineAttributes);

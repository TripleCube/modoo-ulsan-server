import { performMigration } from '@utils/database';

const tableName = 'role';
const defineAttributes = Sequelize => ({
  id: {
    type: Sequelize.SMALLINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default performMigration(tableName, defineAttributes);
import { performMigration } from '@utils/migration';

const tableName = 'permission';
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

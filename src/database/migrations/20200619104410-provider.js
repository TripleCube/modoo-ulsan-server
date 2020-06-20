import { performMigration } from '@utils/migration';

const tableName = 'provider';
const defineAttributes = Sequelize => ({
  id: {
    type: Sequelize.TINYINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default performMigration(tableName, defineAttributes);

import { addTimestamps, performMigration } from '@utils/database';

const tableName = 'identity';
const defineAttributes = Sequelize => ({
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  provider_id: {
    type: Sequelize.TINYINT.UNSIGNED,
    allowNull: false,
  },
  provider_key: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
  },
  member_id: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'member',
      key: 'id',
    },
  },
  ...addTimestamps(Sequelize, 1),
});

export default performMigration(tableName, defineAttributes);

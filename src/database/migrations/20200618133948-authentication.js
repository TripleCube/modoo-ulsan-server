import { addTimestamps, performMigration } from '@utils/database';

const tableName = 'authentication';
const defineAttributes = Sequelize => ({
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
  },
  provider: {
    type: Sequelize.TINYINT.UNSIGNED,
    primaryKey: true,
  },
  member_id: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'member',
      key: 'id',
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  token: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  expires_at: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  ...addTimestamps(Sequelize, 2),
});

export default performMigration(tableName, defineAttributes);

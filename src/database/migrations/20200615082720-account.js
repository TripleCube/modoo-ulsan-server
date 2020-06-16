import { performMigration, addTimestamps } from '@utils/database';

const tableName = 'account';
const defineAttributes = Sequelize => ({
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  member_id: {
    type: Sequelize.INTEGER.UNSIGNED,
    unique: true,
    references: {
      model: 'member',
      key: 'id',
    },
  },
  ...addTimestamps(Sequelize, 2),
});

export default performMigration(tableName, defineAttributes);

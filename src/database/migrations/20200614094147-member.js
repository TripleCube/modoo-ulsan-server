import { performMigration, addTimestamps } from '@utils/database';

const tableName = 'member';
const defineAttributes = Sequelize => ({
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  display_name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  point: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  location: {
    type: Sequelize.GEOMETRY('POINT', 4326),
    allowNull: false,
  },
  profile_image: {
    type: 'BINARY(16)',
    allowNull: false,
  },
  role_id: {
    type: Sequelize.SMALLINT.UNSIGNED,
    allowNull: false,
  },
  ...addTimestamps(Sequelize, 3),
});

export default performMigration(tableName, defineAttributes);

import { Sequelize } from 'sequelize';
import database from './database';

const sequelize = new Sequelize(
  database.database,
  database.username,
  database.password,
  database,
);

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(error => console.error('Unable to connect to the database:', error));

export default sequelize;

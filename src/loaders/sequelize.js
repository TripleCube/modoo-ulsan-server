import { Sequelize } from 'sequelize';

import { database } from '@config';

const sequelize = new Sequelize(database);

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(error => console.error('Unable to connect to the database:', error));

export default sequelize;

import { Sequelize } from 'sequelize';

import { database } from '@config';
import * as models from '@models';

const sequelize = new Sequelize(database);

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(error => console.error('Unable to connect to the database:', error));

Object.values(models)
  .map(model => model.init(sequelize))
  .map(model => model.associate && model.associate(sequelize.models));

export default sequelize;

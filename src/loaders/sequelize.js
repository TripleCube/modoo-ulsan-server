import { Sequelize } from 'sequelize';

import { database } from '@config';
import * as Models from '@models';

const sequelize = new Sequelize(database);
const models = Object.values(Models);

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(error => console.error('Unable to connect to the database:', error));

models.forEach(model => model.init(sequelize));
models.forEach(model => model.associate && model.associate(sequelize.models));

export default sequelize;

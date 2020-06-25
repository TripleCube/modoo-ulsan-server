import * as Models from '@models';

import sequelize from './sequelize';

const models = Object.values(Models);

models.forEach(model => model.init(sequelize));
models.forEach(model => model.associate && model.associate(sequelize.models));

export default models;

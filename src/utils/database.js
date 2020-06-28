import { sequelize } from '@loaders';

const query = sequelize.getQueryInterface();

function startTransaction(callback) {
  return sequelize.transaction(transaction => callback(transaction));
}

export { query, startTransaction };

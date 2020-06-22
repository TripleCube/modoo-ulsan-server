import { sequelize } from '@loaders';

const query = sequelize.getQueryInterface();

function startTransaction(callback) {
  return sequelize.transaction(async transaction => {
    await callback(transaction);
  });
}

export { query, startTransaction };

import { sequelize } from '@loaders';

const query = sequelize.getQueryInterface();

function startTransaction(callback) {
  return sequelize.transaction(transaction => callback(transaction));
}

function setLocation(coordinates) {
  return sequelize.fn('ST_GeomFromText', coordinates);
}

export { query, startTransaction, setLocation };

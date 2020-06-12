import { Sequelize } from 'sequelize';
import { database } from '@config';

export const sequelize = new Sequelize(database);

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(error => console.error('Unable to connect to the database:', error));

export function executeTransaction(callback) {
  return sequelize.transaction(async transaction => {
    await callback(transaction);
  });
}

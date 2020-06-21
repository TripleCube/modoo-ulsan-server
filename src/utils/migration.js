import { sequelize } from '@loaders';

function executeTransaction(callback) {
  return sequelize.transaction(async transaction => {
    await callback(transaction);
  });
}

function createTable(tableName, defineAttributes) {
  return async (queryInterface, Sequelize) => {
    await queryInterface.createTable(tableName, defineAttributes(Sequelize));
  };
}

function dropTable(tableName) {
  return async queryInterface => {
    await queryInterface.dropTable(tableName);
  };
}

function performMigration(tableName, defineAttributes) {
  return {
    up: createTable(tableName, defineAttributes),
    down: dropTable(tableName),
  };
}

function addTimestamps(Sequelize, numberOfColumns = 1) {
  const timestamps = [
    {
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },
    {
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },
    {
      deleted_at: {
        type: Sequelize.DATE,
      },
    },
  ];

  return timestamps.reduce((columns, timestamp, i) => {
    if (i + 1 >= numberOfColumns) timestamps.splice(numberOfColumns);
    return Object.assign(columns, timestamp);
  }, {});
}

export { executeTransaction, performMigration, addTimestamps };

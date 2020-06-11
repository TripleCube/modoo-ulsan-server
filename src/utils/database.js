function createTable(tableName, attributes) {
  return async (queryInterface, Sequelize) => {
    await queryInterface.createTable(tableName, attributes(Sequelize));
  };
}

function dropTable(tableName) {
  return async queryInterface => {
    await queryInterface.dropTable(tableName);
  };
}

export function createAndDropTable(tableName, attributes) {
  return {
    up: createTable(tableName, attributes),
    down: dropTable(tableName),
  };
}

export function addTimestamps(Sequelize, numberOfColumns = 1) {
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

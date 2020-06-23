import { DataTypes } from 'sequelize';

import { query, startTransaction } from './database';

class Migration {
  static init(table, columns, indexes) {
    this.table = table;
    this.columns = columns;
    this.indexes = indexes;

    return {
      up: () => this.run(),
      down: () => this.revert(),
    };
  }

  static async run() {
    await startTransaction(async transaction => {
      if (this.table) await this.createTable(transaction);
      if (this.columns) await this.addColumns(transaction);
      if (this.indexes) await this.addIndexes(transaction);
    });
  }

  static async revert() {
    await startTransaction(async transaction => {
      if (this.indexes) await this.removeIndexes(transaction);
      if (this.columns) await this.removeColumns(transaction);
      if (this.table) await this.dropTable(transaction);
    });
  }

  static createTable(transaction) {
    if (this.table.timestamps) this.addTimestamps(this.table.timestamps);
    return query.createTable(this.table.name, this.table.columns, {
      transaction,
    });
  }

  static dropTable(transaction) {
    return query.dropTable(this.table.name, { transaction });
  }

  static addColumns(transaction) {
    return this.columns.reduce(async (promise, column) => {
      await promise;
      return query.addColumn(column.tableName, column.name, column.options, {
        transaction,
      });
    }, Promise.resolve());
  }

  static removeColumns(transaction) {
    return Promise.all(
      this.columns.map(column =>
        query.removeColumn(column.tableName, column.name, { transaction }),
      ),
    );
  }

  static addIndexes(transaction) {
    return Promise.all(
      this.indexes.map(index => {
        switch (index.type) {
          case 'index':
            return query.addIndex(index.tableName, index.options, {
              transaction,
            });
          case 'constraint':
            return query.addConstraint(index.tableName, index.options, {
              transaction,
            });
          default:
            throw new Error(`${index.type} is not defined`);
        }
      }),
    );
  }

  static removeIndexes(transaction) {
    return Promise.all(
      this.indexes.map(index => {
        switch (index.type) {
          case 'index':
            return query.removeIndex(index.tableName, index.options.name, {
              transaction,
            });
          case 'constraint':
            return query.removeConstraint(index.tableName, index.options.name, {
              transaction,
            });
          default:
            throw new Error(`${index.type} is not defined`);
        }
      }),
    );
  }

  static addTimestamps(numberOfColumns) {
    const timestamps = [
      {
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        updated_at: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        deleted_at: {
          type: DataTypes.DATE,
        },
      },
    ];

    return timestamps.reduce((columns, timestamp, i) => {
      if (i + 1 >= numberOfColumns) timestamps.splice(numberOfColumns);
      return Object.assign(columns, timestamp);
    }, this.table.columns);
  }
}

export { DataTypes, Migration };

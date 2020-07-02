import { query, startTransaction } from './database';

export default class Seeder {
  constructor(tableName, records) {
    this.tableName = tableName;
    this.records = records;

    return {
      up: () => this.run(),
      down: () => this.revert(),
    };
  }

  run() {
    return startTransaction(transaction =>
      query.bulkInsert(this.tableName, this.records, { transaction }),
    );
  }

  revert() {
    return startTransaction(transaction =>
      query.bulkDelete(this.tableName, null, { transaction }),
    );
  }
}

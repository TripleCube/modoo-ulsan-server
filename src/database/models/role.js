import { Model, DataTypes } from 'sequelize';

export default class Role extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.SMALLINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'role',
      },
    );
  }
}

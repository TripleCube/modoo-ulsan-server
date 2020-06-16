import { Model, DataTypes } from 'sequelize';

export default class Account extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        email: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        memberId: {
          type: DataTypes.INTEGER.UNSIGNED,
          unique: true,
          field: 'member_id',
        },
      },
      {
        sequelize,
        tableName: 'account',
        timestamps: true,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Member, {
      foreignKey: 'memberId',
      targetKey: 'id',
    });
  }
}

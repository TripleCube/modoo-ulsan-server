import { DataTypes, Model } from 'sequelize';

export default class Account extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true,
          },
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        memberId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
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
